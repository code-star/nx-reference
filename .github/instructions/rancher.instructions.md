---
name: rancher
description: 'Rancher and Fleet conventions. Use when writing or reviewing Rancher/Fleet configuration files and cluster governance manifests.'
applyTo: '**/{rancher,fleet}/**/*.{yaml,yml}'
---
Use these Rancher conventions in this project.

## Scope and environment

1. Keep environment and cluster targeting explicit; avoid wildcard targeting for production bundles.
1. Separate dev, staging, and production policies and rollout paths.
1. Document expected project/namespace scope for each config set.

## Fleet and GitOps hygiene

1. Keep Fleet bundle structure deterministic and easy to review.
1. Pin chart and app versions in GitOps definitions; avoid floating versions.
1. Keep per-environment overrides small and explicit.
1. Use pull-request review for all production-bound Fleet changes.

## Access and governance

1. Apply least privilege for Rancher roles and project membership.
1. Avoid broad administrative grants outside platform owner groups.
1. Review role bindings and project-level permissions regularly.

## Secrets and security

1. Do not hardcode credentials or tokens in Rancher/Fleet config files.
1. Reference secrets from approved secret management paths.
1. Keep auditability for cluster/project configuration changes.

## Operations

1. Validate target clusters/projects before applying any change.
1. Include rollback guidance for application and bundle updates.
1. Treat drift and failed bundle rollout as operational incidents with follow-up remediation.

## References

> Always use the official documentation for the exact Rancher and Fleet versions in use - features and defaults vary between releases.

- [Rancher docs](https://ranchermanager.docs.rancher.com/)
- [Fleet docs](https://fleet.rancher.io/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"rancher","artifact_type":"instruction","artifact_version":"20260502041","generator":"vstack","vstack_version":"3.5.1"} -->
