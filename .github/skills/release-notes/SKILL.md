---
name: release-notes
description: 'Prepare release artifacts: verify all docs are present, write release notes, own CHANGELOG.md updates, and produce docs/releases/{date}.md. Use when asked to "write release notes", "update the changelog", or "prepare release artifacts".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[version or changes to release]'
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

# release-notes — Release Artifact Preparation

Write release notes and update the changelog so that the release is documented
before the PR is opened.

## Out of scope

- Running tests or audits (use `verify`, `security`, `performance`)
- Creating the PR (use `pr`)
- Deployment — CI/CD takes over after merge

## Deliverable

- A release notes document summarising what changed
- An updated `CHANGELOG.md` entry

The invoking agent determines which files to read as evidence and where to write
the release notes. This skill describes the procedure, not the file paths.

## Step 1: Evidence review

Verify that the evidence the invoking agent has designated as required is present
and not empty. Report any missing items and stop if blockers exist.

Check each artifact the invoking agent listed as required. For each file:

```bash
[ -f "<path>" ] && echo "✓ <path>" || echo "✗ MISSING: <path>"
```

Typically this includes:

- Requirements or scope artifact
- Architecture or design overview
- Test results or verification report
- Security findings or sign-off
- Change summary (git log, diff stat, or agent-provided summary)
- `CHANGELOG.md`

If any required evidence is missing: **STOP and report to the invoking agent**.

## Step 2: Summarise changes

Review what changed on this branch vs the base branch:

```bash
git log origin/main..HEAD --oneline
git diff origin/main --stat | head -30
```

Identify:

- New features
- Bug fixes
- Breaking changes (if any)
- Internal/infrastructure changes

## Step 3: Write release notes

Write a release notes document to the location designated by the invoking agent.
Date format: `YYYY-MM-DD` (today). Never overwrite an existing file.

Use this structure:

```markdown
# Release {date}

## Summary
[1–3 sentences: what changed and why it matters to users]

## What's new
- [user-visible feature or fix — lead with what the user can now DO]

## Fixed
- [bug fixes]

## Internal
- [infra, tooling, tests — optional]

## Evidence reviewed
| evidence | status |
|----------|--------|
| [requirements artifact] | ✓ |
| [architecture artifact] | ✓ |
| [test report] | ✓ |
| [security report] | ✓ |
```

Rules:

- Write for users, not contributors
- No internal tracking references
- Every entry should make someone think "oh nice, I want that"

## Step 4: Update `CHANGELOG.md`

Prepend a new entry at the top of `CHANGELOG.md`:

```markdown
## {version or date}

### What's new
- [user-visible changes]

### Fixed
- [bug fixes]

### Internal
- [optional]
```

Keep existing entries intact.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"release-notes","artifact_type":"skill","artifact_version":"20260502014","generator":"vstack","vstack_version":"3.5.1"} -->
