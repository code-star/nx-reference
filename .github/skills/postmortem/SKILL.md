---
name: postmortem
description: 'Blameless post-mortem writing for incidents. Produces a stakeholder-facing post-mortem document linked to the triggering issue and RCA. Use when asked to "write a post-mortem", "blameless post-mortem", or "incident post-mortem". Called by the incident skill; the RCA should be available before invoking this.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[incident to write a post-mortem for]'
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

# postmortem — Blameless Post-Mortem

Produce a blameless, stakeholder-facing post-mortem document for a resolved
incident. The post-mortem summarises impact, timeline, root cause, and action
items. It is distinct from the RCA: the RCA is the technical analysis; the
post-mortem is the organisational record.

## Out of scope

- Technical root cause investigation (use `rca` first)
- Live incident triage (use `incident`)
- Code-level debugging (use `debug`)

**Golden rule: Incidents are system failures. Every statement must be blameless
— frame findings as system improvement opportunities, never as individual fault.**

## Step 0: Gather Context

Before writing, confirm inputs are available:

> **Required:**
>
> - Incident ID and title
> - Severity and duration
> - RCA document path (or summary if RCA is not yet written)
> - Linked issue file path (optional)
>
> **Output path:** Where should the post-mortem be written?
>
> Default: `docs/postmortems/{id}-{slug}-postmortem.md`
> Suggested name: `{id}-{slug}-postmortem.md` (e.g. `001-login-timeout-postmortem.md`)
>
> **Options:** A) Use default | B) Specify a different path

## Step 1: Summary

One paragraph for a non-technical audience — what happened, what was the
impact, and how was it resolved:

```text
[2–3 sentences. No jargon. Written for stakeholders and future team members.]
```

## Step 2: Timeline

Build a precise chronological timeline:

```text
All times UTC:

HH:MM — [event] — [who / what system]
HH:MM — [alert fired / page sent]
HH:MM — [response action]
HH:MM — [mitigation deployed]
HH:MM — [full resolution]

Key markers:
  Impact start:    HH:MM
  Detection:       HH:MM  (+N min)
  Response start:  HH:MM  (+N min)
  Resolution:      HH:MM  (+N min)
  Total duration:  N hours N minutes
```

## Step 3: Impact

Quantify impact precisely:

```text
Users affected:   [N users | N% of traffic | all users]
Error rate:       [N% of requests]
Latency:          [p99 increased from Nms to Nms]
Data loss:        [none | describe scope]
SLA breach:       [yes — N minutes over limit | no]
Customer comms:   [status page | direct notification | none]
```

## Step 4: Root Cause

Restate the root cause from the RCA in one paragraph. Link to the RCA for
the full technical analysis:

```text
Root cause: [one clear, systemic, blameless statement]

See [RCA document]({id}-{slug}-rca.md) for the full technical analysis.
```

## Step 5: Action Items

Carry over action items from the RCA, categorised and owned:

| Item | Category   | Owner | Due | Status |
| ---- | ---------- | ----- | --- | ------ |
|      | Prevention |       |     |        |
|      | Detection  |       |     |        |
|      | Response   |       |     |        |

## Step 6: Write the Post-Mortem Document

Write to the confirmed output path:

```markdown
# {id}: {title} — Post-Mortem

<!-- Suggested name: {id}-{slug}-postmortem.md -->

> **date:** YYYY-MM-DD
> **severity:** P{1–4}
> **status:** draft | review | closed
> **issue:** [{id}]({id}-{slug}.md)
> **rca:** [{id}-{slug}-rca.md]({id}-{slug}-rca.md)

## summary

## timeline

| Time (UTC) | Event |
| --- | --- |
| HH:MM | |

## impact

## root cause

## resolution

## action items

| Item | Owner | Due | Status |
| --- | --- | --- | --- |

## lessons learned
```

## Output

```text
Post-Mortem Complete
════════════════════

Incident:     [ID / title]
Severity:     [P1–P4]
Duration:     [N hours N minutes]
Action items: [N total]

Written to:   [path/to/{id}-{slug}-postmortem.md]
Status:       Draft — ready for team review
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"postmortem","artifact_type":"skill","artifact_version":"20260503001","generator":"vstack","vstack_version":"3.5.1"} -->
