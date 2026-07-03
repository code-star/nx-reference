---
description: 'Review a change for bugs, regressions, and missing tests.'
name: code-review
argument-hint: '[scope or files to review]'
agent: engineer
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
  - edit
---

Review the selected code or diff for production risk.

Focus only on issues with real impact:

- correctness and edge cases
- security and data exposure
- performance and scalability
- maintainability and ownership boundaries
- missing tests for changed behavior
- API contract changes: breaking changes, schema drift, missing versioning

Ignore:

- style-only preferences with no runtime impact
- speculative risks without evidence in this change

Output exactly in this format:

## Must fix

List blocking issues that should be resolved before merge.

## Should consider

List non-blocking improvements worth addressing now.

## Looks good

List intentional strengths in this change.

For each item:

- cite the relevant file/section
- explain why it matters in one short sentence
- give one concrete fix suggestion

End with:

- Merge recommendation: yes / no / yes-with-conditions
- Biggest remaining risk: one sentence

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"code-review","artifact_type":"prompt","artifact_version":"20260502008","generator":"vstack","vstack_version":"3.5.1"} -->
