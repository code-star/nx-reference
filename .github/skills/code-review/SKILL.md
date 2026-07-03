---
name: code-review
description: 'Pre-landing code review. Finds bugs that pass CI but break in production — race conditions, missing error handling, API contract violations, observability gaps, security issues, and performance landmines. Use when asked to "review", "code review", "review this PR", or before merging.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search'
argument-hint: '[files, PR, or change to review]'
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

# code-review — Pre-Landing Code Review

Review code before merging. Find bugs that pass CI but break in production.
Report findings; do not change code unless explicitly asked.

## Out of scope

- Full security audit (use `security`)
- Performance benchmarking (use `performance`)
- Architecture design decisions (use `architecture`)
- Running the test suite (use `verify`)

Find bugs that will pass CI but break in production. Be specific — name files, lines, and
scenarios. Be opinionated — give a recommendation, not just observations.

## Review Principles

- **API contracts are public promises.** Breaking changes must be flagged and versioned.
- **Silent failures are catastrophic.** Every error path must be visible.
- **Systems over heroes.** Code that requires intimate knowledge to debug safely is a liability.
- **Observability is scope.** New codepaths without logs/metrics/traces are incomplete.
- **Security is non-negotiable.** Authentication bypass, injection vulnerabilities, and secrets in code are blocking issues.

## Step 0: Branch & Diff Setup

```bash
# Confirm we're on a feature branch, not base
CURRENT=$(git branch --show-current)
echo "Current branch: $CURRENT"
echo "Base branch: <base>"

# Show what this PR changes
git diff <base> --stat | head -40
git log <base>..HEAD --oneline
```

If on the base branch, STOP:

> You appear to be on the base branch ($CURRENT). Review is most useful on a feature branch. Are you sure you want to continue reviewing uncommitted changes?

## Step 1: Context Read

Before reviewing diffs, read:

1. The PR description / task description (if provided)
1. Any design docs referenced
1. Relevant existing code that the diff builds upon

```bash
# Read TODOS.md for context on deferred work
cat TODOS.md 2>/dev/null | head -30 || true
# Check for API spec
cat openapi.yaml 2>/dev/null | head -50 || cat openapi.json 2>/dev/null | head -50 || true
```

## Step 2: Diff Review

```bash
git diff <base> -- $(git diff <base> --name-only | grep -v node_modules | grep -v vendor | head -30)
```

Review each changed file for:

### 2.1 API Contract

- [ ] Any new or changed endpoints listed in OpenAPI/spec?
- [ ] Breaking changes? (field removal, type change, status code change)
- [ ] Error responses consistent with API conventions?
- [ ] Pagination/filtering contracts consistent?

### 2.2 Error Handling

- [ ] Every exception has a name, a handler, and a user-visible representation?
- [ ] No bare `catch (e) {}` or `except Exception: pass`?
- [ ] HTTP 5xx vs 4xx used correctly?
- [ ] Timeouts set on all external calls?
- [ ] Retry logic present where needed? Are operations idempotent?

### 2.3 Data Integrity

- [ ] Database migrations backward-compatible? (expand-contract pattern)
- [ ] No raw SQL vulnerable to injection?
- [ ] Transactions used where multiple writes must be atomic?
- [ ] Optimistic locking where concurrent writes are possible?
- [ ] No unbounded queries (missing LIMIT, full table scan)?

### 2.4 Distributed Systems

- [ ] All state-mutating external calls are idempotent?
- [ ] Circuit breakers / bulkheads present for critical dependencies?
- [ ] No synchronous cascade — single slow dependency can't block the whole request?
- [ ] Eventual consistency acknowledged where applicable?
- [ ] Message deduplication strategy for async consumers?

### 2.5 Security

- [ ] Authentication checked at every new endpoint?
- [ ] Authorization checked — not just "is logged in" but "has permission for THIS resource"?
- [ ] All user-controlled input validated and sanitized?
- [ ] No secrets, credentials, or PII in logs?
- [ ] Secrets in secure storage, not hardcoded or in env files?
- [ ] CSRF protection for state-mutating endpoints?

### 2.6 Observability

- [ ] New codepaths emit structured logs with correlation IDs?
- [ ] Error paths logged at ERROR level with stack traces?
- [ ] New metrics/counters/histograms added for new operations?
- [ ] Distributed trace spans for cross-service calls?
- [ ] New failure modes visible in existing dashboards / alerts?

### 2.7 Testing

- [ ] Tests cover happy path AND error paths?
- [ ] Test coverage adequate for risk level?
- [ ] Tests don't rely on implementation details (test behavior, not internals)?
- [ ] No flaky tests introduced (timing-dependent, order-dependent)?
- [ ] Contract tests added or updated for API changes?

### 2.8 Performance

- [ ] No N+1 database queries?
- [ ] Expensive operations cached where appropriate?
- [ ] No unbounded data loads (always paginated)?
- [ ] Sync operations that should be async?

### 2.9 Code Quality

- [ ] DRY — no copy-pasted logic?
- [ ] Functions/methods do one thing?
- [ ] Naming is clear and consistent with codebase conventions?
- [ ] No magic numbers/strings without named constants?
- [ ] Comments explain WHY, not WHAT?

## Step 3: Checklist Enforcement

Check for a project-specific review checklist:

```bash
cat .github/PULL_REQUEST_TEMPLATE.md 2>/dev/null || true
cat docs/review-checklist.md 2>/dev/null || true
```

If a project-specific checklist exists, verify each item.

## Step 4: Final Report

For each issue found, classify:

- **BLOCKING:** Must be fixed before merge. (Security, data integrity, silent failures, broken API contracts)
- **IMPORTANT:** Should be fixed in this PR. (Missing tests, error handling gaps, observability)
- **SUGGESTION:** Consider for this PR or defer. (Refactoring, style, non-blocking improvements)

Format:

```text
## Code Review — [branch name] — [date]

### BLOCKING Issues (must fix before merge)
1. **[Category]** `path/to/file.ts:42` — [Issue description]
   Evidence: [specific code or behavior]
   Fix: [recommended change]

### IMPORTANT Issues (should fix in this PR)
...

### SUGGESTIONS (optional improvements)
...

### Overall Assessment
[APPROVED / APPROVED WITH SUGGESTIONS / REQUEST CHANGES]

Confidence: [HIGH/MEDIUM/LOW — explain if not HIGH]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"code-review","artifact_type":"skill","artifact_version":"20260421007","generator":"vstack","vstack_version":"3.5.1"} -->
