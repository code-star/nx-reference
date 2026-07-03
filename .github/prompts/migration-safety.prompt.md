---
description: 'Review database migration safety, rollback strategy, and zero-downtime risk.'
name: migration-safety
argument-hint: '[migration files, schema, or rollout plan]'
agent: engineer
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
  - edit
---

Review the selected migration plan and code for production safety.

Focus on forward compatibility, rollback feasibility, data integrity, and operational risk.
Assume a live system with concurrent reads/writes.

Output exactly in this format:

## Must Fix Before Apply

List migration blockers.

For each item:

- file/section
- failure mode in one sentence
- concrete safe fix

## Should Fix Soon

List non-blocking risks with meaningful impact.

## Rollback Plan Check

- rollback feasible: yes | no | partial
- missing rollback prerequisites
- specific rollback procedure recommendation

## Zero-Downtime Check

- compatible with old and new app versions: yes | no | partial
- lock/contention risk: low | medium | high
- required phased rollout steps

## Test Gaps

List missing migration tests (forward, backward, data invariants, load-sensitive paths).

## Final Recommendation

- apply now | apply after fixes
- biggest remaining risk in one sentence

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"migration-safety","artifact_type":"prompt","artifact_version":"20260502011","generator":"vstack","vstack_version":"3.5.1"} -->
