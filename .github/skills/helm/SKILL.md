---
name: helm
description: 'Write, review, and operate Helm charts and release lifecycles. Covers chart structure, values layering, lint/template validation, install/upgrade/rollback, dependency handling, and release troubleshooting. Use when asked to "create a Helm chart", "review Helm values", "upgrade Helm release", or "debug Helm deployment".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access. Requires Helm CLI and target cluster access for live release operations.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[chart path, release name, namespace, and scope: chart review | install | upgrade | rollback]'
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

# helm - Helm Chart and Release Workflows

Write, review, and operate Helm charts and release lifecycles.

## Out of scope

- Raw Kubernetes manifest-only workflows (use `k8s`)
- Rancher/Fleet governance workflows (use `rancher`)

## Step 0: Detect Context

```bash
helm version 2>/dev/null || echo "helm not installed"

# Detect charts
find . -name Chart.yaml -o -path "*/charts/*" | head -40
```

## Step 1: Chart Structure Review

Expected chart layout:

- `Chart.yaml` for metadata and dependencies
- `values.yaml` for defaults
- `templates/` for rendered resources
- `templates/_helpers.tpl` for naming/labels helpers

```bash
helm show chart <chart-path>
helm show values <chart-path>
```

## Step 2: Static Validation Before Deploy

```bash
# Lint chart and values
helm lint <chart-path> -f values.yaml

# Render to inspect final manifests
helm template <release> <chart-path> -n <namespace> -f values.yaml > rendered.yaml

# Optional Kubernetes dry-run check
kubectl apply --dry-run=server -f rendered.yaml
```

Validation checklist:

- Workload resources define `requests`/`limits`
- Probes exist for long-running services
- Service selectors match deployment labels
- Secrets are referenced, not hardcoded in values

## Step 3: Install and Upgrade Safely

```bash
# Install
helm install <release> <chart-path> -n <namespace> --create-namespace -f values.yaml

# Upgrade with safety flags
helm upgrade <release> <chart-path> -n <namespace> -f values.yaml \
  --atomic --timeout 10m --history-max 10

# Check release state
helm list -n <namespace>
helm status <release> -n <namespace>
```

Use environment-specific values files (`values-dev.yaml`, `values-prod.yaml`) and keep overrides minimal.

## Step 4: Rollback and Incident Recovery

```bash
helm history <release> -n <namespace>
helm rollback <release> <revision> -n <namespace>
```

Rollback policy:

- Identify the last known healthy revision
- Roll back first, then investigate forward fix
- Capture failing diff for follow-up hardening

## Step 5: Dependencies and Supply Chain

```bash
# Resolve chart dependencies
helm dependency update <chart-path>

# Inspect rendered manifests for dependency side effects
helm template <release> <chart-path> -f values.yaml | head -80
```

Practices:

- Pin dependency versions in `Chart.yaml`
- Review transitive chart defaults before promotion
- Avoid unverified third-party repositories in production

## References

> Always use the official documentation for the exact Helm and Kubernetes versions in use - chart schema, flags, and behavior evolve between releases.

- [Helm documentation](https://helm.sh/docs/)
- [Helm command reference](https://helm.sh/docs/helm/)
- [Chart best practices](https://helm.sh/docs/chart_best_practices/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"helm","artifact_type":"skill","artifact_version":"20260502037","generator":"vstack","vstack_version":"3.5.1"} -->
