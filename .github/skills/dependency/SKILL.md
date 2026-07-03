---
name: dependency
description: 'Dependency health audit. Covers vulnerability scanning, outdated packages, licence compliance, transitive risk, pinning policy, and supply chain hygiene. Goes beyond the vulnerability gate in `security` — covers upgrade strategy, licence obligations, and long-term dependency health. Use when asked to "audit dependencies", "check for outdated packages", "licence compliance", "pin versions", or "dependency health check".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit web'
argument-hint: '[project or package manifest to audit]'
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

# dependency — Dependency Health Audit

Audit the health, security, and compliance of project dependencies. Covers
vulnerability scanning, outdated packages, licence obligations, transitive
risk, pinning policy, and supply chain hygiene.

## Scope vs related skills

- **This skill** — full dependency health: vulnerabilities, freshness, licences,
  pinning policy, supply chain
- **`security`** — includes a lightweight vulnerability gate as part of OWASP A06;
  for a full dependency audit use this skill instead
- **`verify`** — includes a quick vuln check in the quality gate loop; escalates
  to this skill for deeper investigation

**Golden rule: A dependency is owned code you didn't write. Treat it with the
same scrutiny as your own code.**

## Step 0: Detect the Stack

```bash
# Identify package manifests
ls pyproject.toml poetry.lock requirements*.txt \
   package.json package-lock.json yarn.lock pnpm-lock.yaml \
   go.mod go.sum Cargo.toml Cargo.lock \
   pom.xml build.gradle Gemfile Gemfile.lock 2>/dev/null

# Detect Python version and package manager
cat pyproject.toml 2>/dev/null | grep -E 'requires-python|tool\.poetry' | head -5
cat .python-version 2>/dev/null
which poetry && poetry --version 2>/dev/null || true
which pip-audit && pip-audit --version 2>/dev/null || true
```

Document:

```text
Stack:       [Python | Node | Go | Rust | Java | other]
Manager:     [Poetry | pip | npm | yarn | pnpm | cargo | go modules | other]
Manifests:   [list of files found]
Lock file:   [present | absent — flag if absent]
```

## Part 1: Vulnerability Scan

Run the appropriate scanner for each detected stack:

```bash
# Python — pip-audit (preferred) or safety
if [ -f pyproject.toml ] || [ -f requirements.txt ]; then
  pip-audit 2>/dev/null \
  || safety check --full-report 2>/dev/null \
  || echo "No Python vuln scanner found — install pip-audit: pip install pip-audit"
fi

# Node
[ -f package.json ] && npm audit --json 2>/dev/null | head -100

# Go
if [ -f go.mod ]; then
  govulncheck ./... 2>/dev/null \
    || echo "govulncheck not found — install: go install golang.org/x/vuln/cmd/govulncheck@latest"
fi

# Rust
if [ -f Cargo.toml ]; then
  cargo audit 2>/dev/null \
    || echo "cargo-audit not found — install: cargo install cargo-audit"
fi

# Java (Maven)
[ -f pom.xml ] && mvn dependency-check:check -q 2>/dev/null || true
```

Triage findings by severity:

```text
Vulnerabilities found:
  🔴 CRITICAL / HIGH: [package] [version] — [CVE] — [description]
  🟡 MEDIUM:          [package] [version] — [CVE] — [description]
  🟢 LOW / INFO:      [count] low-severity findings
```

**Remediation rule:** CRITICAL and HIGH must be resolved before release. MEDIUM
should be tracked and resolved within the sprint. LOW may be deferred with
documented rationale.

## Part 2: Outdated Packages

```bash
# Python (Poetry)
poetry show --outdated 2>/dev/null | head -40

# Python (pip)
pip list --outdated 2>/dev/null | head -40

# Node
npm outdated 2>/dev/null | head -40

# Go — check go.sum and go.mod for pinned versions
go list -m -u all 2>/dev/null | grep '\[' | head -30

# Rust
cargo outdated 2>/dev/null | head -30
```

Classify each outdated package:

| Package | Current | Latest | Type  | Action                    |
| ------- | ------- | ------ | ----- | ------------------------- |
| `foo`   | 1.2.0   | 1.2.5  | patch | update now                |
| `bar`   | 2.1.0   | 3.0.0  | major | evaluate breaking changes |
| `baz`   | 0.9.0   | 0.9.8  | patch | update now                |

**Update priority:**

- Patch updates: update immediately (no breaking changes expected)
- Minor updates: update soon (check changelog for deprecations)
- Major updates: plan upgrade (read migration guide, test thoroughly)

## Part 3: Licence Compliance

Check licence obligations for all direct and transitive dependencies:

```bash
# Python
if pip-licenses --version >/dev/null 2>&1; then
  pip-licenses --format=markdown --with-urls 2>/dev/null | head -60
elif python3 -m pip_licenses --help >/dev/null 2>&1; then
  python3 -m pip_licenses 2>/dev/null | head -60
else
  echo "Install pip-licenses: pip install pip-licenses"
fi

# Node
npx license-checker --summary 2>/dev/null | head -40

# Go
if go-licenses --help >/dev/null 2>&1; then
  go-licenses report ./... 2>/dev/null | head -40
else
  echo "Install go-licenses: go install github.com/google/go-licenses@latest"
fi
```

