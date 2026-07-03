---
name: docs
description: 'Post-release documentation alignment. Updates README, API docs, migration guides, and related docs to match shipped behavior. Does not own release-note generation or CHANGELOG updates. Use after release or deploy, or when asked to "update docs", "align documentation", or "refresh README/API docs".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[release or change to document]'
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

# docs — Post-Release Documentation Update

Update all documentation to match what was just shipped. Report and write; do not
change source code.

## Out of scope

- Code changes or bug fixes (use `verify` or `debug`)
- Creating the PR (use `pr`)
- Generating release notes (use `release-notes`)
- Updating `CHANGELOG.md` (owned by `release-notes`)

## Deliverable and artifact policy

- Primary deliverables: updated baseline documentation artifacts (for example `README.md`, API docs, migration guides)
- Baseline-first default: write final documentation updates directly to baseline docs on the feature branch.
- Before merge: confirm documentation updates are complete and consistent before merge.

## Step 0: Scope the Release

```bash
# What changed in this release?
git log <base>..HEAD --oneline
git diff <base> --stat | head -30

# Current version
cat VERSION 2>/dev/null \
  || node -p "require('./package.json').version" 2>/dev/null \
  || echo "unknown"
```

## Step 1: README

Review whether README needs updates:

```bash
cat README.md 2>/dev/null | head -60
```

Check:

- [ ] Installation instructions still accurate?
- [ ] "Getting started" example still works?
- [ ] Feature list reflects new capabilities?
- [ ] Any deprecated features removed from featured examples?
- [ ] Badges (version, CI status) still accurate?

## Step 2: API Documentation

If there's an OpenAPI / AsyncAPI spec:

```bash
cat openapi.yaml 2>/dev/null | head -40 || true
```

Check:

- [ ] Spec version matches VERSION?
- [ ] New endpoints documented?
- [ ] Changed endpoints updated?
- [ ] Deprecated endpoints marked with `deprecated: true`?
- [ ] Response examples accurate?

If there's generated API documentation (Swagger UI, Redoc, TypeDoc, Sphinx):

```bash
npm run docs 2>/dev/null || make docs 2>/dev/null || true
```

## Step 3: MIGRATIONS Guide (if applicable)

If this release contains breaking changes or migration steps:

- Create or update `MIGRATIONS.md` or `docs/migrations/vX.md`
- Document: why the change was made, what behavior changed, migration steps, code examples

## Step 4: Code Comments & ADRs

For significant architectural changes:

- Check if inline code comments reference outdated behavior

- Add an Architecture Decision Record in `docs/architecture/adr/` if a significant decision was made

  (use the `adr` skill for the full ADR writing procedure)

## Step 5: Commit Documentation Updates

```bash
git add README.md openapi.yaml docs/ 2>/dev/null || true
git commit -m "docs: update documentation for v$(cat VERSION 2>/dev/null || echo 'unknown')"
```

## Summary

```text
## Documentation Update — v[VERSION] — [date]

Updated:
- [ ] README.md
- [ ] API spec (openapi.yaml)
- [ ] Migration guide (if breaking changes)
- [ ] ADR (if architectural decision)

Skipped (n/a):
- [ ] [reason]
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"docs","artifact_type":"skill","artifact_version":"20260421014","generator":"vstack","vstack_version":"3.5.1"} -->
