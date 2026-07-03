---
name: k8s
description: 'Write, review, and troubleshoot Kubernetes manifests and operational workflows. Covers workload resources, service exposure, rollout safety, health probes, RBAC, namespace isolation, and kubectl-based diagnostics. Use when asked to "deploy to Kubernetes", "review Kubernetes manifests", "debug Kubernetes rollout", "harden Kubernetes config", or "operate a workload on a cluster".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access. Requires kubectl access to a target cluster for live operations.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[cluster/context, namespace, and scope: manifest review | deploy | rollout debug | hardening]'
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

# k8s - Kubernetes Workflows

Write, review, and troubleshoot Kubernetes manifests and cluster operations.

## Out of scope

- Helm chart authoring and release lifecycle (use `helm`)
- Rancher/Fleet multi-cluster governance (use `rancher`)

## Step 0: Detect Context

```bash
kubectl version --client 2>/dev/null || echo "kubectl not installed"
kubectl config current-context 2>/dev/null || echo "no current context"

# Find Kubernetes manifests in common locations
find . -type f \( -name "*.yaml" -o -name "*.yml" \) \
  | rg '/(k8s|kubernetes|manifests)/|deployment|service|ingress|statefulset' -N || true
```

## Step 1: Validate Manifests

```bash
# API/schema and field validation
kubectl apply --dry-run=client -f k8s/

# Optional: server-side admission and API validation
kubectl apply --dry-run=server -f k8s/
```

Validation checklist:

- Every workload sets CPU/memory `requests` and `limits`
- Liveness and readiness probes are present and realistic
- Image tags are explicit (avoid mutable `:latest`)
- Namespace and labels are consistent across resources
- RBAC permissions follow least privilege

## Step 2: Safe Deploy and Rollout

```bash
# Apply manifests to a namespace
kubectl apply -n <namespace> -f k8s/

# Track rollout status
kubectl rollout status deploy/<name> -n <namespace>

# View current replica health
kubectl get deploy,po -n <namespace>
```

For updates:

- Prefer rolling updates over delete/recreate
- Set deployment strategy (`maxUnavailable`, `maxSurge`) explicitly
- Keep rollback path ready (`kubectl rollout undo`)

## Step 3: Service Exposure and Networking

```bash
kubectl get svc,ing -n <namespace>
kubectl describe svc <service-name> -n <namespace>
kubectl describe ing <ingress-name> -n <namespace>
```

Checks:

- Service selectors match pod labels
- Ingress host/path routes are deterministic
- TLS secrets and ingress class are configured where required
- NetworkPolicies default-deny inbound where possible

## Step 4: Troubleshooting Workflow

```bash
# Pod state and events
kubectl get po -n <namespace>
kubectl describe po <pod-name> -n <namespace>
kubectl get events -n <namespace> --sort-by=.lastTimestamp | tail -30

# Container logs
kubectl logs <pod-name> -n <namespace> --all-containers --tail=200

# Exec for runtime inspection
kubectl exec -it <pod-name> -n <namespace> -- /bin/sh
```

Common failure classes:

- `ImagePullBackOff`: image name/tag/registry credentials
- `CrashLoopBackOff`: startup command/config/secrets mismatch
- `Pending`: resource requests exceed cluster capacity
- Probe flaps: probe timing too strict for startup behavior

## Step 5: Security and Reliability Hardening

- Run containers as non-root where possible
- Set `readOnlyRootFilesystem: true` when feasible
- Drop unnecessary Linux capabilities
- Avoid broad `ClusterRoleBinding` grants
- Use PodDisruptionBudgets for critical workloads

## References

> Always use the official documentation for the exact Kubernetes version in use - API versions and defaults change between releases.

- [Kubernetes documentation](https://kubernetes.io/docs/)
- [kubectl reference](https://kubernetes.io/docs/reference/kubectl/)
- [Kubernetes API reference](https://kubernetes.io/docs/reference/kubernetes-api/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"k8s","artifact_type":"skill","artifact_version":"20260502036","generator":"vstack","vstack_version":"3.5.1"} -->
