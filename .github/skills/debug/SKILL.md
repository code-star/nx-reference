---
name: debug
description: 'Systematic root-cause debugging for backend services, APIs, and libraries. No fixes without investigation. Follows the scientific method: observe → hypothesize → test → conclude → fix → prevent. Use when asked to "debug", "investigate", "find the root cause", or "why is this broken?".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[issue or error to debug]'
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

# debug — Systematic Root-Cause Investigation

Investigate and fix bugs using the scientific method. No patches without understanding
the root cause first.

## Out of scope

- Full code review (use `code-review`)
- Performance benchmarking (use `performance`)
- Architecture design (use `architecture`)
- Security audit (use `security`)

**Golden rule: No fixes without root cause. A patch without understanding creates two bugs.**

Follow the scientific method:

1. **Observe** — Gather all available evidence
1. **Hypothesize** — Form ranked hypotheses
1. **Test** — Write a reproducer, then eliminate hypotheses
1. **Conclude** — Identify root cause with evidence
1. **Fix** — Minimal change that addresses root cause
1. **Prevent** — Add a test that would have caught this

## Step 0: Understand the Problem

Before touching any code, gather complete context:

**What exactly is failing?**

> **Question:** Describe the problem completely.
>
> - What is the expected behavior?
> - What is the actual behavior?
> - When did it start failing? (sudden vs gradual)
> - What was the last change before it started failing?
> - Is it reproducible? Always, or intermittent?
>   **Options:** A) Answer inline | B) I'll share logs/errors in the next message

**Gather evidence:**

```bash
# Recent git history
git log --oneline -20

# Recent changes to the relevant area
git log --oneline --follow -- path/to/suspect/file 2>/dev/null | head -10

# Check for stashed work
git stash list

# Check for recent dependency changes
git diff HEAD~10 -- package.json package-lock.json go.mod go.sum pyproject.toml 2>/dev/null | head -40
```

## Step 1: Reproduce

**First, reproduce the bug reliably before attempting any fix.**

```bash
# Attempt to reproduce with minimal case
# Run the specific failing test or command
```

If intermittent:

- Run N times: `for i in $(seq 1 10); do [command]; done`
- Check for: time-dependent behavior, race conditions, external dependency flakiness

Document the reproducer:

```text
Reproducer:
  Command: [exact command to run]
  Expected: [what should happen]
  Actual: [what actually happens]
  Frequency: [always / N% of the time]
  Environment: [local / CI / staging / prod]
```

## Step 2: Gather Evidence

**Read all available logs and error output:**

```bash
# Application logs (recent)
# Adjust for your platform:
journalctl -u service-name --since "1 hour ago" 2>/dev/null | tail -100 || true
docker logs container-name 2>/dev/null | tail -100 || true
kubectl logs deployment/service-name --tail=100 2>/dev/null || true
cat /var/log/app.log 2>/dev/null | tail -100 || true

# Check for correlated errors at the same timestamp
# Check for system-level issues (disk full, OOM, network)
```

**Read the failing code:**

```bash
# Read the relevant source files
# Read the test that's failing (if applicable)
# Read recent changes: git show HEAD
git diff HEAD~3 -- relevant-files
```

## Step 3: Form Hypotheses

Based on evidence, list hypotheses in order of likelihood:

```text
Hypotheses (most likely first):
1. [Hypothesis] — Evidence for: [X] — Evidence against: [Y]
2. [Hypothesis] — Evidence for: [X] — Evidence against: [Y]
3. [Hypothesis] — Evidence for: [X] — Evidence against: [Y]
```

**Common backend bug categories to consider:**

- **Race condition / concurrency:** Multiple goroutines/threads/processes modifying shared state
- **Nil/null dereference:** Unhandled nil case in a code path
- **Off-by-one:** Boundary condition in loop, pagination, or slice
- **Type coercion:** Implicit type conversion causing unexpected behavior
- **State mutation:** Object modified unexpectedly (shared reference, closure)
- **Async/await:** Missing await, unhandled promise rejection
- **Database:** N+1 query, missing index, transaction isolation, stale connection
- **Network:** Timeout, connection pool exhaustion, DNS resolution failure
- **Configuration:** Wrong env var, missing config key, schema mismatch after migration
- **Dependency version:** Introduced by a dependency upgrade (check lockfile changes)
- **Memory:** Leak, fragmentation, GC pressure
- **Timing:** TTL expiry, clock skew, eventual consistency window

## Step 4: Test Each Hypothesis

For each hypothesis in rank order:

1. Design a test that would prove or disprove it
1. Run the test
1. Update the hypothesis ranking based on results

```bash
# Example: test for race condition
go test -race ./... 2>/dev/null || true

# Example: test for nil path
# Add temporary logging at the suspected nil path

# Example: test for database issue
# Examine query plans, check for missing indexes
```

Eliminate hypotheses one by one until only one remains.

## Step 5: Root Cause Identification

State the root cause with precision:

```text
Root Cause:
  Location:  path/to/file.ts:line
  Mechanism: [exact description of what is happening]
  Trigger:   [exact conditions that trigger the bug]
  Timeline:  [when was this introduced? git log shows...]
  Scope:     [Which environments? Which users? How often?]
```

## Step 6: Fix

Design the minimal fix:

1. Identify the smallest change that correctly fixes the root cause
1. Consider side effects
1. Consider whether the fix introduces new edge cases
1. Implement

```bash
# Apply the fix
# Run the reproducer to confirm it's fixed
```

## Step 7: Regression Test

Add a test that would have caught this bug:

```bash
# Write the test
# Run it on the broken state to confirm it catches the bug
git stash  # temporarily revert fix
[run test] # should fail
git stash pop  # restore fix
[run test] # should pass
```

Commit test + fix atomically:

```bash
git add -A
git commit -m "fix: [description of what was wrong]

Root cause: [one sentence]
Reproducer: [if non-obvious]
Test: [test file added/updated]"
```

## Step 8: Prevent Recurrence

Consider:

1. Is this a systemic pattern that could occur elsewhere?
1. Should there be a linting rule or code review checklist item?
1. Should a runbook be updated?
1. Should an alert be added to catch this class of failure in production?
1. Should TODOS.md be updated with related improvements?

## Debug Summary

```text
## Debug Report — [bug description] — [date]

Reproducer: [command or steps]
Root cause: [one paragraph explanation]
Fix: [change made in commit SHA]
Regression test: [test file:function]
Prevention: [any follow-up items]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"debug","artifact_type":"skill","artifact_version":"20260421011","generator":"vstack","vstack_version":"3.5.1"} -->
