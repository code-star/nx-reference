---
name: requirements
description: 'Collaborative requirements gathering and documentation. Clarifies what must be built, defines success criteria, constraints, and non-functional requirements. Produces a requirements.md document. Use when asked to "gather requirements", "write the requirements", "define the spec", or "what are we building?". Runs before architecture and design work begins.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[feature or system to document]'
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

# requirements — Requirements Gathering & Documentation

Clarify and document what must be built before engineering starts. Produce a
`docs/product/requirements.md` that downstream roles (architect, designer, engineer) can
work from.

## Out of scope

- Technical design and architecture decisions (use `architecture`)
- API/service design (use `design`)
- Roadmap and milestone planning (product role artifact)
- Implementation (engineering role)

## Deliverable and artifact policy

- Primary deliverable: `docs/product/requirements.md`
- Baseline-first default: write final requirements directly to `docs/product/requirements.md` on the feature branch.
- Before merge: confirm requirements are complete and consistent before merge.

## Step 0: Context

Read existing artifacts before asking questions:

```bash
cat docs/product/vision.md 2>/dev/null || true
cat docs/product/requirements.md 2>/dev/null || true
cat docs/product/roadmap.md 2>/dev/null || true
cat README.md 2>/dev/null | head -40 || true
```

Identify what's already known and what needs clarification.

## Step 1: Problem Statement

Clarify the core problem being solved:

> **Question:** Describe what you want to build and why.
>
> - What problem does this solve?
> - Who experiences this problem today?
> - What happens if we don't solve it?

Document:

```text
## Problem Statement
[One paragraph: root problem, who has it, impact of not solving it]
```

## Step 2: Users & Stakeholders

Who uses or is affected by this?

| Role        | Description | Primary need |
| ----------- | ----------- | ------------ |
| [User type] |             |              |

## Step 3: Functional Requirements

What must the system do? Use the format: "The system must [verb] [object] [condition/constraint]."

Ask for clarity on ambiguous areas:

> **Question:** Are there any specific behaviors or edge cases that are critical?

```markdown
## Functional Requirements

### Must have (MVP)

- FR-01: The system must [...]
- FR-02: The system must [...]

### Should have (desirable)

- FR-03: [...]

### Won't have (explicitly out of scope)

- [State what will NOT be built in this iteration]
```

## Step 4: Non-Functional Requirements

| Category     | Requirement    | Measurable target                    |
| ------------ | -------------- | ------------------------------------ |
| Performance  | Response time  | p99 < 500ms under X rps              |
| Availability | Uptime         | 99.9% (< 8.7h downtime/year)         |
| Security     | Auth           | All endpoints require authentication |
| Scalability  | Load           | Handle up to N concurrent users      |
| Compliance   | Data residency | Data stored in [region]              |

Ask:

> **Question:** Are there any hard non-functional requirements (performance, security,
> compliance, data residency)?

## Step 5: Constraints & Assumptions

Document known constraints:

```markdown
## Constraints

- Budget: [if relevant]
- Timeline: [hard deadline if any]
- Technology: [must use X, cannot use Y]
- Team: [available skill set]
- Existing systems: [must integrate with X]

## Assumptions

- [Things assumed true that could invalidate requirements if wrong]
```

## Step 6: Success Criteria

What does "done" look like? How do we know the requirements are met?

```markdown
## Success Criteria

- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
- [ ] [Acceptance test: given X, when Y, then Z]
```

## Step 7: Open Questions

List anything that is unclear and needs a decision before work begins:

```markdown
## Open Questions

- [ ] [Question] — Owner: [who decides] — Deadline: [when needed]
```

## Output: requirements.md

Write all findings to `docs/product/requirements.md`:

```markdown
# Requirements — [feature/project name]

**Status:** draft | reviewed | approved
**Date:** YYYY-MM-DD
**Author:** product role

## Problem Statement

[...]

## Users & Stakeholders

[table]

## Functional Requirements

[...]

## Non-Functional Requirements

[table]

## Constraints & Assumptions

[...]

## Success Criteria

[...]

## Open Questions

[...]
```

After writing, summarize what was decided so the architect role can start.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"requirements","artifact_type":"skill","artifact_version":"20260421024","generator":"vstack","vstack_version":"3.5.1"} -->
