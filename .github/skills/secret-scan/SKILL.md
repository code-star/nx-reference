---
name: secret-scan
description: 'Configure and manage GitHub secret scanning and push protection. Covers enabling secret scanning, push protection, custom patterns, alert triage, and remediation of exposed credentials. Use when asked to "set up secret scanning", "configure push protection", "define custom secret patterns", "triage a secret alert", or "fix a leaked credential".'
license: 'MIT'
compatibility: 'Requires repository access and GitHub Advanced Security (private repos) or public repository. Alert management requires gh CLI authentication.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit web'
argument-hint: '[scope: enable | configure push-protection | custom-pattern | triage alerts | remediate]'
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

# secret-scan — GitHub Secret Scanning & Push Protection

Configure secret scanning and push protection to prevent credential exposure.

**Golden rule: Rotate first, investigate second.** A leaked credential is
compromised the moment it enters the repository. Rotation is non-negotiable —
then determine scope and remove from history.

## Out of scope

- CodeQL code scanning (use `codeql`)
- Dependency vulnerability scanning (use `dependabot` or `dependency`)
- General security audit (use `security`)

## Availability

| Repository type              | Availability                                        |
| ---------------------------- | --------------------------------------------------- |
| Public repos                 | Automatic, free                                     |
| Private/internal (org-owned) | Requires GitHub Secret Protection (Team/Enterprise) |

## Step 1: Enable Secret Scanning

Navigate to repository **Settings → Advanced Security → Secret Protection → Enable**.

For organizations, configure at scale via **Settings → Advanced Security → Security configurations**.

Also enable:

- **Push protection** — blocks secrets before they reach the repository
- **Non-provider patterns** — detects private keys, connection strings, generic API keys
- **AI detection** — Copilot-assisted detection of unstructured secrets (passwords)
- **Validity checks** — verifies if detected secrets are still active

## Step 2: Configure Path Exclusions

Create `.github/secret_scanning.yml` to auto-close alerts for known-safe paths:

```yaml
paths-ignore:
  - "docs/examples/**"       # Example/demo credentials
  - "test/fixtures/**"       # Test fixture files
  - "**/*.example"           # Template files with placeholder values
```

**Limits:** 1,000 entries maximum, file under 1 MB.

**Best practices:**

- Be as specific as possible — broad exclusions create blind spots
- Add comments explaining why each path is excluded
- Review exclusions periodically; remove stale entries
- Excluded paths also skip push protection checks

## Step 3: Scan for Existing Secrets Locally

Before enabling, scan the existing codebase:

```bash
# Scan for common secret patterns
grep -r -E \
  '(password|secret|api_key|private_key|token|access_key|client_secret)\s*[=:]\s*["\x27][^"\x27]{8,}' \
  --include='*.py' --include='*.ts' --include='*.js' --include='*.go' \
  --include='*.yaml' --include='*.env' --include='*.json' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=vendor \
  --exclude-dir=.git --exclude-dir=dist --exclude-dir=build \
  . 2>/dev/null | grep -v test | grep -v example | head -30

# Check git history for secrets (high-value branches)
git log --all --oneline | head -20
```

## Step 4: Triage Alerts

```bash
# List open secret scanning alerts via gh CLI
gh api "repos/$(gh repo view --json nameWithOwner --jq '.nameWithOwner')/secret-scanning/alerts" \
  --jq '.[] | {number, state, secret_type, created_at, html_url}'
```

**Alert types:**

| Type                          | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| Provider alerts               | Detected by GitHub's partner program (high confidence) |
| Non-provider / generic alerts | Private keys, connection strings, generic patterns     |
| Push protection alerts        | Secrets pushed via a bypass                            |

**Alert validity status:**

- `active` — credential is confirmed live → **rotate immediately**
- `inactive` — credential is confirmed revoked
- `unknown` — validity could not be determined

## Step 5: Remediate an Exposed Secret

### Step A: Rotate the credential (do this first)

1. Log in to the service where the credential was issued
1. Revoke the exposed credential
1. Issue a new credential
1. Update all places that use the old credential (environment variables, secret stores, `.env` files, CI/CD secrets)

### Step B: Remove from latest commit (if recent)

```bash
# Edit the file to remove the secret, then:
git add <file>
git commit --amend
git push --force-with-lease
```

### Step C: Remove from history (if in earlier commits)

```bash
# Find the earliest commit containing the secret
git log --all -S "<partial-secret-value>" --oneline

# Remove via interactive rebase
git rebase -i <COMMIT-SHA>~1
# Change 'pick' to 'edit' for the offending commit
# Remove the secret from the file, then:
git add <file>
git commit --amend
git rebase --continue
git push --force-with-lease
```

> Force-pushing rewrites history — coordinate with the team and merge any
> open PRs first to avoid losing work.

### Step D: Dismiss the alert

After rotation and removal, dismiss with the appropriate reason:

- **Revoked** — credential has been rotated
- **False positive** — detected string is not a real secret
- **Used in tests** — secret appears only in test code with no real access

## Step 6: Resolve a Blocked Push

When push protection blocks a push, you will see a URL in the error:

### Option A: Remove the secret and retry (preferred)

```bash
# Edit the file to remove the secret
git add <file>
git commit --amend
git push
```

### Option B: Bypass (only for confirmed false positives or test data)

1. Visit the URL from the push error message (same user session)
1. Select a reason: "It's a false positive" or "It's used in tests"
1. Click "Allow me to push this secret" — bypass window is 3 hours
1. Re-push the commits

### Option C: Request bypass (if delegated bypass is configured)

1. Visit the URL from the error
1. Add a comment explaining why the secret is safe
1. Submit the request — wait for approval notification

## Step 7: Custom Secret Patterns

Define organization-specific patterns when built-in patterns don't cover internal
credential formats.

**Via GitHub UI:**

1. Settings → Advanced Security → Custom patterns → New pattern
1. Enter pattern name and regex
1. Add a sample test string
1. Click "Save and dry run" — review results for false positives (up to 1,000)
1. Click "Publish pattern"
1. Optionally enable push protection for the pattern

**Regex guidelines:**

- Anchor to known prefixes/suffixes where possible: `myapp_[a-zA-Z0-9]{32}`
- Test against real examples and known non-secret strings
- Avoid overly broad patterns (high false-positive rate reduces signal-to-noise)
- Scopes: repository, organization, or enterprise level

## Review checklist

- [ ] Secret scanning enabled on all repositories (or via org security configuration)
- [ ] Push protection enabled
- [ ] `.github/secret_scanning.yml` excludes only known-safe paths with comments
- [ ] All `active` alerts rotated and dismissed
- [ ] Git history cleaned if secret was committed (and pushed)
- [ ] All dependent services updated with new credentials
- [ ] Non-provider pattern scanning enabled for internal credential formats
- [ ] Custom patterns defined for any organization-specific credential formats
- [ ] Secrets stored in environment variables or a secret store — never in source code

## References

> Always use the official documentation for the exact version in use — supported secret patterns and push protection rules are updated regularly.

- [GitHub secret scanning documentation](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)
- [Push protection](https://docs.github.com/en/code-security/secret-scanning/protecting-pushes-with-secret-scanning)
- [Supported secret patterns](https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"secret-scan","artifact_type":"skill","artifact_version":"20260502028","generator":"vstack","vstack_version":"3.5.1"} -->
