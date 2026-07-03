---
name: aws-cli
description: 'AWS CLI command reference and workflow patterns for backend engineers. Covers IAM, EC2, S3, RDS, ECS, Lambda, CloudWatch, Secrets Manager, SSM Parameter Store, and cross-account operations. Use when asked to "query AWS", "list resources", "rotate secrets", "check CloudWatch logs", "scale ECS", "run an SSM command", or "script an AWS operation".'
license: 'MIT'
compatibility: 'Requires AWS CLI v2 installed and configured (aws configure or environment variables). IAM permissions vary by operation — principle of least privilege applies.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit web'
argument-hint: '[service: iam | ec2 | s3 | rds | ecs | lambda | cloudwatch | ssm | secrets]'
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

# aws-cli — AWS CLI Workflows

Common AWS CLI patterns for backend and platform engineering tasks.
All commands use `--output json` unless noted; add `--profile <profile>` for
named profiles and `--region <region>` to override the configured default.

## Safety rules

- Always run `aws ... --dry-run` for EC2 operations before executing
- Never hardcode access keys; use IAM roles, `aws configure`, or environment variables
- For destructive operations (delete, terminate, drop), use `--no-cli-pager` and
  pipe through `jq` to verify the target list before proceeding
- Use `--query` and `--filters` to narrow scope before running bulk mutations

## Step 0: Setup and Diagnostics

```bash
# Check version and active identity
aws --version
aws sts get-caller-identity

# List configured profiles
aws configure list-profiles

# Use a named profile for a command
aws s3 ls --profile prod

# Assume a role (cross-account)
aws sts assume-role \
  --role-arn arn:aws:iam::123456789012:role/DeployRole \
  --role-session-name deploy-session \
  --query 'Credentials.[AccessKeyId,SecretAccessKey,SessionToken]' \
  --output text
```

## IAM

```bash
# List all IAM users
aws iam list-users --query 'Users[*].[UserName,CreateDate]' --output table

# Show a user's attached policies
aws iam list-attached-user-policies --user-name alice

# List all roles
aws iam list-roles --query 'Roles[*].[RoleName,Arn]' --output table

# Show a role's trust policy
aws iam get-role --role-name MyRole --query 'Role.AssumeRolePolicyDocument'

# List all policies attached to a role
aws iam list-attached-role-policies --role-name MyRole

# Simulate a policy (check if action is allowed)
aws iam simulate-principal-policy \
  --policy-source-arn arn:aws:iam::123456789012:role/MyRole \
  --action-names s3:GetObject \
  --resource-arns arn:aws:s3:::my-bucket/*

# Rotate an access key
aws iam create-access-key --user-name alice
aws iam delete-access-key --user-name alice --access-key-id AKIA...
```

## S3

```bash
# List buckets
aws s3 ls

# List objects in a bucket (with sizes)
aws s3 ls s3://my-bucket/ --human-readable --recursive | tail -20

# Sync local directory to S3
aws s3 sync ./dist s3://my-bucket/static --delete

# Copy with server-side encryption
aws s3 cp secret.txt s3://my-bucket/secret.txt --sse aws:kms --sse-kms-key-id alias/my-key

# Check bucket public access block settings
aws s3api get-public-access-block --bucket my-bucket

# Check bucket encryption
aws s3api get-bucket-encryption --bucket my-bucket

# Empty and delete a bucket (destructive)
aws s3 rm s3://my-bucket/ --recursive
aws s3 rb s3://my-bucket
```

## EC2

```bash
# List running instances
aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query 'Reservations[*].Instances[*].[InstanceId,InstanceType,PrivateIpAddress,Tags[?Key==`Name`].Value|[0]]' \
  --output table

# Start / stop instance
aws ec2 start-instances --instance-ids i-0123456789abcdef0
aws ec2 stop-instances --instance-ids i-0123456789abcdef0

# Get console output (useful when SSH is unavailable)
aws ec2 get-console-output --instance-id i-0123456789abcdef0 --output text

# List security groups with their rules
aws ec2 describe-security-groups \
  --query 'SecurityGroups[*].[GroupId,GroupName,Description]' \
  --output table

# Show inbound rules for a security group
aws ec2 describe-security-groups \
  --group-ids sg-12345678 \
  --query 'SecurityGroups[0].IpPermissions'
```

## RDS

```bash
# List all RDS instances
aws rds describe-db-instances \
  --query 'DBInstances[*].[DBInstanceIdentifier,DBInstanceStatus,Engine,EngineVersion,MultiAZ]' \
  --output table

# Check pending maintenance
aws rds describe-pending-maintenance-actions \
  --query 'PendingMaintenanceActions[*].[ResourceIdentifier,PendingMaintenanceActionDetails[0].Action]' \
  --output table

# Create a manual snapshot before risky operations
aws rds create-db-snapshot \
  --db-instance-identifier myapp-prod \
  --db-snapshot-identifier myapp-prod-pre-migration-$(date +%Y%m%d)

# List snapshots
aws rds describe-db-snapshots \
  --db-instance-identifier myapp-prod \
  --query 'DBSnapshots[*].[DBSnapshotIdentifier,SnapshotCreateTime,Status]' \
  --output table

# Modify instance class (requires reboot)
aws rds modify-db-instance \
  --db-instance-identifier myapp-staging \
  --db-instance-class db.t3.large \
  --apply-immediately
```

## ECS

