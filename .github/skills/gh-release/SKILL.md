---
name: gh-release
description: 'Create or update a GitHub Release using the gh CLI from prepared release artifacts. Handles immutable tag checks, draft/publish/prerelease flow, release notes source selection, optional asset upload, and release metadata verification before publication. Use when asked to "create a GitHub release", "publish a release", or "draft release with gh".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access, terminal command execution, and GitHub CLI authentication (`gh auth status`).'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit web'
argument-hint: '[version/tag and release notes source]'
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

# gh-release — Create or Update GitHub Release via gh CLI

Create or update a GitHub Release from prepared release artifacts using `gh`.

## Out of scope

- Writing release notes content from scratch (use `release-notes`)
- Opening pull requests (use `pr`)
- Deploying to runtime environments

## Deliverable

- A draft or published GitHub Release for the requested tag/version

## Step 1: Preconditions

Validate repository state and CLI auth:

```bash
gh auth status
git remote -v
git status --short
```

If `gh auth status` fails: stop and request authenticated `gh` session.

## Step 2: Determine release inputs

Capture required inputs:

```text
Tag/version:           [e.g. v2.2.0]
Target commit/branch:  [default: current HEAD]
Release title:         [e.g. v2.2.0]
Mode:                  [draft | publish]
Release kind:          [stable | prerelease]
Latest flag:           [auto | mark-latest | do-not-mark-latest]
Notes source:          [docs/releases/{date}.md | generated]
Artifacts:             [optional files to attach]
```

Validate that notes source exists when a file path is provided.

## Step 3: Validate tag strategy

Check whether the tag already exists:

```bash
TAG="<tag>"
git rev-parse "$TAG" >/dev/null 2>&1 && echo "tag-exists" || echo "tag-missing"
```

Rules:

- If tag exists and points to unexpected commit: stop and escalate.
- If tag is missing, create annotated tag only when explicitly requested.
- Never retarget an existing release tag to a different commit.

Compare target commit with tag commit when tag exists:

```bash
TARGET_SHA=$(git rev-parse "<target>")
TAG_SHA=$(git rev-list -n 1 "$TAG")
if [ "$TARGET_SHA" != "$TAG_SHA" ]; then
  echo "ERROR: existing tag points to different commit"
  exit 1
fi
```

Tag creation example:

```bash
git tag -a "$TAG" -m "Release $TAG"
git push origin "$TAG"
```

## Step 4: Create or update release

Preferred flow with notes file:

```bash
gh release create "$TAG" \
  --title "<title>" \
  --notes-file "<notes-file>" \
  --target "<target>" \
  --draft
```

Publish directly (if requested):

```bash
gh release create "$TAG" \
  --title "<title>" \
  --notes-file "<notes-file>" \
  --target "<target>"
```

Pre-release mode:

```bash
gh release create "$TAG" \
  --title "<title>" \
  --notes-file "<notes-file>" \
  --target "<target>" \
  --prerelease
```

If notes file is unavailable and generated notes are approved:

```bash
gh release create "$TAG" \
  --title "<title>" \
  --generate-notes \
  --target "<target>" \
  --draft
```

If the release already exists, update it:

```bash
gh release edit "$TAG" \
  --title "<title>" \
  --notes-file "<notes-file>"
```

Optional latest behavior:

- `mark-latest`: include `--latest`
- `do-not-mark-latest`: include `--latest=false`

Optional artifact upload:

```bash
gh release upload "$TAG" <artifact-path> --clobber
```

When uploading binaries, attach checksums when available:

```bash
sha256sum <artifact-path> > <artifact-path>.sha256
gh release upload "$TAG" <artifact-path>.sha256 --clobber
```

## Step 5: Verify release state

Confirm final release metadata:

```bash
gh release view "$TAG" --json name,tagName,isDraft,isPrerelease,isLatest,url
```

Verify:

- tag is correct
- title is correct
- draft/published mode matches request
- prerelease/latest flags match request
- release URL is available

## Step 6: Report outcome

Report a concise summary:

```text
GitHub Release ready:
- Tag: <tag>
- Title: <title>
- Mode: <draft|published>
- URL: <release-url>
```

If blocked, report exact blocker and required user action.

## References

> Always use the official documentation for the gh CLI version in use — flags and subcommands are added and changed between releases.

- [gh release — GitHub CLI manual](https://cli.github.com/manual/gh_release)
- [GitHub Releases documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"gh-release","artifact_type":"skill","artifact_version":"20260502023","generator":"vstack","vstack_version":"3.5.1"} -->
