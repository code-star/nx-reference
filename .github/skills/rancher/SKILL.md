---
name: rancher
description: 'Operate Kubernetes workloads and governance through Rancher. Covers cluster and project context, role-based access, app deployment workflows, Fleet/GitOps basics, and multi-cluster operational checks. Use when asked to "deploy through Rancher", "review Rancher setup", "manage Rancher projects", or "troubleshoot Rancher-managed clusters".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access. Requires Rancher UI/API access or Rancher CLI where applicable.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[rancher server/context, cluster/project, and scope: deploy | governance | fleet | troubleshooting]'
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

# rancher - Rancher Operations and Governance

Operate Kubernetes workloads and governance through Rancher.

## Out of scope

- Cluster-agnostic Kubernetes manifest authoring (use `k8s`)
- Helm chart authoring and release logic (use `helm`)

## Step 0: Detect Context

```bash
# Rancher CLI is optional depending on environment
rancher --version 2>/dev/null || echo "rancher CLI not installed (UI/API mode may be used)"

# Fleet or Rancher-managed config files in repository
find . -type f \( -name "fleet.yaml" -o -name "fleet.yml" -o -name "rancher*.yaml" -o -name "rancher*.yml" \)
```

## Step 1: Access and Scope Validation

Before changes:

- Confirm target Rancher server URL and environment
- Confirm target cluster, project, and namespace scope
- Confirm RBAC grants are least-privilege for requested operation

Operational rule:

- Never execute production changes from an unverified project context

## Step 2: Workload Operations in Rancher

Typical workflow:

1. Select target cluster and project.
1. Validate namespace-level quotas/limits.
1. Deploy or update app workload.
1. Verify pod readiness, service reachability, and events.

If Rancher app workflow uses Helm, validate chart and values first (via `helm` skill).

## Step 3: Fleet and GitOps Practices

For Fleet-managed repos:

- Keep environment overlays explicit and small
- Pin chart/app versions across environments
- Promote via pull requests with diff review
- Treat drift as incident signal, not as expected noise

Checks:

- Bundle targets map to intended clusters
- No accidental wildcard targeting in production bundles
- Secret references resolve through approved secret paths

## Step 4: Troubleshooting and Recovery

- Use Rancher workload events and pod logs for first-line diagnosis
- Confirm cluster agent connectivity and state health
- For failed rollout, rollback to last healthy deployment revision
- Document root cause and hardening action in follow-up issue

## Step 5: Security and Multi-Cluster Governance

- Separate dev/staging/prod projects and access groups
- Keep project quotas and limits enforced
- Audit role bindings regularly for privilege creep
- Avoid broad administrative grants outside platform owners

## References

> Always use the official documentation for the exact Rancher, Fleet, and Kubernetes versions in use - capabilities and defaults vary by release.

- [Rancher documentation](https://ranchermanager.docs.rancher.com/)
- [Rancher API guide](https://ranchermanager.docs.rancher.com/api/quickstart)
- [Fleet documentation](https://fleet.rancher.io/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"rancher","artifact_type":"skill","artifact_version":"20260502038","generator":"vstack","vstack_version":"3.5.1"} -->
