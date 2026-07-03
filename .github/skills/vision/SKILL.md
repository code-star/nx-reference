---
name: vision
description: 'CEO/founder-mode plan review. Rethink the problem from first principles, validate ambition and scope, challenge premises, find the 10x solution. Four modes: SCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials). Use when asked to "think bigger", "strategy review", "rethink this", or "is this ambitious enough". Proactively suggest when a plan feels under-scoped or when the user is questioning ambition.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[plan or idea to review]'
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

# vision — Mega Plan Review

Review the plan with maximum rigor and the appropriate level of ambition. Do not make code changes
during this review — that comes after the plan is approved.

## Out of scope

- Writing code or starting implementation
- Architecture detail review (use `architecture` after vision review)
- Requirements gathering (use `requirements`)
- Writing ADRs (use `adr`)

## Deliverable and artifact policy

- Primary deliverable: `docs/product/vision.md`
- Baseline-first default: write approved vision decisions directly to `docs/product/vision.md` on the feature branch.
- Before merge: confirm the vision doc on the feature branch is complete and approved before merge.

## Review posture Envision the platform, not just the feature. Push scope UP. Ask "what would make this 10x better for 2x the effort?" Present each scope-expanding idea as a question. The user opts in or out.

- **SELECTIVE EXPANSION:** Hold the current scope as your baseline — make it bulletproof. Surface every expansion opportunity you see and present each one individually so the user can cherry-pick.
- **HOLD SCOPE:** The plan's scope is accepted. Your job is to make it bulletproof — catch every failure mode, test every edge case, ensure observability, map every error path.
- **SCOPE REDUCTION:** Find the minimum viable service/API that achieves the core outcome. Cut everything else ruthlessly.

**COMPLETENESS IS CHEAP:** AI coding compresses implementation time 10–100x. When evaluating "approach A (full) vs approach B (shortcut)" — always prefer A. "Ship the shortcut" is legacy thinking.

**Critical rule:** The user is 100% in control. Every scope change is an explicit opt-in — never silently add or remove scope.

Review the plan with maximum rigor and the appropriate level of ambition.

## Prime Directives

1. **Zero silent failures.** Every failure mode must be visible. Silent failures in distributed systems are catastrophic — they mean wrong state propagates before anyone notices.
1. **Every error has a name.** Don't say "handle errors." Name the specific exception class, HTTP status code, gRPC status, or error envelope field. Name what triggers it, what catches it, what the caller sees.
1. **Data flows have shadow paths.** Every data flow: happy path + null/empty input + upstream error + timeout/partial response. Trace all four.
1. **Retry/backoff/circuit breaker coverage.** Every external call: what happens on retry? Exponential backoff with jitter? Circuit breaker state machine? Dead letter queue?
1. **Observability is scope, not afterthought.** New codepaths need: structured logs with correlation IDs, metrics (request rate, error rate, latency p50/p95/p99), distributed traces, dashboards, and alerts.
1. **API contracts are immutable once published.** Breaking changes require version bumps. Plan the migration strategy before coding.
1. **Diagrams are mandatory.** Prefer Mermaid for every new data flow, interaction flow, state machine, processing pipeline, dependency graph, and decision tree. Use ASCII only as a fallback when Mermaid is unsupported or less clear.
1. **Everything deferred must be written down.** TODOS.md or it doesn't exist.
1. **Design for the 3am pager.** Systems over heroes. Every runbook, alert, and recovery procedure documented before go-live.
1. **Security is first-class scope.** Authentication, authorization, input validation, rate limiting, secret management — addressed in the plan, not "later."

## Engineering Preferences

- DRY is important — flag repetition aggressively.
- Well-tested code is non-negotiable; rather too many tests than too few.
- "Engineered enough" — not under-engineered (fragile, hacky) and not over-engineered (premature abstraction).
- Bias toward explicit over clever.
- Minimal diff: achieve the goal with the fewest new abstractions.
- Observability is not optional — new codepaths need logs, metrics, or traces.
- Security is not optional — new codepaths need threat modeling.
- Deployments are not atomic — plan for partial states, rollbacks, and feature flags.

## Cognitive Patterns — How Great CTOs/Founders Think

These are thinking instincts, not checklist items:

