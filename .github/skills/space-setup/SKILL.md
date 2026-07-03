---
name: space-setup
description: 'Set up and maintain a GitHub Copilot Space for a repository. Covers scope selection, source curation, refresh cadence, and context quality checks.'
license: 'MIT'
compatibility: 'Requires GitHub Copilot Spaces access in the target organization/repository.'
metadata:
  owner: vstack
  maturity: candidate
allowed-tools: 'execute read search'
argument-hint: '[repo scope, docs set, or space objective]'
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

# space-setup - Copilot Space Setup and Maintenance

Set up a project Space that keeps Copilot context focused, current, and easy to audit.

## When to use

- New repository onboarding to Copilot Spaces
- Space quality cleanup after major docs or architecture updates
- Regular context refresh before a release cycle

## Procedure

1. Define Space objective and audience.
1. Select core sources: requirements, architecture, design, README, and key ADRs.
1. Exclude noisy/generated paths and duplicate docs.
1. Create or update the Space using GitHub UI (or approved API workflow).
1. Validate discoverability: each key topic maps to at least one source document.
1. Record refresh cadence and owner.
1. Re-check after `vstack install` or release docs updates.

## Output format

Provide this structure:

### Space Scope

- objective
- audience
- included sources
- excluded sources

### Setup Actions

- action taken
- rationale
- owner

### Quality Findings

- missing context
- stale context
- duplicate/noisy context

### Maintenance Plan

- refresh trigger
- cadence
- owner

## Escalation

Escalate when required docs are missing, stale, or inconsistent across product/architecture/design baselines.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"space-setup","artifact_type":"skill","artifact_version":"20260513011","generator":"vstack","vstack_version":"3.5.1"} -->
