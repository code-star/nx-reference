---
name: codeql
description: 'Set up and configure CodeQL code scanning via GitHub Actions or the CodeQL CLI. Covers workflow creation, language matrix, build modes, query suites, monorepo configuration, SARIF output, and alert triage. Use when asked to "set up CodeQL", "configure code scanning", "add a codeql workflow", or "scan for vulnerabilities with CodeQL".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution. GitHub Advanced Security or public repository required for alert upload.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit web'
argument-hint: '[languages and setup type: default or advanced]'
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

# codeql — CodeQL Code Scanning

Set up and configure CodeQL code scanning via GitHub Actions or the CodeQL CLI.
The output is a workflow file and/or a CodeQL configuration file.

## Out of scope

- General security audit (use `security`)
- Dependency vulnerability scanning (use `dependency` or `dependabot`)
- Secret scanning (use `secret-scan`)
- CI/CD pipeline design (use `cicd`)

## Step 0: Detect Context

```bash
# Detect existing CodeQL workflow
ls .github/workflows/codeql*.yml 2>/dev/null || echo "No CodeQL workflow found"

# Detect languages in repo
ls pyproject.toml requirements.txt setup.py 2>/dev/null && echo "Python"
ls package.json 2>/dev/null && echo "JavaScript/TypeScript"
ls go.mod 2>/dev/null && echo "Go"
ls pom.xml build.gradle 2>/dev/null && echo "Java/Kotlin"
ls Cargo.toml 2>/dev/null && echo "Rust"
ls *.csproj 2>/dev/null && echo "C#"
ls .github/workflows/*.yml 2>/dev/null && echo "GitHub Actions (workflows present)"
```

## Step 1: Choose Setup Type

| Setup type   | When to use                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Default**  | Enable from Settings → Advanced Security → Code scanning. Best for getting started — no workflow file needed.                |
| **Advanced** | Create `.github/workflows/codeql.yml` for full control over triggers, build modes, query suites, and monorepo configuration. |

To switch from default to advanced: disable default setup first, then commit the workflow.

## Step 2: Supported Languages

| Language              | Identifier              | Build mode              |
| --------------------- | ----------------------- | ----------------------- |
| Python                | `python`                | `none`                  |
| JavaScript/TypeScript | `javascript-typescript` | `none`                  |
| Go                    | `go`                    | `none` or `autobuild`   |
| Java/Kotlin           | `java-kotlin`           | `autobuild` or `manual` |
| C/C++                 | `c-cpp`                 | `autobuild` or `manual` |
| C#                    | `csharp`                | `autobuild` or `manual` |
| Rust                  | `rust`                  | `none`                  |
| Swift                 | `swift`                 | `autobuild` or `manual` |
| GitHub Actions        | `actions`               | `none`                  |

Build modes:

- `none` — no build required (safe default for interpreted languages)
- `autobuild` — automatic build detection
- `manual` — explicit build commands between `init` and `analyze` steps

## Step 3: Write the Workflow

Create `.github/workflows/codeql.yml`:

```yaml
name: CodeQL

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '30 6 * * 1'  # Weekly, Monday 06:30 UTC

jobs:
  analyze:
    name: Analyze (${{ matrix.language }})
    runs-on: ubuntu-latest
    timeout-minutes: 30
    permissions:
      security-events: write  # Required to upload SARIF results
      contents: read          # Required to check out code
      actions: read           # Required for private repos

    strategy:
      fail-fast: false
      matrix:
        include:
          # Add one entry per language detected in Step 0.
          # Examples:
          - language: python
            build-mode: none
          - language: javascript-typescript
            build-mode: none
          # Compiled language example:
          # - language: java-kotlin
          #   build-mode: autobuild

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v4
        with:
          languages: ${{ matrix.language }}
          build-mode: ${{ matrix.build-mode }}
          queries: security-extended
          dependency-caching: true

      # For manual build mode only — add build commands here:
      # - if: matrix.build-mode == 'manual'
      #   name: Build
      #   run: |
      #     make build

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v4
        with:
          category: "/language:${{ matrix.language }}"
```

**Query suite options:**

| Suite                   | Coverage                                                   |
| ----------------------- | ---------------------------------------------------------- |
| `security-extended`     | Default security queries + additional checks (recommended) |
| `security-and-quality`  | Security + code quality queries (larger, slower)           |
| `security-experimental` | Experimental queries (higher false-positive rate)          |

## Step 4: Monorepo and Path Configuration (optional)

To restrict analysis to specific paths, create `.github/codeql/codeql-config.yml`:

```yaml
paths:
  - src/
  - apps/
paths-ignore:
  - '**/test/**'
  - '**/node_modules/**'
  - '**/vendor/**'
```

Reference it in the workflow:

```yaml
- uses: github/codeql-action/init@v4
  with:
    config-file: .github/codeql/codeql-config.yml
```

For monorepos with per-component results:

```yaml
category: "/language:${{ matrix.language }}/component:backend"
```

To skip documentation-only PRs:

```yaml
on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - 'docs/**'
```

## Step 5: Alert Triage

Alerts appear in the repository Security tab after the first scan.

**Severity levels:**

- Security severity: `Critical`, `High`, `Medium`, `Low` (from CVSS score)
- Standard severity: `Error`, `Warning`, `Note`

**Review policy:**

- Fix all `Critical` and `High` findings before merging
- Dismiss false positives with a documented reason (creates an audit trail)
- Copilot Autofix generates fix suggestions automatically for CodeQL alerts in PRs — review carefully before accepting

## Step 6: CodeQL CLI (local scanning)

```bash
# Create database (after adding codeql binary to PATH)
codeql database create codeql-db --language=python --source-root=src

# Analyze
codeql database analyze codeql-db \
  python-security-extended.qls --format=sarif-latest --output=results.sarif

# Upload to GitHub
GITHUB_TOKEN=<token> codeql github upload-results \
  --repository=<owner/repo> --ref=refs/heads/main --commit=<sha> --sarif=results.sarif
```

## Review checklist

- [ ] One matrix entry per detected language
- [ ] `permissions: security-events: write` set on the job
- [ ] `queries: security-extended` (or stronger)
- [ ] `dependency-caching: true` on `init` step
- [ ] `timeout-minutes` set on job
- [ ] Weekly `schedule` trigger set for the default branch
- [ ] Compiled language build mode confirmed (`autobuild` or `manual`)
- [ ] `paths-ignore` excludes documentation-only PRs if useful
- [ ] Actions pinned to `@v4` (not floating `@main`)

## References

> Always use the official documentation for the exact version in use — action versions, query suites, and language identifiers change between releases.

- [CodeQL documentation](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)
- [github/codeql-action releases](https://github.com/github/codeql-action/releases)
- [Supported languages and frameworks](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/codeql-code-scanning-for-compiled-languages)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"codeql","artifact_type":"skill","artifact_version":"20260502026","generator":"vstack","vstack_version":"3.5.1"} -->
