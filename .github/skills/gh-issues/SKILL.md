---
name: gh-issues
description: 'Create, update, and manage GitHub issues using the gh CLI. Covers bug reports, feature requests, tasks, labels, assignees, milestones, sub-issues, and issue workflows. Use when asked to "create an issue", "file a bug", "create a feature request", "update issue #N", "add a label", or "close an issue".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with terminal command execution and GitHub CLI authentication (`gh auth status`).'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit web'
argument-hint: '[what to create or which issue number to update]'
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

# gh-issues — GitHub Issue Management

Create, update, and manage GitHub issues. Prefer the GitHub MCP server tools when
available in the current agent session (`create_issue`, `update_issue`, `list_issues`,
etc.). Fall back to `gh` CLI when MCP tools are unavailable or when a required
operation is not exposed by the MCP server.

## Out of scope

- Pull requests (use `pr`)
- Release notes (use `release-notes`)
- Project boards — use `gh project` commands or GitHub UI directly

## Step 0: Pre-flight

```bash
# Verify gh CLI is authenticated
gh auth status 2>/dev/null || echo "ERROR: gh CLI not authenticated"

# Identify the repository
gh repo view --json nameWithOwner --jq '.nameWithOwner' 2>/dev/null
```

## Step 1: Determine Action

Classify the request:

- **Create:** new bug report, feature request, or task
- **Update:** edit title, body, labels, assignees, milestone, or state
- **Query:** list, search, or view issues

## Step 2: Query Existing Issues (when relevant)

Before creating, check if a similar issue already exists:

```bash
# List open issues with optional filter
gh issue list --state open --limit 20

# Search for similar issues
gh issue list --search "<keyword>" --state all --limit 10

# View a specific issue
gh issue view <number>
```

## Step 3: Create an Issue

### Bug report

```bash
gh issue create \
  --title "Short imperative description of the bug" \
  --body "## Description
What is broken and what impact does it have?

## Steps to Reproduce
1.
2.
3.

## Expected Behavior
What should happen.

## Actual Behavior
What happens instead.

## Environment
- Version/commit:
- OS/Platform:
- Relevant config:" \
  --label "bug"
```

### Feature request

```bash
gh issue create \
  --title "Add <capability>" \
  --body "## Summary
One-paragraph description of the feature and its value.

## Motivation
Why is this needed? Who benefits?

## Proposed Solution
How it could be implemented at a high level.

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2" \
  --label "enhancement"
```

### Task / chore

```bash
gh issue create \
  --title "Imperative description of the task" \
  --body "## Context
Why this task is needed.

## Definition of Done
- [ ] Step 1
- [ ] Step 2" \
  --label "task"
```

### With assignees and milestone

```bash
gh issue create \
  --title "<title>" \
  --body "<body>" \
  --assignee "<github-username>" \
  --milestone "<milestone-title>"
```

## Step 4: Update an Existing Issue

```bash
# Edit title or body
gh issue edit <number> --title "<new-title>"
gh issue edit <number> --body "<new-body>"

# Add or remove labels
gh issue edit <number> --add-label "bug" --remove-label "needs-triage"

# Change assignees
gh issue edit <number> --add-assignee "<username>"

# Set milestone
gh issue edit <number> --milestone "<milestone-title>"

# Close or reopen
gh issue close <number> --comment "Resolved in <commit/PR>."
gh issue reopen <number>

# Add a comment
gh issue comment <number> --body "Comment text."
```

## Step 5: Sub-issues (if hierarchy is needed)

GitHub supports sub-issues via the REST API:

```bash
# Create sub-issue and link to parent
PARENT=<parent-issue-number>
CHILD=$(gh issue create \
  --title "<sub-task title>" \
  --body "Sub-task for #$PARENT." \
  --json number --jq '.number')

# Link child to parent via REST API
OWNER_REPO=$(gh repo view --json nameWithOwner --jq '.nameWithOwner')
gh api "repos/$OWNER_REPO/issues/$PARENT/sub_issues" \
  -X POST \
  -f sub_issue_id="$CHILD"
```

## Title guidelines

- Use imperative mood: "Add dark mode", not "Dark mode addition"
- Be specific: "Login fails with SSO enabled" not "SSO broken"
- Keep under 72 characters
- Do not prefix with `[Bug]` or `[Feature]` — use labels instead

## Standard labels

| Label              | Use for                             |
| ------------------ | ----------------------------------- |
| `bug`              | Something is broken                 |
| `enhancement`      | New feature or improvement          |
| `documentation`    | Docs-only change                    |
| `task`             | Internal maintenance or chore       |
| `good first issue` | Suitable for new contributors       |
| `help wanted`      | Extra attention or expertise needed |
| `wontfix`          | Will not be addressed               |
| `duplicate`        | Already tracked elsewhere           |

## Output

Report the URL after creation or update:

```text
https://github.com/<org>/<repo>/issues/<number>
```

## References

> Always use the official documentation for the exact version in use — options and syntax change between releases.

- [gh issue — GitHub CLI manual](https://cli.github.com/manual/gh_issue)
- [GitHub Issues documentation](https://docs.github.com/en/issues)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"gh-issues","artifact_type":"skill","artifact_version":"20260502025","generator":"vstack","vstack_version":"3.5.1"} -->
