---
name: explore
description: 'Repository and system discovery. Maps the architecture, understands the codebase, identifies technical debt, and produces a structured onboarding summary. Use at the start of any engagement with an unfamiliar codebase, when asked to "understand this codebase", "map the architecture", "explore the repo", or "what does this service do?".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search'
argument-hint: '[repository or system to explore]'
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

# explore — Codebase & Architecture Discovery

Map an unfamiliar codebase and produce a structured onboarding summary.
Report findings; do not change code.

## Out of scope

- Fixing issues found during exploration (use `debug` or `verify`)
- Architecture recommendations (use `architecture`)
- Performance analysis (use `performance` or `analyse`)

## Phase 1: Project Overview

```bash
# Identify project type and tech stack
ls -la
cat README.md 2>/dev/null | head -60 || cat README.rst 2>/dev/null | head -60 || true
cat package.json 2>/dev/null | python3 -c "import sys,json; d=json.load(sys.stdin); print('Name:', d.get('name'), '| Version:', d.get('version'), '| Main:', d.get('main',''))" 2>/dev/null || true
cat pyproject.toml 2>/dev/null | head -20 || true
cat go.mod 2>/dev/null | head -10 || true
cat Cargo.toml 2>/dev/null | head -10 || true
```

Record:

- **Project name and purpose**
- **Tech stack** (language, framework, runtime)
- **Project type** (API service, library, CLI, worker, monorepo)

## Phase 2: Directory Structure

```bash
# Top-level structure
find . -maxdepth 3 -not -path '*/node_modules/*' -not -path '*/.git/*' \
  -not -path '*/vendor/*' -not -path '*/__pycache__/*' -not -path '*/dist/*' \
  -not -path '*/.venv/*' | sort | head -80
```

Identify:

- Where source code lives (`src/`, `lib/`, `pkg/`, top-level)
- Where tests live (`test/`, `tests/`, `spec/`, `__tests__/`)
- Where configs live (`config/`, `.env*`, `*config.yaml`)
- CI/CD configuration (`.github/workflows/`, `.gitlab-ci.yml`, etc.)
- Infrastructure code (`k8s/`, `terraform/`, `docker-compose.yml`)

## Phase 3: Dependencies & External Services

```bash
# Dependency overview
cat package.json 2>/dev/null | python3 -c "
import sys, json
d = json.load(sys.stdin)
deps = {**d.get('dependencies',{}), **d.get('devDependencies',{})}
print('Dependencies:', len(deps))
for k,v in list(deps.items())[:20]: print(f'  {k}: {v}')
" 2>/dev/null || true

cat pyproject.toml 2>/dev/null | grep -A 20 '\[tool.poetry.dependencies\]' | head -25 || true
cat go.mod 2>/dev/null | grep -E '^require|^\t' | head -20 || true

# External services referenced
grep -r -E 'postgres|mysql|redis|mongodb|kafka|rabbitmq|elasticsearch|dynamodb|s3' \
  --include='*.ts' --include='*.py' --include='*.go' --include='*.yaml' --include='*.env*' \
  --exclude-dir=node_modules --exclude-dir=vendor . 2>/dev/null | grep -v test | head -20
```

## Phase 4: API & Service Contracts

```bash
# Check for API spec files
find . -name 'openapi*.yaml' -o -name 'openapi*.json' -o -name 'swagger*.yaml' \
  -o -name '*.proto' -o -name 'asyncapi*.yaml' 2>/dev/null | head -10

# Check for route definitions
grep -r -n '@app.route\|router\.\|@Get\|@Post\|path=' \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules . 2>/dev/null | head -30
```

## Phase 5: Test Infrastructure

```bash
# Detect test runner and run tests
if [ -f package.json ]; then
  if grep -q '"vitest"' package.json 2>/dev/null; then
    npx vitest run
  elif grep -q '"jest"' package.json 2>/dev/null; then
    npx jest
  elif grep -q '"bun"' package.json 2>/dev/null; then
    bun test
  else
    npm test
  fi
elif [ -f pyproject.toml ] || [ -f setup.py ]; then
  python -m pytest -v
elif [ -f go.mod ]; then
  go test ./...
elif [ -f Cargo.toml ]; then
  cargo test
else
  echo "No recognized test framework detected."
fi
```

```bash
# Test count and coverage setup
find . \( -name '*.test.*' -o -name '*_test.*' -o -name '*spec.*' \) \
  -not -path '*/node_modules/*' -not -path '*/.venv/*' 2>/dev/null | wc -l

# Coverage config
cat .nycrc 2>/dev/null || cat vitest.config.* 2>/dev/null | head -20 || \
  cat pytest.ini 2>/dev/null | head -20 || true
```

## Phase 6: CI/CD Pipeline

```bash
# CI config
ls .github/workflows/ 2>/dev/null | head -10
cat .github/workflows/*.yml 2>/dev/null | head -80 || true
cat .gitlab-ci.yml 2>/dev/null | head -60 || true
```

## Phase 7: Technical Debt & Health

```bash
# Check for TODO/FIXME/HACK comments
grep -r -n "TODO\|FIXME\|HACK\|XXX\|DEPRECATED\|BUG" \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules . 2>/dev/null | head -30

# Check for TODOS.md
cat TODOS.md 2>/dev/null | head -40 || true
```

## Discovery Report

Produce a structured summary:

```text
## Discovery Report — [project name] — [date]

### Overview
Purpose: [one paragraph]
Type:    [API service / library / CLI / worker / ...]
Stack:   [language, framework, runtime versions]

### Architecture
[Mermaid diagram of service topology or module structure when possible; ASCII fallback if needed]

### Data Stores

- [Database]: [what it stores, ORM/driver used]
- [Cache]: [what is cached, TTL strategy]

### Key External Dependencies

- [Service A]: [purpose, auth method]
- [Service B]: [purpose]

### API Surface

[Summarize endpoints or exported functions]

### Test Coverage

- Unit tests: [Y/N, count, coverage %]
- Integration tests: [Y/N]
- Contract tests: [Y/N]

### CI/CD

- CI: [GitHub Actions/GitLab CI/etc]
- Deploy target: [Fly.io/Render/K8s/etc]
- Release process: [manual/automated]

### Technical Debt

- [Key items from TODOS.md or code comments]

### Onboarding Notes

- How to run locally: [command]
- How to run tests: [command]
- Key config: [env vars]
- Gotchas: [anything that surprised me]

```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"explore","artifact_type":"skill","artifact_version":"20260421015","generator":"vstack","vstack_version":"3.5.1"} -->
