---
description: 'Triage CI failures into root-cause clusters and prioritize the fastest safe recovery path.'
name: ci-triage
argument-hint: '[workflow run, failing job, or log scope]'
agent: engineer
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---
Triage CI failures into root-cause clusters and prioritize the fastest safe recovery path.

Use failing job logs, workflow config, and changed files.

Output exactly in this format:

## Failure Clusters

For each cluster:

- jobs affected
- probable root cause
- confidence: HIGH | MEDIUM | LOW

## Priority Fix Order

Ordered by unblock value.

- fix action
- expected unblocked jobs
- owner role

## Risk Notes

- risky quick fixes to avoid
- possible hidden regressions

## Recovery Checklist

- [ ] apply highest-priority fix
- [ ] rerun targeted jobs
- [ ] rerun full workflow
- [ ] confirm no new failures

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"ci-triage","artifact_type":"prompt","artifact_version":"20260513006","generator":"vstack","vstack_version":"3.5.1"} -->
