---
description: 'Identify missing behavioral coverage and prioritize test additions by production risk.'
name: test-gaps
argument-hint: '[component, feature, or repository scope]'
agent: tester
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---
Identify missing behavioral coverage and prioritize test additions by production risk.

Focus on observable behavior and realistic failure paths.

Output exactly in this format:

## Coverage Gaps

For each gap:

- behavior
- current coverage weakness
- production risk
- suggested test type: unit | integration | contract | e2e

## False Confidence Risks

List tests that pass but may not protect real behavior.

- location
- why confidence is false
- correction

## Priority Test Backlog

Ordered from highest to lowest risk reduction.

- test title
- owner role
- acceptance check

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"test-gaps","artifact_type":"prompt","artifact_version":"20260513007","generator":"vstack","vstack_version":"3.5.1"} -->
