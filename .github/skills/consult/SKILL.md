---
name: consult
description: 'DX triage and focused review. First classifies whether the request is API DX, CLI/tool DX, or developer workflow DX, then runs exactly one review path with 0-10 scoring and ROI-ranked improvements. Routes non-DX requests to the right specialized skill (analyse/debug/security/performance/design/verify/code-review). Use when asked to "review DX", "review API usability", "review CLI experience", or "review developer workflow friction".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search'
argument-hint: '[API, tool, or workflow to consult]'
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

# consult — DX Triage and Focused Review

Classify the request first, then run exactly one focused DX review path.
If the request is not DX-focused, route to the correct specialized skill.
Read only — do not change any code.

## Out of scope

- Building or redesigning APIs from scratch (use `design`)
- Implementation of improvements (engineering role)
- Full verification or contract testing (use `verify`)
- Architecture decisions (use `architecture`)
- Root-cause debugging (use `debug`)
- Security audits (use `security`)
- Performance profiling/regression analysis (use `performance`)
- Tradeoff/impact/feasibility analysis (use `analyse`)

## Step 0: Classify and Route

Determine the user's real intent before reviewing anything.

```bash
# Quick context snapshot
ls openapi.yaml openapi.json asyncapi.yaml 2>/dev/null | head -5 || true
cat README.md 2>/dev/null | head -25 || true
```

> **Question:** Which path matches the request best?
> **Options:**
> A) API DX review
> B) CLI/tool DX review
> C) Developer workflow DX review (onboarding/CI/tooling)
> D) Not DX (route to another skill)
> **Default if no response:** A

If D, stop and return this routing recommendation:

- API/service design from scratch -> `design`
- Technical impact/tradeoff analysis -> `analyse`
- Root-cause investigation -> `debug`
- Pre-merge risk review -> `code-review`
- Security audit -> `security`
- Performance profiling/regression check -> `performance`
- Verification/fix loop -> `verify`

Do not continue with DX scoring when routing to another skill.

## Step 1: Run Exactly One Path

Run only the selected path (A, B, or C). Skip all others.

### Path A — API DX Review

Rate each dimension 0-10. Explain the current score and what a 10 looks like.

#### A1. Naming and Consistency

- Are resource names plural nouns? (`/users`, not `/user`, `/getUser`)
- Are action names consistent? (REST verbs via HTTP method, not in path)
- Are field names consistently cased? (camelCase or snake_case — not mixed)
- Are boolean flags named clearly? (`is_active`, not `active`)
- Are error codes human-readable? (`INVALID_EMAIL`, not `ERR_400_02`)

#### A2. Error UX

- Does every error response include a human-readable `message`?
- Does every error include a machine-readable `code` for programmatic handling?
- Does every validation error identify the specific field that failed?
- Are errors actionable? ("Email already in use" not "Conflict")
- Are error codes documented?

#### A3. Contract and Envelope Consistency

- Is the response envelope consistent across all endpoints?
- Are pagination responses consistent? (same cursor/offset shape)
- Is there a `data` wrapper vs direct object — consistent?
- Is the `null` contract clear? (field absent vs `null` vs empty array)

#### A4. Auth Integrator Experience

- Is the auth flow simple to implement for a new integrator?
- Are auth errors clear? (401 vs 403, explained)
- Are token expiry and refresh mechanisms obvious?
- Is there a "getting started" auth example?

#### A5. Versioning and Documentation

- Is the versioning strategy documented? (`/v1/`, `Accept` header, custom header)
- Are breaking change policies documented?
- Is there a deprecation timeline?
- Are deprecated fields/endpoints marked in the API spec?
- Does every endpoint have a description and examples?

#### A6. SDK Ergonomics (if applicable)

- If an SDK is provided: is it idiomatic for the target language?
- Does the SDK handle pagination, retries, and auth automatically?
- Is the SDK versioned and published to the target package registry?
- Are there typed responses?

### Path B — CLI/Tool DX Review

#### B1. Onboarding Speed

- How many commands to get to "hello world"?
- Is there a `--help` at every level?
- Does the tool guide you when required args are missing?

#### B2. Error Messages and Feedback

- Are error messages actionable? (not "command failed")
- Do errors include the remediation step?
- Is progress shown for long operations?

#### B3. Discoverability

- Can you discover all commands via `--help`?
- Are subcommands logical and grouped?
- Is there autocomplete?

### Path C — Developer Workflow DX Review

#### C1. Local Setup Friction

```bash
cat README.md 2>/dev/null | grep -A 20 "Getting Started\|Installation\|Setup" | head -25
ls docker-compose.yml Makefile .devcontainer/ 2>/dev/null || true
```

- Can a new developer be productive within 30 minutes?
- Is local dev environment reproducible?
- Are environment variables documented?

#### C2. CI Feedback Speed

```bash
cat .github/workflows/*.yml 2>/dev/null | grep -E 'timeout|runs-on|steps' | head -20
```

- How long does CI take?
- Are fast checks (lint, type) run before slow checks (tests)?
- Is CI feedback specific about what failed and where?

#### C3. Quality Tooling Loop

- Is there a formatter configured?
- Is there a linter with a clear rule set?
- Is there type checking?
- Are these run on commit (pre-commit hooks) or in CI?

## Step 2: Improvement Plan (ROI-first)

For each weak area (typically score < 7), provide:

1. **Quick win (< 2 hours):** Highest immediate impact.
1. **Medium investment (1-2 days):** Most likely path to 9/10.
1. **Long-term:** Structural change to reach 10/10.

## Output Contract

```text
## Consult Report — [project/API/tool] — [date]

selected_path: [A API DX | B CLI DX | C Workflow DX | D Routed]
overall_score: [N/10 or N/A when routed]

### Scores
| Dimension | Score | Quick Win |
|-----------|-------|-----------|
| [Dimension 1] | N/10 | [Quick win] |
| [Dimension 2] | N/10 | [Quick win] |
| [Dimension 3] | N/10 | [Quick win] |
| **Overall** | **N/10** | |

### Top 3 Improvements (by ROI)
1. [Highest leverage change]
2. [Second highest]
3. [Third]

### Routing (only when selected_path = D)
recommended_skill: [design|analyse|debug|code-review|security|performance|verify]
reason: [one sentence]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"consult","artifact_type":"skill","artifact_version":"20260421009","generator":"vstack","vstack_version":"3.5.1"} -->