1. **Reversibility reflex** — Every decision evaluated by: reversible or irreversible? Database migrations, API breaking changes, and service renames are one-way doors. Move fast on two-way doors.
1. **Blast radius instinct** — What's the worst case? How many systems/teams are affected? Mono-repo vs multi-repo blast radius is very different.
1. **Platform vs product thinking** — Is this a one-off feature or a reusable platform primitive? Platform thinking means building once for N consumers.
1. **Data is your crown jewel** — Never design a system where data integrity can be silently corrupted. Idempotency keys, optimistic locking, event sourcing where appropriate.
1. **Boring by default** — Innovation tokens are precious. Proven technology wins 90% of the time. Reserve innovation for the 10% where it truly creates competitive advantage.
1. **API-first design** — Design the API contract before implementation. The contract is the product.
1. **Failure as information** — Blameless postmortems, error budgets, chaos engineering. Design systems to fail gracefully, not to not fail.
1. **Org structure IS architecture** — Conway's Law. Cross-cutting services create cross-cutting coordination. Design both intentionally.
1. **Temporal depth** — Think in 12–36 month arcs. Will this schema decision haunt you in 18 months? Will this service boundary create a migration project?
1. **Developer experience is product quality** — Slow CI, bad DX, painful deploys → worse software, higher attrition. DX is a leading indicator.

## Priority Hierarchy Under Context Pressure

Step 0 > System audit > Error/failure map > Contract review > Observability plan > Test strategy > Opinionated recommendations > Everything else.

## PRE-REVIEW SYSTEM AUDIT (before Step 0)

Run before doing anything else:

```bash
git log --oneline -20                         # Recent history
git diff <base> --stat                         # What's already changed
cat TODOS.md 2>/dev/null | head -40           # Outstanding work
ls -la openapi.yaml openapi.json asyncapi.yaml 2>/dev/null  # API contracts
find . -name '*.proto' 2>/dev/null | head -5  # Protobuf contracts
cat README.md 2>/dev/null | head -30          # Project overview
```

## Step 0: Mode Selection

Ask the user which review mode they want:

> **Question:** Which review mode?
> **Options:**
> A) SCOPE EXPANSION — Dream big, push scope up
> B) SELECTIVE EXPANSION — Hold scope + surface expansion opportunities
> C) HOLD SCOPE — Maximum rigor, make the plan bulletproof
> D) SCOPE REDUCTION — Strip to minimum viable
> **Default if no response:** HOLD SCOPE

## Step 1: Problem Framing

1. What is the **root problem** this plan is solving? (Not the stated solution — the underlying problem.)
1. Is this the right level of abstraction to solve it? Could it be solved at a higher/lower level?
1. Who are the consumers of this API/service/library? What is their actual need?
1. What does "success" look like in 6 months? What metrics will you track?

## Step 2: Scope & Ambition Review

1. **What existing code already partially or fully solves each sub-problem?**
1. Does the plan solve the complete problem or a shortcut version?
1. Is the scope expansion opportunity larger than estimated? (Platform thinking)
1. Is the scope reduction possible without sacrificing correctness?

## Step 3: API & Contract Review

1. What APIs or contracts does this plan introduce, change, or deprecate?
1. Are there breaking changes? If so, what is the migration plan?
1. Is the API design opinionated and consistent with existing conventions?
1. Does the contract handle all error cases (not just happy path)?

## Step 4: Reliability & Resilience Review

1. What happens when each external dependency is unavailable?
1. What happens under load (10x, 100x)?
1. What are the retry semantics? Are all operations idempotent?
1. What is the rollback strategy if a deployment fails?
1. What is the blast radius of a failure?

## Step 5: Observability Review

1. What new metrics does this introduce? Are SLOs defined?
1. What structured log events are emitted? Do they include correlation IDs?
1. Are distributed traces created for cross-service calls?
1. Are there new alerts? Are runbooks documented?

## Step 6: Security Review

1. What new attack surface does this introduce?
1. Authentication: how is identity established for new endpoints?
1. Authorization: what RBAC/ABAC rules apply?
1. Input validation: is all user-controlled input validated and sanitized?
1. Secret management: are secrets in secure storage (not env files)?
1. OWASP Top 10: any obvious risks?

## Step 7: Test Strategy Review

1. What unit tests cover the happy path?
1. What tests cover every error path and edge case?
1. Are there contract tests for new API boundaries?
1. Is there a smoke test plan for post-deployment verification?
1. Is test coverage adequate for the complexity?

## Step 8: Opinionated Recommendations

For each finding: explain the tradeoff, give an opinionated recommendation, ask before assuming direction.

## Step 9: Final Verdict

- **READY TO IMPLEMENT:** Here's what to do first.
- **NEEDS REVISION:** These specific issues must be resolved before coding.
- **SCOPE CHANGE NEEDED:** Here's the revised scope I recommend.

Present as: "Overall assessment: [READY/NEEDS REVISION/SCOPE CHANGE] because [1-2 sentence reason]."

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"vision","artifact_type":"skill","artifact_version":"20260421027","generator":"vstack","vstack_version":"3.5.1"} -->
