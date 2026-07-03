---
name: terragrunt
description: 'Write, review, and refactor Terragrunt configurations for DRY multi-environment infrastructure. Covers root and unit-level HCL structure, generate blocks, remote state inheritance, dependency blocks, inputs, mock outputs, and run-all workflows. Use when asked to "write Terragrunt", "set up Terragrunt", "DRY Terraform across environments", "configure Terragrunt dependencies", or "migrate from plain Terraform to Terragrunt".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access. Requires Terraform CLI and Terragrunt installed for plan/apply operations.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[scope: new layout | dependency graph | state migration | run-all workflow | security review]'
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

# terragrunt — DRY Terraform with Terragrunt

Write and review Terragrunt configurations to eliminate repetition across
environments, accounts, and regions.

## Out of scope

- Terraform module authoring (use `terraform`)
- AWS CLI operations (use `aws-cli`)
- CloudFormation templates (use `cloudformation`)

## Step 0: Detect Context

```bash
# Check Terragrunt version
terragrunt --version 2>/dev/null || echo "terragrunt not installed"
terraform version 2>/dev/null || echo "terraform not installed"

# Find all Terragrunt roots
find . -name "terragrunt.hcl" -not -path "*/.terragrunt-cache/*" | sort

# Check if there is a root terragrunt.hcl
ls terragrunt.hcl root.hcl 2>/dev/null || echo "No root HCL found"
```

## Step 1: Repository Structure

Terragrunt works best with a strict directory hierarchy that maps to your
deployment topology.

```
infra/
├── terragrunt.hcl            ← root config: remote state, provider generate block
├── _envcommon/               ← shared inputs across environments
│   ├── vpc.hcl
│   └── rds.hcl
├── dev/
│   ├── account.hcl           ← account-level inputs (account_id, region)
│   ├── vpc/
│   │   └── terragrunt.hcl
│   ├── rds/
│   │   └── terragrunt.hcl
│   └── app/
│       └── terragrunt.hcl
├── staging/
│   └── ...
└── prod/
    └── ...
```

Each leaf `terragrunt.hcl` is a **unit** — one Terraform module invocation.
Parent `terragrunt.hcl` files contain shared configuration inherited by all
descendants.

## Step 2: Root Configuration

```hcl
# infra/terragrunt.hcl — inherited by all units
locals {
  account_vars = read_terragrunt_config(find_in_parent_folders("account.hcl"))
  region       = local.account_vars.locals.region
  account_id   = local.account_vars.locals.account_id
  project      = "myapp"
}

# Remote state — one state file per unit, auto-named from path
remote_state {
  backend = "s3"
  config = {
    bucket         = "${local.project}-terraform-state-${local.account_id}"
    key            = "${path_relative_to_include()}/terraform.tfstate"
    region         = local.region
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
}

# Inject provider block into every unit
generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<-EOF
    provider "aws" {
      region = "${local.region}"

      default_tags {
        tags = {
          Project   = "${local.project}"
          ManagedBy = "terragrunt"
        }
      }
    }
  EOF
}
```

## Step 3: Account-Level Config

```hcl
# infra/dev/account.hcl
locals {
  account_id = "123456789012"
  region     = "eu-west-1"
  env        = "dev"
}
```

## Step 4: Unit Configuration (leaf)

```hcl
# infra/dev/rds/terragrunt.hcl
include "root" {
  path   = find_in_parent_folders()
  expose = true
}

# Pull in shared inputs from _envcommon
locals {
  common = read_terragrunt_config(find_in_parent_folders("_envcommon/rds.hcl"))
  env    = include.root.locals.account_vars.locals.env
}

terraform {
  source = "git::https://github.com/myorg/terraform-modules.git//modules/rds?ref=v2.1.0"
}

inputs = merge(
  local.common.inputs,
  {
    environment = local.env
    db_name     = "myapp_${local.env}"
  }
)
```

## Step 5: Dependency Blocks

