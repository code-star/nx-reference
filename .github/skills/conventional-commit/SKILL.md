---
name: conventional-commit
description: 'Prepare high-quality Conventional Commit messages from current staged or unstaged changes with explicit type, optional scope, and concise subject. Validates commit intent against change content and blocks ambiguous or non-compliant messages before commit. Use when asked to "write a commit message", "make a conventional commit", or "prepare commits before PR".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[changes to commit and desired release intent]'
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

# conventional-commit — Prepare Conventional Commits

Create clear, policy-aligned commits with a Conventional Commit header:

`type(optional-scope)!: short summary`

## Out of scope

- Pushing branches or opening PRs (use `pr`)
- Writing release notes (use `release-notes`)
- Rewriting repository history unless explicitly requested

## Deliverable

- One or more commits with compliant Conventional Commit messages

## Step 1: Inspect changes and choose commit boundaries

Review current changes first:

```bash
git status --short
git diff --stat
git diff --cached --stat
```

Split unrelated changes into separate commits.

Boundary rules:

- One commit per cohesive intent
- Avoid mixing refactor + feature + tests unless tightly coupled
- Keep commits reviewable and reversible

## Step 2: Select commit type and scope

Choose the best type from change intent:

- `feat` for new behavior
- `fix` for bug fixes
- `refactor` for structure-only changes without behavior change
- `docs` for documentation-only changes
- `test` for test-only changes
- `chore` for maintenance/tooling/meta updates
- `ci` for CI/CD workflow changes
- `perf` for performance-focused improvements

Scope guidance:

- Use optional scope when it improves clarity: `feat(auth): ...`
- Keep scope short, stable, and system-oriented
- Omit scope if it adds noise

## Step 3: Draft header and body

Header format:

```text
type(optional-scope)!: short summary
```

Quality rules:

- imperative mood (`add`, `fix`, `remove`)
- summary \<= 100 characters
- no trailing period
- no vague text like `update stuff`

Use breaking marker `!` only when behavior or contract is breaking.

Optional body should explain why, risk, and migration notes when relevant.

## Step 4: Validate against staged content

Before committing, verify message-content alignment:

```bash
git diff --cached --name-only
git diff --cached --stat
```

Validation checks:

- `docs` commit does not include source code changes (unless explicitly intended)
- `test` commit does not include product logic changes (unless fixing test harness)
- `refactor` commit does not change observable behavior
- breaking marker appears only with actual breaking impact

If alignment fails, revise scope/type or split commits.

## Step 5: Commit safely

Commit staged changes with validated header:

```bash
git commit -m "<type(optional-scope): summary>"
```

For non-trivial changes, include body:

```bash
git commit \
  -m "<type(optional-scope): summary>" \
  -m "Why: <reason>" \
  -m "Risk: <risk and mitigation>"
```

## Step 6: Report result

Return concise result:

```text
Committed:
- <sha> <header>

Remaining changes:
- <summary or none>
```

If commit is blocked, report exact reason and proposed fix.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"conventional-commit","artifact_type":"skill","artifact_version":"20260502024","generator":"vstack","vstack_version":"3.5.1"} -->
