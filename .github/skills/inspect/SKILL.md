---
name: inspect
description: 'Read-only verification audit. Runs baseline plus optional extended checks, produces severity-ranked findings, and makes no code or commit changes. Use when asked to "inspect", "assess", "check without fixing", or "what''s wrong with this" before deciding whether to run verify fix loops.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search'
argument-hint: '[component or service to inspect]'
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

```bash
# Detect base branch (main / master / develop / trunk)
BASE=$(gh pr view --json baseRefName -q .baseRefName 2>/dev/null) \
  || BASE=$(git remote show origin 2>/dev/null | grep 'HEAD branch' | awk '{print $NF}') \
  || BASE=$(git branch -r 2>/dev/null | grep -E '/(main|master|develop|trunk)' | head -1 | sed 's|.*origin/||') \
  || BASE="main"
echo "Base branch: $BASE"
```

# inspect - Read-Only Verification Audit

Run verification checks and report findings. Do not edit code, do not commit,
and do not fix anything.

Use `verify` when a fix loop is required.

## Out of scope

- Fixing issues (use `verify`)
- Architecture decisions (use `architecture`)
- Full security audit (use `security`)
- Performance profiling (use `performance`)

## Deliverable and artifact policy

- Primary deliverable: `docs/reports/test-report.md`
- Baseline-first default: write final findings directly to `docs/reports/test-report.md` on the feature branch.
- Before merge: confirm blocking findings and final verdict are written to baseline reports.

## Step 0: Scope

```text
Report only. No edits. No commits.
If critical issues are found, recommend `verify`.
```

## Step 1: Baseline Checks

```bash
[ -f package.json ] && (npm run lint 2>/dev/null || true)
[ -f tsconfig.json ] && npx tsc --noEmit 2>/dev/null || true
[ -f pyproject.toml ] && (ruff check . 2>/dev/null || true)
[ -f pyproject.toml ] && (mypy . 2>/dev/null || pyright . 2>/dev/null || true)
[ -f go.mod ] && (go vet ./... 2>/dev/null || true)
```

```bash
# Detect test runner and run tests
if [ -f package.json ]; then
  if grep -q '"vitest"' package.json 2>/dev/null; then
    npx vitest run
  elif grep -q '"jest"' package.json 2>/dev/null; then
    npx jest
  elif grep -q '"bun"' package.json 2>/dev/null; then
    bun test
  else
    npm test
  fi
elif [ -f pyproject.toml ] || [ -f setup.py ]; then
  python -m pytest -v
elif [ -f go.mod ]; then
  go test ./...
elif [ -f Cargo.toml ]; then
  cargo test
else
  echo "No recognized test framework detected."
fi
```

## Step 2: Extended Checks (when present)

```bash
# Integration
[ -f package.json ] && npm run test:integration 2>/dev/null || true
[ -f pyproject.toml ] && python -m pytest -m integration -v 2>/dev/null || true
[ -f go.mod ] && go test -run Integration ./... 2>/dev/null || true

# Contract
[ -f openapi.yaml ] && npx @redocly/cli lint openapi.yaml 2>/dev/null || true
[ -n "$(find . -name '*.proto' 2>/dev/null | head -1)" ] && buf lint 2>/dev/null || true

# Lightweight vulnerability gate
[ -f package.json ] && npm audit --audit-level=high 2>/dev/null || true
[ -f pyproject.toml ] && pip-audit 2>/dev/null || true
[ -f go.mod ] && govulncheck ./... 2>/dev/null || true
```

### 2.1 Observability & Reliability Checks

Confirm for changed paths:

- Structured logs exist for key state transitions and failures.
- Metrics cover latency, error rate, and saturation for impacted services.
- Trace propagation exists across service boundaries where applicable.
- Alerts/runbooks exist for high-severity failure modes.

## Step 3: Report

```text
## Inspection Report - [component/repo] - [date]

### Summary
- tests: [X pass / Y fail / Z skip]
- issues: [N critical / N high / N medium / N low]

### Critical
1. [issue] - [file:line] - [evidence]

### High
1. [issue] - [file:line] - [recommended fix]

### Medium
1. [issue] - [file:line] - [recommended fix]

### Low
1. [issue] - [notes]

### Recommendation
[SHIP-READY | USE VERIFY FIX LOOP | NEEDS ARCH/DESIGN REVIEW]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"inspect","artifact_type":"skill","artifact_version":"20260421018","generator":"vstack","vstack_version":"3.5.1"} -->
