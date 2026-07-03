---
name: copilot-ops
description: 'Operate and govern GitHub Copilot settings with an audit-first workflow. Covers policy checks, configuration drift, usage visibility, and safe change rollout.'
license: 'MIT'
compatibility: 'Requires admin-level GitHub permissions and gh CLI authentication for governance operations.'
metadata:
  owner: vstack
  maturity: candidate
allowed-tools: 'execute read search'
argument-hint: '[org/repo scope or ops objective]'
user-invocable: true
disable-model-invocation: false
---
## Skill Context

This skill is part of **vstack** — a VS Code-native AI engineering workflow system.

### AskUserQuestion Format

When you need clarification, use this exact format — never invent or guess:

> **Question:** [The specific question]
> **Options:** A) … | B) … | C) …
> **Default if no response:** [What you'll do]

Never ask more than one question at a time without waiting for the answer.

### Diagram Convention

When producing hand-authored Markdown outputs, prefer Mermaid for flow,
interaction, lifecycle, state, topology, dependency, and decision diagrams when
the format is supported and improves clarity. Use ASCII as a fallback when
Mermaid is unsupported or would be less readable. Keep ASCII/text trees for
directory structures and other scan-friendly hierarchies.

# copilot-ops - Copilot Governance Operations

Run Copilot governance changes safely with evidence, rollback intent, and verification.

## When to use

- Audit Copilot governance settings before release or compliance review
- Apply policy updates for repository or organization scope
- Investigate configuration drift between expected and actual Copilot controls

## Procedure

1. Capture current scope (repo/org/enterprise) and required permissions.
1. Pull current Copilot-relevant settings and record baseline evidence.
1. Compare baseline with expected policy and identify drift.
1. Propose minimal changes with explicit risk notes.
1. Apply approved changes using audited commands/workflows.
1. Re-read settings and confirm effective state.
1. Log follow-up checks and ownership.

## Output format

Provide this structure:

### Baseline

- scope reviewed
- settings checked
- evidence source

### Drift Findings

- setting
- expected value
- current value
- risk

### Change Plan

- proposed change
- approval needed
- rollback note

### Verification

- post-change check
- result
- residual risk

## Escalation

Escalate when permissions are insufficient, settings conflict across scopes, or policy intent is ambiguous.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"copilot-ops","artifact_type":"skill","artifact_version":"20260513012","generator":"vstack","vstack_version":"3.5.1"} -->