```bash
# List clusters and services
aws ecs list-clusters
aws ecs list-services --cluster myapp-prod

# Describe a service
aws ecs describe-services \
  --cluster myapp-prod \
  --services myapp-api \
  --query 'services[0].[serviceName,status,runningCount,desiredCount,taskDefinition]'

# Force new deployment (rolling update)
aws ecs update-service \
  --cluster myapp-prod \
  --service myapp-api \
  --force-new-deployment

# Scale a service
aws ecs update-service \
  --cluster myapp-prod \
  --service myapp-api \
  --desired-count 4

# List running tasks
aws ecs list-tasks --cluster myapp-prod --service-name myapp-api

# Get task IP for debugging
aws ecs describe-tasks \
  --cluster myapp-prod \
  --tasks <task-arn> \
  --query 'tasks[0].attachments[0].details'
```

## Lambda

```bash
# List functions
aws lambda list-functions \
  --query 'Functions[*].[FunctionName,Runtime,LastModified]' \
  --output table

# Invoke a function synchronously
aws lambda invoke \
  --function-name myapp-processor \
  --payload '{"key":"value"}' \
  --cli-binary-format raw-in-base64-out \
  response.json && cat response.json

# Get function configuration
aws lambda get-function-configuration --function-name myapp-processor

# Update function code from a zip
aws lambda update-function-code \
  --function-name myapp-processor \
  --zip-file fileb://function.zip

# Tail recent log output via CloudWatch
aws logs tail /aws/lambda/myapp-processor --follow
```

## CloudWatch Logs

```bash
# List log groups
aws logs describe-log-groups \
  --query 'logGroups[*].[logGroupName,retentionInDays]' \
  --output table

# Tail a log group in real time
aws logs tail /aws/ecs/myapp --follow --format short

# Query logs (Insights)
aws logs start-query \
  --log-group-name /aws/ecs/myapp \
  --start-time $(date -d '1 hour ago' +%s) \
  --end-time $(date +%s) \
  --query-string 'fields @timestamp, @message | filter @message like /ERROR/ | sort @timestamp desc | limit 50'

# Get query results
aws logs get-query-results --query-id <query-id>

# Get recent log events from a stream
aws logs get-log-events \
  --log-group-name /aws/ecs/myapp \
  --log-stream-name ecs/myapp-api/abc123 \
  --limit 50 \
  --query 'events[*].[timestamp,message]' \
  --output table
```

## Secrets Manager

```bash
# List secrets
aws secretsmanager list-secrets \
  --query 'SecretList[*].[Name,LastChangedDate]' \
  --output table

# Get a secret value
aws secretsmanager get-secret-value \
  --secret-id myapp/prod/db_password \
  --query 'SecretString' \
  --output text

# Rotate a secret (triggers the rotation Lambda)
aws secretsmanager rotate-secret \
  --secret-id myapp/prod/db_password

# Create a new secret
aws secretsmanager create-secret \
  --name myapp/prod/api_key \
  --description "Third-party API key" \
  --secret-string '{"api_key":"<value>"}'

# Update an existing secret
aws secretsmanager put-secret-value \
  --secret-id myapp/prod/api_key \
  --secret-string '{"api_key":"<new-value>"}'
```

## SSM Parameter Store

```bash
# List parameters by path
aws ssm get-parameters-by-path \
  --path /myapp/prod/ \
  --with-decryption \
  --query 'Parameters[*].[Name,Type,LastModifiedDate]' \
  --output table

# Get a single parameter
aws ssm get-parameter \
  --name /myapp/prod/db_host \
  --with-decryption \
  --query 'Parameter.Value' \
  --output text

# Put a parameter (SecureString uses KMS)
aws ssm put-parameter \
  --name /myapp/prod/db_password \
  --type SecureString \
  --value 'mysecretpassword' \
  --key-id alias/myapp-key \
  --overwrite

# Run a command on EC2 instances via SSM (no SSH required)
aws ssm send-command \
  --document-name "AWS-RunShellScript" \
  --targets "Key=tag:Name,Values=myapp-worker" \
  --parameters 'commands=["systemctl status myapp"]' \
  --query 'Command.CommandId' \
  --output text

# Get command output
aws ssm get-command-invocation \
  --command-id <command-id> \
  --instance-id i-0123456789abcdef0 \
  --query '[StandardOutputContent,StandardErrorContent]'
```

## Cost and Usage

```bash
# Show current month cost by service (requires Cost Explorer enabled)
aws ce get-cost-and-usage \
  --time-period Start=$(date +%Y-%m-01),End=$(date +%Y-%m-%d) \
  --granularity MONTHLY \
  --metrics BlendedCost \
  --group-by Type=DIMENSION,Key=SERVICE \
  --query 'ResultsByTime[0].Groups[*].[Keys[0],Metrics.BlendedCost.Amount]' \
  --output table | sort -k2 -rn | head -20
```

## Review Checklist

- [ ] No access keys hardcoded in scripts — use IAM roles or `aws configure`
- [ ] Destructive commands scoped with `--filters` or explicit resource IDs before running
- [ ] Secrets retrieved from Secrets Manager or SSM — not passed as CLI arguments
- [ ] `--dry-run` used for EC2 mutation operations before executing
- [ ] Scripts use `set -euo pipefail` for safety in bash
- [ ] Cross-account operations use `assume-role` with time-limited session credentials

## References

> Always use the official documentation for the AWS CLI version in use — command syntax, flags, and available operations change between v2 minor releases.

- [AWS CLI v2 command reference](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html)
- [AWS CLI configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [AWS CLI named profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"aws-cli","artifact_type":"skill","artifact_version":"20260502033","generator":"vstack","vstack_version":"3.5.1"} -->
