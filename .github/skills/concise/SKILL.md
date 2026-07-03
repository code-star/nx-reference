---
name: concise
description: 'Runtime response-style controller for concise communication. Switches between normal, compact, and ultra output density without regenerating agents. Use when asked for shorter responses, token efficiency, or to check active style mode.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with session memory and repository context.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search'
argument-hint: '[normal|compact|ultra|status|on|off]'
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

# concise — Runtime Response Style Mode

Control response brevity at runtime without regenerating any agent artifacts.

## Out of scope

- Rewriting or mutating source code, scripts, commands, or API contracts
- Persisting style mode across independent chat sessions
- Overriding safety-critical clarity requirements

## Commands

Supported commands:

- `concise normal`
- `concise compact`
- `concise ultra`
- `concise status`

Compatibility aliases:

- `concise on` -> `concise compact`
- `concise off` -> `concise normal`

Unknown arguments:

- If argument is unknown, do not guess. Return usage and keep current mode unchanged.

## Mode Semantics

- `normal`: full, explicit explanation depth.
- `compact`: default concise mode; shorter prose, unchanged technical accuracy.
- `ultra`: maximal brevity; remove narrative filler, keep technical correctness.

Hard invariants for all concise modes:

- Keep code blocks, commands, paths, and symbols exact.
- Do not remove required warnings, constraints, or irreversible-action cautions.
- Never trade correctness for brevity.

## Priority and Resolution

Resolve active mode with this precedence:

1. Explicit user command in current turn (`concise ...`)
1. Session override (last accepted concise mode command)
1. Agent default mode
1. Global default mode (`normal`)

`concise status` must show:

- active mode
- session override value (or none)
- agent default mode
- global default mode
- whether auto-clarity override is currently active

## Suggested Agent Defaults

When no session override exists, use these defaults:

- `product`: `compact`
- `architect`: `normal`
- `designer`: `compact`
- `engineer`: `compact`
- `tester`: `ultra`
- `release`: `compact`

## Auto-Clarity Override (Mandatory)

Temporarily force `normal` regardless of active concise mode for:

- security warnings
- destructive or irreversible actions
- multi-step sequences where truncation can cause ordering mistakes
- user confusion or repeated clarification requests

After the high-clarity segment ends, return to previously active concise mode.

## Expected Responses

On successful mode switch:

```text
Concise mode set to <mode>.
```

On status request:

```text
concise status
active: <mode>
session override: <value|none>
agent default: <mode>
global default: normal
auto-clarity override: <active|inactive>
```

On invalid argument:

```text
Unknown concise mode: <value>
Usage: concise normal|compact|ultra|status|on|off
Current mode unchanged: <mode>
```

## Completion Checklist

- [ ] Command parsed and validated
- [ ] Mode switched or preserved according to rules
- [ ] Safety/clarity override honored where required
- [ ] User confirmation/status returned in deterministic format

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"concise","artifact_type":"skill","artifact_version":"20260421008","generator":"vstack","vstack_version":"3.5.1"} -->
