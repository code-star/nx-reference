---
name: terraform
description: 'Terraform coding conventions for projects. Use when writing or reviewing Terraform modules, root configurations, variable files, and state configuration.'
applyTo: '**/*.tf'
---
Use these Terraform conventions in this project.

## Structure and file layout

1. Split configuration into `main.tf`, `variables.tf`, `outputs.tf`, `providers.tf`, `versions.tf`, and `locals.tf` — do not put everything in one file.
1. Keep one module per directory; avoid multi-purpose root modules.
1. Place reusable logic in `modules/<name>/` with its own `variables.tf` and `outputs.tf`.

## Versioning and pinning

1. Pin the Terraform binary version with `required_version = "~> X.Y"` in a `versions.tf` file.
1. Pin every provider with `version = "~> X.Y"` in `required_providers` — never use unbounded ranges in production.
1. Commit `.terraform.lock.hcl` to source control.
1. Pin external module sources to a specific git ref or registry semver tag — never `?ref=main`.

## State management

1. Use a remote backend with encryption and state locking for all non-local work.
1. Enable versioning on the S3 state bucket.
1. Never store secrets in state outputs — mark sensitive outputs with `sensitive = true`.

## Variables and outputs

1. Add `type`, `description`, and a sensible `default` to every variable.
1. Add validation blocks for constrained variables (`AllowedValues` equivalents).
1. Mark secret variables with `sensitive = true` — never hardcode them in `.tf` files or committed `.tfvars`.
1. Add `description` to every output; mark secret outputs `sensitive = true`.

## Naming and tagging

1. Use `locals` to construct name prefixes and centralise tag maps.
1. Name physical resources with `"${local.name_prefix}-<role>"` to ensure cross-stack uniqueness.
1. Apply a common tag map (`local.common_tags`) to every taggable resource; include at minimum `Environment` and `ManagedBy = "terraform"`.

## Security

1. Block public access on all S3 buckets unless intentionally public; document the exception.
1. Enable `storage_encrypted = true` and `deletion_protection = true` on all RDS instances.
1. Restrict security group rules — avoid `0.0.0.0/0` on management ports; add a comment when HTTPS/443 is open.
1. Apply least-privilege IAM policies — no `*` actions on `*` resources.
1. Enable KMS key rotation (`enable_key_rotation = true`).

## Tooling

1. Run `terraform fmt -check -recursive` in CI and auto-format locally.
1. Run `terraform validate` before every plan.
1. Run `tfsec` or `checkov` on all changes; fix HIGH and CRITICAL findings before merging.

## References

> Always use the official documentation for the provider and Terraform version in use — resource arguments and defaults change between provider releases.

- [Terraform documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform provider registry](https://registry.terraform.io/)
- [tfsec](https://aquasecurity.github.io/tfsec/) · [checkov](https://www.checkov.io/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"terraform","artifact_type":"instruction","artifact_version":"20260502034","generator":"vstack","vstack_version":"3.5.1"} -->
