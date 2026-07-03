---
name: helm
description: 'Helm chart conventions. Use when writing or reviewing Helm charts, templates, and values files.'
applyTo: '**/charts/**/*.{yaml,yml,tpl}'
---
Use these Helm conventions in this project.

## Chart structure

1. Keep chart metadata in `Chart.yaml`; do not duplicate metadata in templates.
1. Keep reusable template logic in `templates/_helpers.tpl`.
1. Keep defaults in `values.yaml` and environment overrides in separate values files.

## Templating quality

1. Quote string values where ambiguity may cause rendering/type errors.
1. Guard optional blocks with conditionals to avoid emitting invalid YAML.
1. Keep names and labels deterministic via helper templates.
1. Avoid embedding large opaque blobs in templates; externalize where possible.

## Values and secrets

1. Document key values in chart README or comments.
1. Do not hardcode secrets in `values.yaml`; use external secret mechanisms or secure value injection.
1. Keep production overrides minimal and explicit.

## Dependencies and versioning

1. Pin dependency versions in `Chart.yaml`; avoid floating versions.
1. Update dependencies with `helm dependency update` as part of chart changes.
1. Track breaking changes in chart `version` and `appVersion` updates.

## Validation and release safety

1. Run `helm lint` for every chart change.
1. Render templates with `helm template` and validate generated manifests before deployment.
1. Use `helm upgrade --atomic` for safer upgrades where applicable.
1. Keep rollback paths available and verify `helm history` in production workflows.

## References

> Always use the official documentation for the exact Helm and Kubernetes versions in use - chart schema, flags, and behavior evolve between releases.

- [Helm docs](https://helm.sh/docs/)
- [Helm chart best practices](https://helm.sh/docs/chart_best_practices/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"helm","artifact_type":"instruction","artifact_version":"20260502040","generator":"vstack","vstack_version":"3.5.1"} -->