Classify licences by risk:

| Risk   | Licences                           | Requirement                                        |
| ------ | ---------------------------------- | -------------------------------------------------- |
| Low    | MIT, BSD-2, BSD-3, Apache-2.0, ISC | Can use freely, attribution in docs                |
| Medium | LGPL-2.1, LGPL-3.0                 | Dynamic linking OK; static linking requires review |
| High   | GPL-2.0, GPL-3.0, AGPL-3.0         | May require open-sourcing your code                |
| Review | Commercial, proprietary, unknown   | Requires legal review before use                   |

Flag any High or Review licences:

```text
Licence issues:
  🔴 [package] — [licence] — [risk] — [recommendation]
```

## Part 4: Pinning Policy

A healthy dependency policy requires reproducible builds:

**Check for lock files:**

- [ ] `poetry.lock` / `package-lock.json` / `yarn.lock` / `Cargo.lock` / `go.sum` exists
- [ ] Lock file is committed to version control
- [ ] Lock file is up to date with the manifest

**Check for version constraints:**

```bash
# Python — look for unpinned deps
cat pyproject.toml 2>/dev/null | grep -E '^\s+[a-z]' | grep -v '^#' | head -30

# Flag overly loose constraints (e.g. "*", ">=1.0" with no upper bound in prod deps)
```

| Pattern                     | Risk   | Recommendation                               |
| --------------------------- | ------ | -------------------------------------------- |
| `package = "*"`             | High   | Pin to a compatible range                    |
| `package = ">=1.0"`         | Medium | Add upper bound: `>=1.0,<3.0`                |
| `package = "^1.0"` (Poetry) | Low    | Acceptable for non-critical deps             |
| `package = "1.2.3"` (exact) | Low    | Fine for direct deps; brittle for transitive |
| No lock file                | High   | Add lock file and commit it                  |

## Part 5: Transitive Risk

Identify high-risk transitive (indirect) dependencies:

```bash
# Python — show full dependency tree
if poetry --version >/dev/null 2>&1; then
  poetry show --tree 2>/dev/null | head -60
else
  pip install pipdeptree 2>/dev/null && pipdeptree 2>/dev/null | head -60
fi

# Node
npm list --depth=2 2>/dev/null | head -60

# Go
go mod graph 2>/dev/null | head -40
```

Flags to look for:

- [ ] No single dependency with > 20 transitive deps (blast radius risk)
- [ ] No abandoned packages (last release > 2 years, no recent commits)
- [ ] No packages with a single maintainer for critical functionality
- [ ] Core dependencies have active security policies (CVE response time < 30 days)

```bash
# Check for abandoned packages — look at last release dates
# (manual step: check PyPI / npm registry for each critical dep)
```

## Part 6: Supply Chain Hygiene

```bash
# Python — check if packages are installed from PyPI or custom source
cat pyproject.toml 2>/dev/null | grep -E '\[\[tool\.poetry\.source\]\]' -A 5

# Node — check for private registry config
cat .npmrc 2>/dev/null
cat package.json 2>/dev/null | grep -E '"registry"'

# Check for dependency confusion risk (private package names published on public registry)
# (manual step: search PyPI/npm for any internal package names)
```

Check:

- [ ] All packages sourced from trusted, official registries
- [ ] No `--extra-index-url` pointing to untrusted sources (Python)
- [ ] Private package names are not also available on public registries (confusion attack)
- [ ] `pip install` / `npm install` output reviewed for unexpected packages
- [ ] CI pipeline pins the package manager version itself

## Output

```text
Dependency Audit Report
═══════════════════════

Stack:    [stack + manager]
Scanned:  [N direct, N transitive dependencies]

Vulnerabilities:
  🔴 Critical/High: [N] — [list or "none"]
  🟡 Medium:        [N] — [list or "none"]
  🟢 Low:           [N]

Outdated:
  Patch updates available:  [N packages]
  Minor updates available:  [N packages]
  Major updates available:  [N packages]

Licence issues:
  🔴 High-risk licences: [list or "none"]
  🟡 Review required:    [list or "none"]

Pinning:
  Lock file:     [present | absent]
  Loose pins:    [list or "none"]

Supply chain:
  [clean | issues found — details]

Action items (priority order):
  1. [action] — [package] — [severity]
  2. ...
```

## References

> Always use the official advisories and registry documentation for the ecosystems in use — vulnerability databases and package registry APIs are updated continuously.

- [GitHub Advisory Database](https://github.com/advisories)
- [OSV — Open Source Vulnerabilities](https://osv.dev/)
- [PyPI / npm / crates.io / Maven Central](https://pypi.org) (replace with the relevant registry)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"dependency","artifact_type":"skill","artifact_version":"20260421012","generator":"vstack","vstack_version":"3.5.1"} -->
