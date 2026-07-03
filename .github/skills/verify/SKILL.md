---
name: verify
description: 'Verification fix-loop skill. Routes by mode (quick/standard/exhaustive), runs targeted checks, fixes findings by severity, and re-verifies impacted paths. Routes report-only requests to inspect and escalates deep security/performance concerns to specialized skills. Use when asked to "verify", "fix failing checks", "run QA with fixes", or "re-verify before shipping".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[component or feature to verify]'
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

# verify - Fix Loop Verification

Run a targeted verification fix loop:

1. choose scope/mode,
1. run checks,
1. fix issues in priority order,
1. re-run only impacted checks,
1. report ship readiness.

Use `inspect` for read-only auditing.

## Out of scope

- Architecture decisions (use `architecture`)
- Full security audit (use `security`)
- Performance benchmarking/profiling (use `performance`)
- New feature implementation outside verification fixes (engineering role)

## Deliverable and artifact policy

- Primary deliverable: `docs/reports/test-report.md`
- Additional deliverables when applicable: `docs/reports/security-report.md`, `docs/reports/performance-baseline.md`
- Baseline-first default: write final verification outcomes directly to baseline reports on the feature branch.
- Before merge: consolidate final findings, severity, and ship-readiness verdict into baseline reports.

## Step 0: Route Mode

Classify first, then run one mode.

> **Question:** Which verify mode should be used?
> **Options:**
> A) quick - critical/high regressions only
> B) standard - default verification + fix loop
> C) exhaustive - broad verification and full fix sweep
> D) report-only - route to `inspect`
> **Default if no response:** B

If D, stop and route to `inspect`.

## Step 1: Scope and Safety

Parse user scope:

- Target: whole repo or specific component/path
- Tier: quick/standard/exhaustive
- Source: full branch diff or explicit path

Check working tree:

```bash
git status --porcelain
```

If dirty, ask before proceeding because verify may create multiple atomic fix commits.

Bootstrap test command:

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

## Step 2: Baseline Checks (all modes)

Run baseline checks for the selected scope.

### 2.1 Lint and Type

```bash
[ -f package.json ] && (npm run lint 2>/dev/null || true)
[ -f tsconfig.json ] && npx tsc --noEmit 2>/dev/null || true
[ -f pyproject.toml ] && (ruff check . 2>/dev/null || true)
[ -f pyproject.toml ] && (mypy . 2>/dev/null || pyright . 2>/dev/null || true)
[ -f go.mod ] && (go vet ./... 2>/dev/null || true)
```

### 2.2 Unit Tests

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

## Step 3: Conditional Checks by Mode

### quick

- Run only failing or high-risk checks related to changed code
- Skip broad integration/contract/smoke unless directly impacted

### standard

Run these when present:

```bash
# Integration
[ -f package.json ] && npm run test:integration 2>/dev/null || true
[ -f pyproject.toml ] && python -m pytest -m integration -v 2>/dev/null || true
[ -f go.mod ] && go test -run Integration ./... 2>/dev/null || true

# Contract
[ -f openapi.yaml ] && npx @redocly/cli lint openapi.yaml 2>/dev/null || true
[ -n "$(find . -name '*.proto' 2>/dev/null | head -1)" ] && buf lint 2>/dev/null || true
```

Also verify observability on impacted paths:

- Structured logs for critical transitions and errors
- Metrics for latency/error/saturation
- Trace propagation across service boundaries
- Alerts or runbooks for critical failure modes

### exhaustive

Run standard checks plus:

```bash
# Optional smoke checks if scripts exist
find . -name '*.smoke.*' -o -name '*smoke-test*' -o -name 'smoke.sh' 2>/dev/null | head -5

# Dependency vulnerability gate (lightweight only; full audit belongs to security)
[ -f package.json ] && npm audit --audit-level=high 2>/dev/null || true
[ -f pyproject.toml ] && pip-audit 2>/dev/null || true
[ -f go.mod ] && govulncheck ./... 2>/dev/null || true
```

For exhaustive mode, require observability evidence (logs/metrics/traces/alerts) in the final report.

If deep security/performance concerns appear, stop and route to `security` or `performance`.

## Step 4: Triage

Classify findings:

| Severity | Examples                                                            |
| -------- | ------------------------------------------------------------------- |
| critical | test crashes, build breaks, data integrity/security regressions     |
| high     | contract violations, broken error handling, missing required checks |
| medium   | flaky tests, non-critical behavior gaps                             |
| low      | style and minor cleanups                                            |

Fix policy:

- quick: critical + high
- standard: critical + high + medium
- exhaustive: all severities

## Step 5: Fix and Re-verify Loop

For each fixable issue in severity order:

1. Reproduce and confirm root cause.
1. Apply minimal fix.
1. Commit atomically (`fix: ...`).
1. Re-run only impacted checks first.
1. If needed, run the relevant broader check suite.

If an issue implies architecture or design mismatch, stop and escalate.

## Step 6: Final Report

```text
## Verification Report - [component/repo] - [date]

selected_mode: [quick|standard|exhaustive]
scope: [path/component/full]

### Summary
- tests: [X pass / Y fail / Z skip]
- issues found: [N critical / N high / N medium / N low]
- fixes applied: [N]
- deferred: [N]

### Fixed Issues
1. [issue] - [commit SHA]

### Deferred Issues
1. [issue] - [why deferred] - [owner]

### Routed Follow-ups (if any)
- [security|performance|architecture|design] - [reason]

### Ship Readiness
[READY TO SHIP | NEEDS FIXES | BLOCKED]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"verify","artifact_type":"skill","artifact_version":"20260421026","generator":"vstack","vstack_version":"3.5.1"} -->
