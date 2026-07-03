---
description: 'Review workflow stage flow, gate usage, and handoff integrity across role artifacts.'
name: workflow-check
argument-hint: '[workflow scope or stage list]'
agent: planner
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---

Review workflow stage flow, gate usage, and handoff integrity across role artifacts.

Focus on evidence in workflow config, role templates, and docs.

Output exactly in this format:

## Flow Summary

- workflow scope
- current stage order
- gate model used

## Gate and Handoff Findings

For each finding:

- location: file path and section
- issue: one sentence
- impact: what can fail in execution
- fix: concrete correction

## Blocking Risks

List only issues that block reliable workflow execution.

- blocker
- owner role
- required action

## Recommended Next Steps

Provide an ordered short list of actions.

- action
- owner role
- expected result

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"workflow-check","artifact_type":"prompt","artifact_version":"20260513003","generator":"vstack","vstack_version":"3.5.1"} -->
