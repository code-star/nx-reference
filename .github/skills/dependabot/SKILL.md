---
name: dependabot
description: 'Create or optimize a Dependabot configuration file (.github/dependabot.yml). Covers dependency update strategies, grouping, monorepo patterns, security update configuration, schedule optimization, and PR customization. Use when asked to "set up Dependabot", "configure dependency updates", "add dependabot.yml", or "reduce Dependabot PR noise".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access. Dependabot requires GitHub repository access (public or private with GitHub Advanced Security for private).'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[repository type: library | service | monorepo, and ecosystems to cover]'
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

# dependabot — Dependabot Configuration

Create or optimize `.github/dependabot.yml` for automated dependency updates.
One file handles all ecosystems — GitHub does not support multiple `dependabot.yml`
files per repository.

## Out of scope

- Manual dependency upgrades (use `dependency`)
- Vulnerability triage in code (use `security`)
- CodeQL code scanning (use `codeql`)
- Secret scanning (use `secret-scan`)

## Step 0: Detect Ecosystems

```bash
# Find all manifest files to determine which ecosystems are present
ls pyproject.toml requirements*.txt setup.py Pipfile 2>/dev/null && echo "pip"
ls package.json package-lock.json yarn.lock pnpm-lock.yaml 2>/dev/null && echo "npm"
ls go.mod 2>/dev/null && echo "gomod"
ls Cargo.toml 2>/dev/null && echo "cargo"
ls pom.xml 2>/dev/null && echo "maven"
ls build.gradle build.gradle.kts 2>/dev/null && echo "gradle"
ls Gemfile 2>/dev/null && echo "bundler"
ls Dockerfile 2>/dev/null && echo "docker"
ls docker-compose*.yml 2>/dev/null && echo "docker-compose"
ls .github/workflows/*.yml 2>/dev/null && echo "github-actions"
ls *.tf 2>/dev/null && echo "terraform"
ls Chart.yaml 2>/dev/null && echo "helm"

# Check existing dependabot config
cat .github/dependabot.yml 2>/dev/null || echo "No dependabot.yml found"
```

## Step 1: Ecosystem Reference

| Ecosystem         | `package-ecosystem` | Manifest files                                                     |
| ----------------- | ------------------- | ------------------------------------------------------------------ |
| pip / poetry / uv | `pip`               | `pyproject.toml`, `requirements*.txt`, `Pipfile`                   |
| npm / pnpm / yarn | `npm`               | `package.json`, `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock` |
| Go                | `gomod`             | `go.mod`                                                           |
| Rust              | `cargo`             | `Cargo.toml`                                                       |
| Maven             | `maven`             | `pom.xml`                                                          |
| Gradle            | `gradle`            | `build.gradle`, `build.gradle.kts`                                 |
| Bundler           | `bundler`           | `Gemfile`                                                          |
| Docker            | `docker`            | `Dockerfile`                                                       |
| Docker Compose    | `docker-compose`    | `docker-compose*.yml`                                              |
| GitHub Actions    | `github-actions`    | `.github/workflows/*.yml`                                          |
| Terraform         | `terraform`         | `*.tf`                                                             |
| Helm              | `helm`              | `Chart.yaml`                                                       |
| NuGet             | `nuget`             | `*.csproj`, `packages.config`                                      |
| Pre-commit        | `pre-commit`        | `.pre-commit-config.yaml`                                          |

Note: pnpm and yarn both use `package-ecosystem: "npm"`.

## Step 2: Minimal Configuration

Every entry needs at minimum:

```yaml
version: 2

updates:
  - package-ecosystem: 'pip'
    directory: '/'
    schedule:
      interval: 'weekly'
```

Default schedule: weekly on Monday. Add `time` and `timezone` for
predictable windows:

```yaml
schedule:
  interval: 'weekly'
  day: 'monday'
  time: '09:00'
  timezone: 'Europe/Amsterdam'
```

## Step 3: Full Example (common stack)

```yaml
version: 2

updates:
  # Python dependencies
  - package-ecosystem: 'pip'
    directory: '/'
    schedule:
      interval: 'weekly'
      day: 'monday'
    groups:
      python-deps:
        dependency-type: 'production'
        update-types: ['minor', 'patch']
      python-dev-deps:
        dependency-type: 'development'
        update-types: ['minor', 'patch']
    commit-message:
      prefix: 'deps'
    labels:
      - 'dependencies'
      - 'python'

  # GitHub Actions
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'weekly'
    commit-message:
      prefix: 'ci'
    labels:
      - 'dependencies'
      - 'ci'
```

