---
name: terragrunt
description: 'Terragrunt coding conventions for projects. Use when writing or reviewing Terragrunt HCL configurations, root configs, unit modules, and dependency blocks.'
applyTo: '**/terragrunt.hcl'
---
Use these Terragrunt conventions in this project.

## Structure and hierarchy

1. Maintain a strict directory hierarchy that maps to deployment topology: `infra/<env>/<unit>/terragrunt.hcl`.
1. Keep one root `terragrunt.hcl` at the repository root or top-level `infra/` directory; inherit it in all units via `include "root" { path = find_in_parent_folders() }`.
1. Use `account.hcl` files at the account/environment level for account ID, region, and environment name — read them with `read_terragrunt_config(find_in_parent_folders("account.hcl"))`.

## Remote state and backend generation

1. Generate `backend.tf` from the root `remote_state` block — never hand-write backend files in units.
1. Use `path_relative_to_include()` as the state key so each unit gets a unique, auto-named state file.
1. Enable encryption and state locking on the S3 backend; enable versioning on the state bucket.

## Provider generation

1. Generate `provider.tf` from the root `generate "provider"` block — never duplicate provider configuration across units.
1. Include `default_tags` in the generated provider block to ensure consistent tagging across all resources.

## Module sources and pinning

1. Pin all module sources to a specific git ref or registry semver tag — never `?ref=main` or floating tags.
1. Prefer sourcing from a versioned internal registry or tagged git commit over local paths in shared modules.

## Dependency blocks

1. Add `mock_outputs` to every `dependency` block for the `validate` and `plan` commands — this allows planning without deploying dependencies first.
1. Declare only the outputs you actually use from a dependency; do not expose the full output set.
1. Keep `dependency` blocks at unit level — do not express dependencies in the root config.

## DRY inputs

1. Extract shared inputs for an ecosystem (e.g. RDS defaults) into `_envcommon/<name>.hcl`; load with `read_terragrunt_config`.
1. Use `merge(local.common.inputs, { ... })` to override defaults per environment — do not copy-paste full input maps.

## CI/CD

1. Always pass `--terragrunt-non-interactive` in automated pipelines to prevent interactive prompts.
1. Use `--terragrunt-parallelism` to control concurrency; start with 4 and adjust to pipeline resource limits.
1. Add `.terragrunt-cache/` to `.gitignore`.

## Secrets

1. Never hardcode secrets in `.hcl` files — supply them via environment variables (`TF_VAR_*`) or a secrets manager data source.
1. Do not commit `.tfvars` files containing real secrets.

## References

> Always use the official documentation for the Terragrunt version in use — built-in functions and CLI flags evolve with each release.

- [Terragrunt documentation](https://terragrunt.gruntwork.io/docs/)
- [Terragrunt CLI reference](https://terragrunt.gruntwork.io/docs/reference/cli-options/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"terragrunt","artifact_type":"instruction","artifact_version":"20260502035","generator":"vstack","vstack_version":"3.5.1"} -->
