---
name: cicd
description: 'Write GitHub Actions CI/CD workflow configuration. Covers build, test, lint, security scan, container publish, and deployment trigger workflows. Use when asked to "write a CI pipeline", "set up GitHub Actions", "add a workflow", or "configure CD".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[service or workflow to configure]'
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

# cicd — GitHub Actions Workflows

Write CI/CD pipeline configuration as `.github/workflows/*.yml` files.
These files live in the PR — the pipeline runs after merge.

## Out of scope

- Application code changes (engineering role)
- Container image authoring (use `container`)
- Post-deploy monitoring (CI/CD's responsibility after merge)

## Step 1: Detect context

```bash
# Detect runtime and tooling
ls pyproject.toml requirements.txt package.json go.mod Cargo.toml 2>/dev/null | head -5

# Detect existing workflows
ls .github/workflows/ 2>/dev/null || echo "No workflows found"

# Detect container config
ls Dockerfile 2>/dev/null && echo "Dockerfile present"
```

## Step 2: CI workflow — `.github/workflows/ci.yml`

Runs on every push and PR. Must pass before merge.

```yaml
name: CI

on:
  push:
    branches: ["**"]
  pull_request:
    branches: [main]
  workflow_dispatch: {}

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v4

      # Language-specific setup — pick the applicable block:

      # Python
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - uses: actions/cache@v4
        with:
          path: ~/.cache/pip
          key: pip-${{ runner.os }}-${{ hashFiles('**/pyproject.toml', '**/requirements*.txt') }}
          restore-keys: pip-${{ runner.os }}-
      - run: pip install -e ".[dev]"
      - run: ruff check .
      - run: mypy .
      - run: pytest --tb=short

      # Node
      # - uses: actions/setup-node@v4
      #   with: { node-version: "22" }
      # - uses: actions/cache@v4
      #   with:
      #     path: ~/.npm
      #     key: npm-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
      # - run: npm ci
      # - run: npm run lint
      # - run: npm test

      # Go
      # - uses: actions/setup-go@v5
      #   with: { go-version: "1.22" }
      # - uses: actions/cache@v4
      #   with:
      #     path: ~/go/pkg/mod
      #     key: go-${{ runner.os }}-${{ hashFiles('**/go.sum') }}
      # - run: go vet ./...
      # - run: go test ./...
```

## Step 3: Security scan — add to CI or separate workflow

Add dependency and secret scanning:

```yaml
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # Dependency scan (pick one):
      # Python
      - run: pip install pip-audit && pip-audit

      # Node
      # - run: npm audit --audit-level=high

      # Secret scan
      - uses: trufflesecurity/trufflehog-actions-scan@v3
        with:
          path: ./
          base: ${{ github.event.repository.default_branch }}
```

## Step 4: CD workflow — `.github/workflows/cd.yml`

Runs on merge to main. Builds and publishes the container image, then triggers deployment.

```yaml
name: CD

on:
  push:
    branches: [main]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4

      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: |
            ghcr.io/${{ github.repository }}:latest
            ghcr.io/${{ github.repository }}:${{ github.sha }}
```

Adapt the deploy trigger to match the target platform (Fly.io, Render, Railway, K8s, etc.).

## Step 5: Branch protection (document, don't automate)

Record in `docs/architecture/overview.md` or a README section:

```text
Branch protection rules for `main`:
- Require PR before merging
- Require status checks: CI / test, CI / security
- Require at least 1 approval
- No force pushes
```

Configure these in GitHub → Settings → Branches.

## Step 6: Review checklist

- [ ] CI workflow triggers on push + PR + `workflow_dispatch`
- [ ] `concurrency` group set to cancel stale runs
- [ ] `timeout-minutes` set on each job
- [ ] `permissions: contents: read` on CI jobs (least privilege)
- [ ] Dependency cache configured for faster builds
- [ ] Lint, type-check, and tests all run in CI
- [ ] Security scan included with pinned action version (not `@main`)
- [ ] CD triggers only on merge to main
- [ ] No secrets hardcoded in workflow files — use `secrets.*`
- [ ] Container image tagged with both `latest` and `${{ github.sha }}`
- [ ] Workflows validate locally: `act` (optional, for local testing)

## References

> Always use the official documentation for the exact runner version and action versions in use — available runners, contexts, and action APIs change between GitHub updates.

- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [Workflow syntax reference](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
- [GitHub-hosted runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"cicd","artifact_type":"skill","artifact_version":"20260421006","generator":"vstack","vstack_version":"3.5.1"} -->
