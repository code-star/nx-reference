---
name: cloudformation
description: 'Write, review, and refactor AWS CloudFormation templates. Covers template structure, parameter design, resource naming, stack outputs, cross-stack references, nested stacks, change sets, drift detection, rollback configuration, and security hardening. Use when asked to "write a CloudFormation template", "review this CFN stack", "create a SAM template", "add a CloudFormation resource", or "migrate from CDK to CloudFormation".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access. Requires AWS CLI with appropriate IAM permissions for deploy and drift operations.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[resource type or stack name, e.g. VPC | RDS | ECS service | Lambda function]'
user-invocable: true
disable-model-invocation: false
---
## Skill Context

This skill is part of **vstack** — a VS Code-native AI engineering workflow system.

### AskUserQuestion Format

When you need clarification, use this exact format — never invent or guess:

> **Question:** [The specific question]
> **Options:** A) … | B) … | C) …
> **Default if no response:** [What you'll do]

Never ask more than one question at a time without waiting for the answer.

### Diagram Convention

When producing hand-authored Markdown outputs, prefer Mermaid for flow,
interaction, lifecycle, state, topology, dependency, and decision diagrams when
the format is supported and improves clarity. Use ASCII as a fallback when
Mermaid is unsupported or would be less readable. Keep ASCII/text trees for
directory structures and other scan-friendly hierarchies.

# cloudformation — AWS CloudFormation

Write and review CloudFormation templates for AWS infrastructure.

## Out of scope

- Terraform / Terragrunt IaC (use `terraform` or `terragrunt`)
- General AWS CLI operations (use `aws-cli`)
- CDK authoring (CDK synthesizes to CloudFormation — review the synthesized template with this skill)

## Step 0: Detect Context

```bash
# Check for existing stacks and templates
find . -name "*.yaml" -o -name "*.json" | xargs grep -l "AWSTemplateFormatVersion" 2>/dev/null

# Check for SAM templates
find . -name "template.yaml" -o -name "samconfig.toml" 2>/dev/null

# List deployed stacks in current region
aws cloudformation list-stacks \
  --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE \
  --query 'StackSummaries[*].[StackName,StackStatus]' \
  --output table
```

## Step 1: Template Structure

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Description: >
  One-line description of what this stack provisions.
  Used in the AWS Console — keep it informative.

Metadata:
  AWS::CloudFormation::Interface:
    ParameterGroups:
      - Label:
          default: "Network Configuration"
        Parameters:
          - VpcId
          - SubnetIds
    ParameterLabels:
      VpcId:
        default: "VPC ID"

Parameters:
  Environment:
    Type: String
    AllowedValues: [dev, staging, prod]
    Description: Deployment environment

  VpcId:
    Type: AWS::EC2::VPC::Id
    Description: VPC to deploy into

Conditions:
  IsProd: !Equals [!Ref Environment, prod]

Resources:
  # ... all resources

Outputs:
  ServiceEndpoint:
    Description: Load balancer DNS name
    Value: !GetAtt LoadBalancer.DNSName
    Export:
      Name: !Sub "${AWS::StackName}-ServiceEndpoint"
```

## Step 2: Parameters

```yaml
Parameters:
  # Use AWS-specific parameter types for validation
  VpcId:
    Type: AWS::EC2::VPC::Id

  SubnetIds:
    Type: List<AWS::EC2::Subnet::Id>

  # Constrain values with AllowedValues
  InstanceType:
    Type: String
    Default: t3.medium
    AllowedValues: [t3.small, t3.medium, t3.large, m5.large]

  # Mark secrets as NoEcho
  DbPassword:
    Type: String
    NoEcho: true
    MinLength: 16
    Description: Database password — supply via SSM Parameter or Secrets Manager

  # Prefer SSM Parameter references over raw values for secrets
  DbPasswordSsmPath:
    Type: AWS::SSM::Parameter::Value<String>
    Default: /myapp/prod/db_password
    NoEcho: true
```

**Rules:**

- Use AWS-specific parameter types (`AWS::EC2::VPC::Id`, `AWS::EC2::Subnet::Id`) for automatic validation
- Always add `NoEcho: true` to secret parameters
- Prefer SSM Parameter Store references (`AWS::SSM::Parameter::Value<T>`) for secrets over raw string parameters
- Add `AllowedValues` for all constrained strings

## Step 3: Resource Naming

```yaml
Resources:
  AppSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupName: !Sub "${AWS::StackName}-app-${Environment}"
      VpcId: !Ref VpcId
      Tags:
        - Key: Environment
          Value: !Ref Environment
        - Key: ManagedBy
          Value: cloudformation
```

**Rules:** Logical IDs in PascalCase; physical names use `!Sub "${AWS::StackName}-<role>"` to guarantee cross-stack uniqueness; avoid hardcoded physical names — they block replacement operations.

## Step 4: Intrinsic Functions

| Function                             | Use                                                    |
| ------------------------------------ | ------------------------------------------------------ |
| `!Ref`                               | Reference a parameter or resource's primary identifier |
| `!GetAtt Resource.Attr`              | Get a specific attribute of a resource                 |
| `!Sub "text ${Variable}"`            | String interpolation                                   |
| `!Select [n, !Ref List]`             | Pick item from a list                                  |
| `!Split [",", !Ref StringList]`      | Split a comma-separated string                         |
| `!ImportValue StackName-Export`      | Cross-stack reference                                  |
| `!If [Condition, TrueVal, FalseVal]` | Conditional value                                      |
| `!And`, `!Or`, `!Not`, `!Equals`     | Condition logic                                        |

```yaml
# Cross-stack reference — import an export from another stack
DatabaseEndpoint: !ImportValue
  Fn::Sub: "${NetworkStackName}-DatabaseEndpoint"
```

## Step 5: Conditions

```yaml
Conditions:
  IsProd: !Equals [!Ref Environment, prod]
  IsNotProd: !Not [Condition: IsProd]
  EnableDeletion: !Equals [!Ref EnableDeletion, "true"]

Resources:
  ReadReplica:
    Type: AWS::RDS::DBInstance
    Condition: IsProd   # only created in prod
    Properties:
      # ...

  BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      # ...
      PolicyDocument:
        Statement:
          - Effect: !If [IsProd, Deny, Allow]
```

## Step 6: Stack Outputs and Cross-Stack References

```yaml
Outputs:
  VpcId:
    Description: VPC ID for use by dependent stacks.
    Value: !Ref VPC
    Export:
      Name: !Sub "${AWS::StackName}-VpcId"

  PrivateSubnetIds:
    Description: Comma-separated private subnet IDs.
    Value: !Join [",", [!Ref PrivateSubnet1, !Ref PrivateSubnet2]]
    Export:
      Name: !Sub "${AWS::StackName}-PrivateSubnetIds"
```

**Cross-stack dependency rules:**

- Export names must be unique within a region/account
- A stack cannot be deleted while another stack imports its exports
- Use `!ImportValue` sparingly — tight coupling between stacks; consider SSM Parameter Store for loose coupling

## Step 7: Deploy Workflow

```bash
# Validate template syntax and resource types
aws cloudformation validate-template --template-body file://template.yaml

# Lint with cfn-lint (catches more issues than validate)
cfn-lint template.yaml

# Create/update via change set (recommended — review before execute)
aws cloudformation deploy \
  --template-file template.yaml \
  --stack-name myapp-dev \
  --parameter-overrides \
      Environment=dev \
      VpcId=vpc-12345678 \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
  --no-execute-changeset  # review first

# Show the change set before executing
aws cloudformation describe-change-set \
  --stack-name myapp-dev \
  --change-set-name <change-set-name> \
  --query 'Changes[*].ResourceChange.[Action,ResourceType,LogicalResourceId,Replacement]' \
  --output table

# Execute after review
aws cloudformation deploy \
  --template-file template.yaml \
  --stack-name myapp-dev \
  --parameter-overrides Environment=dev VpcId=vpc-12345678 \
  --capabilities CAPABILITY_IAM
```

## Step 8: Drift Detection

```bash
# Start drift detection
aws cloudformation detect-stack-drift --stack-name myapp-prod

# Check detection status (wait until DETECTION_COMPLETE)
aws cloudformation describe-stack-drift-detection-status \
  --stack-drift-detection-id <id>

# Show drifted resources
aws cloudformation describe-stack-resource-drifts \
  --stack-name myapp-prod \
  --stack-resource-drift-status-filters MODIFIED DELETED \
  --query 'StackResourceDrifts[*].[LogicalResourceId,ResourceType,StackResourceDriftStatus]' \
  --output table
```

## Step 9: Security Hardening

```yaml
# S3 bucket — block public access, enable encryption
AppBucket:
  Type: AWS::S3::Bucket
  Properties:
    BucketEncryption:
      ServerSideEncryptionConfiguration:
        - ServerSideEncryptionByDefault:
            SSEAlgorithm: aws:kms
            KMSMasterKeyID: !Ref KmsKey
    PublicAccessBlockConfiguration:
      BlockPublicAcls: true
      BlockPublicPolicy: true
      IgnorePublicAcls: true
      RestrictPublicBuckets: true
    VersioningConfiguration:
      Status: Enabled

# RDS — encryption, no public access, deletion protection in prod
Database:
  Type: AWS::RDS::DBInstance
  DeletionPolicy: Snapshot
  Properties:
    StorageEncrypted: true
    MultiAZ: !If [IsProd, true, false]
    PubliclyAccessible: false
    DeletionProtection: !If [IsProd, true, false]

# Security group — no 0.0.0.0/0 on admin ports
AppSecurityGroup:
  Type: AWS::EC2::SecurityGroup
  Properties:
    SecurityGroupIngress:
      - IpProtocol: tcp
        FromPort: 443
        ToPort: 443
        CidrIp: 0.0.0.0/0   # HTTPS only — review for internal services
```

**cfn-lint errors to enforce:** `E3001` (invalid resource type), `W3045` (unrestricted SG ingress), `E3030` (invalid property values).

## Review Checklist

- [ ] `AWSTemplateFormatVersion` and `Description` present
- [ ] All parameters have `Description`; secret parameters have `NoEcho: true`
- [ ] Secrets use SSM Parameter Store references, not raw strings
- [ ] Physical resource names use `!Sub "${AWS::StackName}-..."` to avoid collisions
- [ ] All resources tagged with `Environment` and `ManagedBy: cloudformation`
- [ ] S3 buckets: public access blocked, encryption enabled, versioning on
- [ ] RDS: `StorageEncrypted: true`, `PubliclyAccessible: false`, `DeletionProtection` set in prod
- [ ] Security groups: no `0.0.0.0/0` on SSH/RDP; document HTTPS exceptions
- [ ] IAM roles: least-privilege policies; no `*` actions on `*` resources
- [ ] `cfn-lint` passes with no errors or warnings
- [ ] Change set reviewed before executing in production

## References

> Always use the official documentation for the resource types in use — properties, attributes, and supported values change with AWS service updates.

- [CloudFormation resource reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
- [Intrinsic function reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html)
- [cfn-lint](https://github.com/aws-cloudformation/cfn-lint)
- [AWS SAM documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"cloudformation","artifact_type":"skill","artifact_version":"20260502032","generator":"vstack","vstack_version":"3.5.1"} -->
