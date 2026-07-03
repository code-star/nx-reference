---
description: 'Produce a safe migration plan with sequencing, fallback paths, and verification checkpoints.'
name: migration-plan
argument-hint: '[migration scope or affected components]'
agent: engineer
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---

Produce a safe migration plan with sequencing, fallback paths, and verification checkpoints.

Use source changes, schema/contracts, and deployment constraints.

Output exactly in this format:

## Migration Overview

- scope
- dependencies
- compatibility strategy

## Execution Plan

For each phase:

- phase
- changes applied
- validation checkpoint

## Rollback Plan

For each phase:

- rollback trigger
- rollback steps
- data integrity check

## Post-Migration Validation

- required tests
- smoke checks
- success criteria

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"migration-plan","artifact_type":"prompt","artifact_version":"20260513010","generator":"vstack","vstack_version":"3.5.1"} -->
