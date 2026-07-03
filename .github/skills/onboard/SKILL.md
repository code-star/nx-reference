---
name: onboard
description: 'Generate a contributor onboarding guide for a repository. Covers project purpose, architecture overview, local dev setup, test commands, contribution workflow, and first-task suggestions. Use when asked to "write an onboarding guide", "create a contributor guide", "help new devs get started", or "document how to contribute". Produces or updates CONTRIBUTING.md and supplements README with a dev setup section.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[repository or service to document]'
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

# onboard — Contributor Onboarding Guide

Generate or update onboarding documentation so a new contributor can go from
clone to first PR with zero tribal knowledge required.

## Out of scope

- API design documentation (use `design` or `openapi`)
- Architecture documentation (use `architecture`)
- Release notes (use `release-notes`)
- Test execution (use `verify`)

**Golden rule: If a new contributor needs to ask a question that isn't answered
by the docs, that is a documentation gap — not a knowledge problem.**

## Step 0: Audit Existing Documentation

```bash
# Find existing contributor docs
ls -la README.md CONTRIBUTING.md DEVELOPMENT.md docs/ 2>/dev/null

# Check for setup scripts
ls -la Makefile scripts/ bin/ 2>/dev/null

# Check what tooling is defined
cat Makefile 2>/dev/null | grep -E '^[a-z].*:' | head -20

# Detect tech stack
ls pyproject.toml package.json go.mod Cargo.toml pom.xml 2>/dev/null
cat pyproject.toml 2>/dev/null | head -30
cat package.json 2>/dev/null | grep -E '"scripts"' -A 20 | head -25
```

Document gaps:

```text
Existing docs:   [list of files found]
Missing:         [what's absent — setup steps, test commands, etc.]
Tech stack:      [Python | Node | Go | other]
Build tool:      [Poetry | npm | make | other]
```

## Step 1: Understand the Project

Read the codebase to extract onboarding-relevant facts:

```bash
# Project purpose
head -50 README.md 2>/dev/null

# Project structure
find . -maxdepth 3 -type d \
  | grep -v node_modules | grep -v .venv | grep -v __pycache__ \
  | grep -v .git | grep -v dist | grep -v build \
  | sort | head -40

# Dependencies and Python version
cat pyproject.toml 2>/dev/null | grep -E 'python|requires|dependencies' | head -20
cat .python-version 2>/dev/null
cat .nvmrc 2>/dev/null
cat .node-version 2>/dev/null

# CI configuration — what does CI run?
cat .github/workflows/*.yml 2>/dev/null | grep -E 'run:|uses:' | head -30
```

## Step 2: Verify the Setup Steps Work

Before documenting setup steps, verify they actually work:

```bash
# Attempt setup from scratch perspective
# (Do not actually destroy the current environment — read and verify commands)

# Check prerequisites are documented
which python3 || which python && python --version
which poetry && poetry --version
which node && node --version
which make && make --version
```

For each setup step, confirm:

- [ ] The command exists and works
- [ ] Dependencies are version-pinned or constrained
- [ ] Environment variables are documented (use `.env.example` if present)
- [ ] The setup completes in < 5 minutes on a fresh machine

## Step 3: Extract Test Commands

```bash
# Find all test commands
cat Makefile 2>/dev/null | grep -E 'test|lint|check|verify' | head -20
cat pyproject.toml 2>/dev/null | grep -E '\[tool\.' -A 5 | head -40
cat package.json 2>/dev/null | python3 -c "import sys,json; d=json.load(sys.stdin); [print(k,':',v) for k,v in d.get('scripts',{}).items()]" 2>/dev/null
```

Document the minimal set a contributor needs:

```text
Quick check (before every commit):  [command]
Full test suite:                     [command]
Lint only:                           [command]
Type check only:                     [command]
Single test:                         [command pattern]
```

## Step 4: Identify "Good First Issues"

```bash
# Find TODOs and FIXMEs
grep -r -n "TODO\|FIXME\|HACK\|good.first" \
  --include='*.py' --include='*.ts' --include='*.go' --include='*.md' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=.git \
  . 2>/dev/null | head -20

# Check GitHub issues if available
# (manual step — list any open "good first issue" labels)
```

## Step 5: Write the Onboarding Guide

Produce or update `CONTRIBUTING.md` with the following sections:

````markdown
# Contributing to [Project Name]

Welcome. This guide gets you from zero to a merged PR.

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Python | >= X.Y | [pyenv](https://github.com/pyenv/pyenv) |
| Poetry | >= X.Y | `pip install poetry` |
| make | any | system package manager |

## Setup

```bash
git clone https://github.com/org/repo
cd repo
[setup command — e.g. make bootstrap or poetry install]
```

Verify setup:

```bash
[verify command — e.g. make check or poetry run pytest]
```

Expected output: `[N tests passed]`

## Project Structure

```
[directory tree — top 2 levels with brief descriptions]
```

## Development Workflow

### Making changes

1. Create a branch: `git checkout -b [type]/[short-description]`
   - `feat/` — new feature
   - `fix/` — bug fix
   - `chore/` — maintenance
1. Make your change
1. Run checks: `[check command]`
1. Commit: `git commit -m "[type]: [description]"`
1. Push and open a PR

### Before every commit

```bash
[pre-commit or check command]
```

This runs: [lint, type check, tests — describe what is checked]

## Testing

```bash
# Run all tests
[full test command]

# Run a single test file
[single test command]

# Run with coverage
[coverage command]
```

Tests live in `tests/`. Mirror the source structure: `src/foo/bar.py` → `tests/foo/test_bar.py`.

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env
```

| Variable   | Required | Description   |
| ---------- | -------- | ------------- |
| `VAR_NAME` | Yes      | [description] |

## Architecture Overview

\[2–4 sentences describing the main components and how they interact.
Link to docs/architecture/overview.md for details.\]

## Good First Issues

\[List 3–5 concrete starting points:

- A TODO in the code
- A missing test
- A documentation gap
- A small enhancement\]

## Getting Help

[Slack channel / GitHub Discussions / email — whatever is appropriate]

````

## Step 6: Supplement README (if needed)

If README lacks a dev setup section, add a minimal one linking to CONTRIBUTING.md:

````markdown
## development

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, testing, and contribution guidelines.

Quick start:

```bash
[one-liner setup command]
[one-liner test command]
```

````

## Output

```text
Onboarding Guide Summary
════════════════════════

Files produced/updated:
  ✅ CONTRIBUTING.md  — [new | updated]
  ✅ README.md        — [updated dev section | no change needed]

Coverage:
  [ ] Prerequisites documented
  [ ] Setup steps verified
  [ ] Test commands documented
  [ ] Environment variables documented
  [ ] Project structure explained
  [ ] Contribution workflow explained
  [ ] Good first issues listed

Gaps remaining (if any):
  [anything that could not be determined automatically]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"onboard","artifact_type":"skill","artifact_version":"20260421020","generator":"vstack","vstack_version":"3.5.1"} -->
