---
description: 'Build a safe upgrade plan with sequencing, compatibility checks, and rollback points.'
name: upgrade-plan
argument-hint: '[target version, component, or full repo]'
agent: tester
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---

Build a safe upgrade plan with sequencing, compatibility checks, and rollback points.

Use repository docs, manifests, and test constraints.

Output exactly in this format:

## Upgrade Scope

- target
- baseline version
- compatibility boundaries

## Step Plan

Ordered upgrade steps.

- step
- dependency/precondition
- success check

## Risk and Rollback

For each major step:

- risk
- trigger to rollback
- rollback action

## Verification Matrix

- check
- command
- pass criteria

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"upgrade-plan","artifact_type":"prompt","artifact_version":"20260513008","generator":"vstack","vstack_version":"3.5.1"} -->