## Step 4: Grouping Strategies

Reduce PR noise by grouping related updates.

### By dependency type

```yaml
groups:
  dev-dependencies:
    dependency-type: 'development'
    update-types: ['minor', 'patch']
  production-dependencies:
    dependency-type: 'production'
    update-types: ['minor', 'patch']
```

### By name pattern

```yaml
groups:
  aws-sdk:
    patterns: ['boto3', 'botocore', 'aws-*']
    update-types: ['minor', 'patch']
  testing:
    patterns: ['pytest*', 'coverage*', 'mypy*']
```

### For security updates only

```yaml
groups:
  security-patches:
    applies-to: security-updates
    patterns: ['*']
    update-types: ['patch', 'minor']
```

**Rules:**

- Dependencies matching multiple groups go to the **first** match
- `applies-to` defaults to `version-updates` when absent
- Ungrouped dependencies get individual PRs

## Step 5: Monorepo Configuration

Use `directories` (plural) with glob patterns — `directory` (singular) does not support globs:

```yaml
- package-ecosystem: 'npm'
  directories:
    - '/'
    - '/apps/*'
    - '/packages/*'
  schedule:
    interval: 'weekly'
```

If a subdirectory has its own lockfile outside the workspace, add a separate
entry with `directory` pointing to that location.

## Step 6: Security Updates

Enable via repository **Settings → Advanced Security → Dependabot alerts and
security updates**.

To group security PRs:

```yaml
groups:
  security-patches:
    applies-to: security-updates
    patterns: ['*']
    update-types: ['patch', 'minor']
```

To disable version update PRs and keep only security updates:

```yaml
open-pull-requests-limit: 0
```

## Step 7: Ignore and Allow Rules

### Pin a dependency at its current version

```yaml
ignore:
  - dependency-name: 'django'
    versions: ['4.x', '5.x']
```

### Only update production dependencies

```yaml
allow:
  - dependency-type: 'production'
```

### Exclude vendor paths

```yaml
exclude-paths:
  - 'vendor/**'
  - 'test/fixtures/**'
```

## Step 8: Advanced Options

### Cooldown periods

```yaml
cooldown:
  default-days: 5
  semver-major-days: 30
  semver-minor-days: 7
```

### Versioning strategy

`auto` (default) increases the minimum for apps and widens ranges for libraries.
Use `lockfile-only` to update only lock files without touching manifests.
Use `increase-if-necessary` to change the range only when it excludes the new version.

### Private registries

```yaml
registries:
  pypi-private:
    type: python-index
    url: https://pypi.example.com
    token: ${{ secrets.PYPI_TOKEN }}

updates:
  - package-ecosystem: 'pip'
    directory: '/'
    registries:
      - pypi-private
```

## PR Comment Commands

| Comment                                 | Effect                    |
| --------------------------------------- | ------------------------- |
| `@dependabot rebase`                    | Rebase the PR             |
| `@dependabot recreate`                  | Recreate from scratch     |
| `@dependabot ignore this dependency`    | Close and never update    |
| `@dependabot ignore this major version` | Ignore this major version |
| `@dependabot ignore this minor version` | Ignore this minor version |
| `@dependabot ignore this patch version` | Ignore this patch version |

## Review checklist

- [ ] Every detected ecosystem has an entry
- [ ] `github-actions` ecosystem included to keep workflow action versions current
- [ ] Groups configured to reduce PR noise
- [ ] `commit-message.prefix` set per ecosystem for clear history
- [ ] `open-pull-requests-limit` appropriate for team capacity (default: 5)
- [ ] Security update grouping configured
- [ ] Monorepo: `directories` (plural) with globs if workspace spans subdirs
- [ ] Private registries use `${{ secrets.* }}` — never hardcoded tokens

## References

> Always use the official documentation for the exact version in use — supported ecosystems, grouping syntax, and available options expand with each release.

- [Dependabot configuration options](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [Supported package ecosystems](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems)
- [Dependabot security updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"dependabot","artifact_type":"skill","artifact_version":"20260502027","generator":"vstack","vstack_version":"3.5.1"} -->
