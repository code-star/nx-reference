---
description: 'Evaluate release gate readiness using required reports, artifacts, and sign-off evidence.'
name: release-check
argument-hint: '[release scope or target branch]'
agent: release
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---
Evaluate release gate readiness using required reports, artifacts, and sign-off evidence.

Use repository evidence only.

Output exactly in this format:

## Release Gate Status

- overall status: READY | NOT-READY
- scope reviewed
- evidence sources checked

## Missing or Stale Evidence

For each item:

- artifact
- issue: MISSING | STALE | INCOMPLETE
- impact
- owner role

## Sign-off Gaps

For each required role:

- role
- verdict: OK | NOK | NOT-RECORDED
- blocking reason

## Release Actions

Ordered actions to reach READY.

- action
- owner role
- verification step

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"release-check","artifact_type":"prompt","artifact_version":"20260513004","generator":"vstack","vstack_version":"3.5.1"} -->
