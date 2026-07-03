---
name: k8s
description: 'Kubernetes manifest conventions. Use when writing or reviewing Kubernetes workload and service manifests.'
applyTo: '**/{k8s,kubernetes,manifests}/**/*.{yaml,yml}'
---
Use these Kubernetes conventions in this project.

## API and versioning

1. Prefer stable APIs (`apps/v1`, `networking.k8s.io/v1`) and avoid deprecated versions.
1. Set `kind` and `metadata.name` deterministically; avoid generated names for long-lived workloads.
1. Keep one primary resource per file where possible to simplify review and rollback.

## Workload safety

1. Set CPU and memory `requests` and `limits` for every container.
1. Define both readiness and liveness probes for long-running services.
1. Avoid mutable image tags (`:latest`); use pinned tags or immutable digests.
1. Set rollout strategy explicitly for Deployments handling production traffic.

## Namespace and labels

1. Explicitly set `metadata.namespace` unless the deployment tooling injects it by design.
1. Use consistent labels: `app.kubernetes.io/name`, `app.kubernetes.io/instance`, `app.kubernetes.io/managed-by`.
1. Keep Service selectors aligned with pod template labels.

## Security

1. Run containers as non-root when feasible.
1. Avoid privileged mode and broad Linux capabilities unless required and documented.
1. Do not hardcode secrets in manifests; reference Secrets or external secret providers.
1. Restrict RBAC to least privilege; avoid broad `cluster-admin` grants.

## Reliability and operations

1. Use PodDisruptionBudgets for critical workloads.
1. Configure `terminationGracePeriodSeconds` and preStop hooks where graceful shutdown is required.
1. Add resource annotations/labels needed by observability and runtime policies.

## Validation

1. Validate manifests with `kubectl apply --dry-run=client` before merge.
1. Use `kubectl apply --dry-run=server` where API server validation is available.
1. Treat warnings for deprecated APIs as release blockers.

## References

> Always use the official documentation for the exact Kubernetes version in use - API versions and defaults change between releases.

- [Kubernetes docs](https://kubernetes.io/docs/)
- [Kubernetes API reference](https://kubernetes.io/docs/reference/kubernetes-api/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"k8s","artifact_type":"instruction","artifact_version":"20260502039","generator":"vstack","vstack_version":"3.5.1"} -->
