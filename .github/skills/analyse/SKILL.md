---
name: analyse
description: 'Cross-cutting technical analysis. Investigates impact, tradeoffs, root causes, or feasibility without implementing changes. Use when asked to "analyse this", "investigate the impact", "what are the tradeoffs", "root cause analysis", "is this feasible?", or "compare these approaches". Produces an analysis report.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search'
argument-hint: '[topic, change, or question to analyse]'
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

# analyse — Technical Analysis

Investigate a technical question, impact, or tradeoff. Produce a structured
analysis report. Do not implement changes — that is engineering role work.

## Out of scope

- Fixing bugs (use `debug`)
- Performance benchmarking with code changes (use `performance`)
- Architecture decisions (use `architecture` + `adr`)
- Implementation (engineering role)
- Full test run (use `verify`)

## Step 0: Define the Question

Clarify exactly what is being analysed:

> **Question:** What is the specific question or concern to investigate?
>
> - Impact analysis: "What breaks if we change X?"
> - Tradeoff analysis: "Compare approach A vs approach B"
> - Feasibility analysis: "Can we do X given constraints Y?"
> - Root cause analysis: "Why does X happen?"
> - Risk analysis: "What are the risks of doing/not doing X?"
>   **Default:** Open-ended investigation based on user's context

Document:

```text
Analysis type: [impact | tradeoff | feasibility | root-cause | risk | other]
Question:      [Precise question being answered]
Scope:         [What's in and out of scope for this analysis]
```

## Phase 1: Evidence Gathering

Gather all relevant context before drawing any conclusions:

```bash
# Understand the current state
git log --oneline -20
cat TODOS.md 2>/dev/null | head -30 || true

# Find relevant code
# (adjust search terms to the specific question)
grep -r -n "TODO\|FIXME\|DEPRECATED" \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules . 2>/dev/null | head -20
```

For **impact analysis**, find all call sites / dependents:

```bash
# Find all usages of a symbol, function, or interface
grep -r -n "SYMBOL_NAME" \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules . 2>/dev/null
```

For **dependency analysis**:

```bash
# Dependency graph (if available)
[ -f package.json ] && npx madge --circular --extensions ts ./src 2>/dev/null || true
```

## Phase 2: Dimension Analysis

Structure the analysis around the relevant dimensions for the question type:

### For impact analysis:

- What systems/services/consumers are affected?
- What is the blast radius? (local, service-wide, cross-service, user-facing)
- Are breaking changes involved?
- What is the rollback strategy?
- Migration effort estimate

### For tradeoff analysis:

For each option:

| Dimension         | Option A | Option B |
| ----------------- | -------- | -------- |
| Complexity        |          |          |
| Performance       |          |          |
| Maintainability   |          |          |
| Cost              |          |          |
| Risk              |          |          |
| Time to implement |          |          |

### For feasibility analysis:

- Technical feasibility: can this be built with current stack/skills?
- Constraints: what limits apply (time, budget, API limits, data size)?
- Dependencies: what must be true for this to work?
- Risks: what could prevent success?

### For root cause analysis:

- What is the observed symptom?
- What are the contributing factors?
- Primary cause vs contributing causes
- Timeline: when did this start? What changed?

### For risk analysis:

| Risk | Likelihood      | Impact          | Mitigation |
| ---- | --------------- | --------------- | ---------- |
| ...  | High/Medium/Low | High/Medium/Low | ...        |

## Phase 3: Data & Evidence

Support findings with concrete evidence:

```bash
# Metrics, logs, or data that support the analysis
# Error rates, latency percentiles, query counts, etc.
```

Reference specific:

- Code locations (file:line)
- Data points (error counts, latency numbers, test results)
- Documentation (ADRs, design docs, API specs)

## Phase 4: Findings & Conclusions

Present findings clearly:

```markdown
## Findings

### [Finding 1 — short title]
[Evidence + explanation]

### [Finding 2]
[Evidence + explanation]
```

State conclusions with confidence level:

- **Certain:** evidenced directly from code/data
- **Probable:** well-supported by evidence but not confirmed
- **Uncertain:** hypothesis that requires further investigation

## Analysis Report

```text
## Analysis Report — [topic] — [date]

### Question
[The specific question answered]

### TL;DR
[2-3 sentence executive summary of the most important finding]

### Findings
[Structured findings with evidence]

### Recommendation
[If applicable: what to do based on the analysis]
[NOT an implementation plan — just the recommended direction]

### Open Questions
[What remains unclear and needs further investigation]

### Confidence
[Overall confidence level: high / medium / low — and why]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"analyse","artifact_type":"skill","artifact_version":"20260421004","generator":"vstack","vstack_version":"3.5.1"} -->
