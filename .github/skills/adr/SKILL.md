---
name: adr
description: 'Architecture Decision Record writing. Documents a significant architectural decision with context, alternatives considered, rationale, and impact. Use when asked to "write an ADR", "document this decision", "record why we chose X", or when a significant technical decision needs a permanent record. Runs after a decision is made or while evaluating options.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[decision to record]'
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

# adr — Architecture Decision Record

Document a significant technical decision so future contributors understand
what was decided, why, and what alternatives were considered.

## Out of scope

- Architecture reviews of plans (use `architecture`)
- Gathering requirements (use `requirements`)
- Implementation (engineering role)
- Running analysis to inform the decision (use `analyse`)

## Step 0: Context Gathering

Read existing ADRs and architecture docs:

```bash
ls docs/architecture/adr/ 2>/dev/null | sort | head -20 || true
cat docs/architecture/overview.md 2>/dev/null | head -40 || true
# Find highest existing ADR number
ls docs/architecture/adr/*.md 2>/dev/null | grep -oE '[0-9]+' | sort -n | tail -1 || echo "0"
```

Determine the next ADR number (pad to 3 digits: 001, 002, ...).

## Step 1: Understand the Decision

> **Question:** What decision are we recording?
> **Options:** A) Decision already made — record it | B) Options still open — evaluate and recommend | C) Superseding an existing ADR — which one?
> **Default if no response:** A (record an already-made decision)

Document:

```text
Decision: [One-line statement of what was decided]
Status:   proposed | accepted | rejected | deprecated | superseded
Date:     YYYY-MM-DD
```

## Step 2: Context

Why does this decision need to be made? What forces are at play?

Include:

- The problem or requirement driving the decision
- Relevant constraints (technical, organizational, timeline)
- Dependencies on other decisions
- What happens if no decision is made

```markdown
## Context

[2-4 paragraphs explaining the situation, constraints, and why this matters]
```

## Step 3: Alternatives Considered

List all serious options that were evaluated. For each:

```markdown
### Option A: [Name]

**Description:** [What this option is]
**Pros:**

- [...]
  **Cons:**
- [...]
  **Why rejected:** [or "this is the chosen option"]
```

Include at least 2-3 alternatives. Including a "do nothing" option is recommended.

## Step 4: Decision

State the chosen option clearly:

```markdown
## Decision

We will [chosen option].

[1-2 sentences on why this option was selected over alternatives]
```

## Step 5: Rationale

Explain the reasoning in depth:

```markdown
## Rationale

[Detailed explanation: what made this the right choice given the context and constraints.
Reference specific cons from rejected options and explain why they were acceptable tradeoffs.]
```

## Step 6: Consequences & Impact

```markdown
## Consequences

### Positive

- [Expected benefits]

### Negative / Tradeoffs

- [Known downsides or limitations of this choice]

### Risks

- [What could go wrong, and how we'd detect or mitigate it]
```

## Step 7: Related Decisions

```markdown
## Related ADRs

- ADR-NNN: [title] — [relationship: supersedes / related to / depends on]
```

## Output: ADR file

Write to `docs/architecture/adr/NNN-<slug>.md` where NNN is the next available number and slug
is a kebab-case title.

```markdown
# ADR-NNN: <title>

**Date:** YYYY-MM-DD
**Status:** proposed | accepted | rejected | deprecated | superseded

## Context

[...]

## Decision

[...]

## Alternatives Considered

[...]

## Rationale

[...]

## Consequences

[...]

## Related ADRs

[...]
```

After writing, state the file path and summary so the architect or product role can review.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"adr","artifact_type":"skill","artifact_version":"20260421003","generator":"vstack","vstack_version":"3.5.1"} -->
