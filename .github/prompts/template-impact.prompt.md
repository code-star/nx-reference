---
description: 'Assess impact of a template change on generated artifacts, tests, and release risk.'
name: template-impact
argument-hint: '[template path or change scope]'
agent: engineer
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---

Assess impact of a template change on generated artifacts, tests, and release risk.

Use source-template and generated-artifact evidence.

Output exactly in this format:

## Change Surface

- template scope
- affected artifact types
- likely generated paths

## Impact Findings

For each finding:

- impacted path
- impact type: BEHAVIOR | DOCS | TESTS | TOOLING
- risk
- required validation

## Regression Risk

List highest-risk regressions first.

- scenario
- likelihood: HIGH | MEDIUM | LOW
- mitigation

## Verification Plan

- commands to run
- expected pass criteria

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"template-impact","artifact_type":"prompt","artifact_version":"20260513005","generator":"vstack","vstack_version":"3.5.1"} -->
