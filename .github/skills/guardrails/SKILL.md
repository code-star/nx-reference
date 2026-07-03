---
name: guardrails
description: 'Activate safety guardrails for the current session. Before any destructive command (rm -rf, DROP TABLE, git push --force, git reset --hard, kubectl delete, production config changes, database migrations) a confirmation is required. Use when asked to "be careful", "enable guardrails", or "careful mode".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[task]'
user-invocable: true
disable-model-invocation: true
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

# guardrails — Safety Mode

Activate careful mode for this session. Two behaviors are now enabled.

## Out of scope

- Code review or security audit (use `code-review` or `security`)

## Behavior 1: Careful Mode (always active after invoking this skill)

**Before executing any of the following commands, get explicit confirmation:**

| Command                        | Risk                         | What to confirm             |
| ------------------------------ | ---------------------------- | --------------------------- |
| `rm -rf`                       | Permanent file deletion      | Files to delete             |
| `DROP TABLE` / `DROP DATABASE` | Permanent data loss          | Table/database name         |
| `git push --force`             | Overwrites remote history    | Branch and remote           |
| `git reset --hard`             | Discards local changes       | What will be lost           |
| `git clean -fd`                | Removes untracked files      | Files to remove             |
| `kubectl delete`               | Removes Kubernetes resources | Resource name and namespace |
| `fly destroy`                  | Destroys Fly.io app          | App name                    |
| `docker rm -f`                 | Forcefully removes container | Container                   |
| Any `--force` flag             | Bypasses safety check        | Why force is needed         |
| Production config changes      | Affects live traffic         | Explicit approval           |
| Database migrations            | May modify data schema       | Review migration SQL        |

**Procedure for each dangerous command:**

1. Stop.
1. Explain exactly what the command does and what will be permanently lost.
1. Ask for explicit confirmation.
1. Only proceed if the user says yes.
1. Never use workarounds to avoid this confirmation.

## How to Deactivate

Explicitly ask to "disable guardrails".

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"guardrails","artifact_type":"skill","artifact_version":"20260421016","generator":"vstack","vstack_version":"3.5.1"} -->