```hcl
# infra/dev/app/terragrunt.hcl
include "root" {
  path = find_in_parent_folders()
}

terraform {
  source = "../../../modules/app"
}

dependency "vpc" {
  config_path = "../vpc"

  # Mock outputs for plan without deploying dependencies first
  mock_outputs = {
    vpc_id             = "vpc-00000000"
    private_subnet_ids = ["subnet-00000001", "subnet-00000002"]
  }
  mock_outputs_allowed_terraform_commands = ["validate", "plan"]
}

dependency "rds" {
  config_path = "../rds"

  mock_outputs = {
    db_endpoint = "mock-db.example.com"
    db_port     = 5432
  }
  mock_outputs_allowed_terraform_commands = ["validate", "plan"]
}

inputs = {
  vpc_id      = dependency.vpc.outputs.vpc_id
  subnet_ids  = dependency.vpc.outputs.private_subnet_ids
  db_endpoint = dependency.rds.outputs.db_endpoint
}
```

## Step 6: run-all Workflow

```bash
# Plan entire environment (respects dependency order)
terragrunt run-all plan --terragrunt-working-dir infra/dev

# Apply entire environment
terragrunt run-all apply --terragrunt-working-dir infra/dev

# Apply only specific units (exclude by dir pattern)
terragrunt run-all apply \
  --terragrunt-working-dir infra/dev \
  --terragrunt-exclude-dir infra/dev/rds

# Plan a single unit
cd infra/dev/app && terragrunt plan

# Destroy (destructive — requires explicit confirmation)
terragrunt run-all destroy --terragrunt-working-dir infra/dev
```

`run-all` automatically determines dependency order from `dependency` blocks
and parallelizes independent units.

## Step 7: DRY with \_envcommon

Share defaults across environments without duplication:

```hcl
# infra/_envcommon/rds.hcl
inputs = {
  instance_class      = "db.t3.medium"
  allocated_storage   = 20
  storage_encrypted   = true
  deletion_protection = true
}
```

Override per environment using `merge`:

```hcl
locals {
  common = read_terragrunt_config(find_in_parent_folders("_envcommon/rds.hcl"))
}

inputs = merge(local.common.inputs, {
  instance_class = "db.t3.large"  # prod override
})
```

## Step 8: CI/CD Integration

```yaml
# .github/workflows/infra.yml (simplified)
- name: Terragrunt plan
  run: |
    cd infra/${{ env.ENV }}
    terragrunt run-all plan \
      --terragrunt-non-interactive \
      --terragrunt-parallelism 4 \
      -no-color 2>&1 | tee plan.log

- name: Terragrunt apply
  if: github.ref == 'refs/heads/main'
  run: |
    cd infra/${{ env.ENV }}
    terragrunt run-all apply \
      --terragrunt-non-interactive \
      --auto-approve \
      -no-color
```

Use `--terragrunt-non-interactive` in CI to prevent hanging on prompts.

## Review Checklist

- [ ] Root `terragrunt.hcl` generates `backend.tf` and `provider.tf` — no hand-written copies in units
- [ ] State key uses `path_relative_to_include()` for automatic per-unit naming
- [ ] S3 state bucket: encryption enabled, versioning enabled, public access blocked
- [ ] Module sources pinned to a specific git ref or semver tag — never `?ref=main`
- [ ] `dependency` blocks have `mock_outputs` for `plan` and `validate`
- [ ] Shared inputs extracted to `_envcommon/` — no copy-paste across environments
- [ ] Secrets supplied via environment variables or a secrets manager data source
- [ ] `--terragrunt-non-interactive` used in all CI/CD invocations
- [ ] `.terragrunt-cache/` in `.gitignore`

## References

> Always use the official documentation for the Terragrunt version in use — built-in functions, flags, and configuration options evolve with each release.

- [Terragrunt documentation](https://terragrunt.gruntwork.io/docs/)
- [Terragrunt CLI reference](https://terragrunt.gruntwork.io/docs/reference/cli-options/)
- [Gruntwork module registry](https://www.gruntwork.io/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"terragrunt","artifact_type":"skill","artifact_version":"20260502031","generator":"vstack","vstack_version":"3.5.1"} -->
