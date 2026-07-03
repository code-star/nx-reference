---
description: 'Assess operational readiness across observability, runbooks, failure handling, and supportability.'
name: ops-readiness
argument-hint: '[service, component, or release scope]'
agent: tester
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---
Assess operational readiness across observability, runbooks, failure handling, and supportability.

Use evidence from code, tests, docs, and runbooks.

Output exactly in this format:

## Ops Readiness Scorecard

- observability: READY | PARTIAL | MISSING
- alerting: READY | PARTIAL | MISSING
- runbooks: READY | PARTIAL | MISSING
- failure handling: READY | PARTIAL | MISSING

## Gaps

For each gap:

- area
- finding
- risk if unresolved
- owner role

## Must-Fix Before Release

- blocker
- required evidence

## Follow-up Actions

- action
- owner role
- target milestone

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"ops-readiness","artifact_type":"prompt","artifact_version":"20260513009","generator":"vstack","vstack_version":"3.5.1"} -->
