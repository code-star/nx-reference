---
name: refactor
description: 'Structured refactoring for backend services, APIs, and libraries. Identifies code smells, plans incremental changes, executes without altering observable behavior, and verifies correctness. Use when asked to "refactor this", "clean up this module", "reduce duplication", or "improve structure without changing behavior". Never changes behavior — if behavior must change, stop and use the engineering role.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[module, file, or area to refactor]'
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

# refactor — Structured Refactoring

Improve the internal structure of code without changing its observable behavior.
Refactoring is not rewriting. Every step must leave tests green.

## Out of scope

- Fixing bugs (use `debug`)
- Adding features (engineering role)
- Performance optimizations that change behavior (use `performance`)
- Architecture redesign (use `architecture`)
- Security fixes (use `security`)

**Golden rule: If all tests pass before and after each step, the refactor is
correct. If behavior changes, stop — that is a feature or bug fix, not a refactor.**

## Step 0: Define the Scope

> **Question:** What needs refactoring and why?
>
> - Which file(s), module(s), or area(s)?
> - What is the motivation? (duplication, complexity, naming, coupling, size)
> - What must NOT change? (public API, behavior, performance characteristics)
>   **Default:** Identify smells in the specified area and propose a plan.

```bash
# Understand the current state
git log --oneline -10
git diff <base> --stat 2>/dev/null | head -20

# Find the files to refactor
# Read the area before touching anything
```

Document:

```text
Scope:       [file(s) or module(s)]
Motivation:  [duplication | complexity | naming | coupling | size | other]
Constraints: [what must not change]
```

## Step 1: Establish a Baseline

**Never start refactoring without a green test baseline.**

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

If tests are red before you start:

```text
⛔ STOP: Tests are failing before the refactor begins.
   Fix failing tests first, or confirm with the user that the failures are
   pre-existing and unrelated to this refactor scope.
```

Record the baseline:

```text
Baseline:
  Tests:    [N passed, N failed, N skipped]
  Coverage: [N%]
  Lint:     [clean | N warnings]
```

## Step 2: Identify Code Smells

Scan the target area for common smells:

```bash
# Long files
wc -l $(find . -name '*.py' -o -name '*.ts' -o -name '*.go' \
  2>/dev/null | grep -v node_modules | grep -v .venv) 2>/dev/null | sort -rn | head -20

# Duplicated patterns
grep -r -n "TODO\|FIXME\|HACK\|XXX" \
  --include='*.py' --include='*.ts' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=.git \
  . 2>/dev/null | head -20
```

| Smell                   | Description                           | Refactoring                 |
| ----------------------- | ------------------------------------- | --------------------------- |
| Long function           | > 30 lines, multiple responsibilities | Extract function            |
| Long file               | > 300 lines                           | Extract module              |
| Duplicate code          | Same logic in 2+ places               | Extract shared function     |
| Magic numbers/strings   | Unnamed literals                      | Named constant              |
| Deep nesting            | > 3 levels                            | Early return / guard clause |
| Long parameter list     | > 4 parameters                        | Parameter object            |
| Inappropriate naming    | Misleading or vague names             | Rename                      |
| Dead code               | Unused functions/variables            | Remove                      |
| Comment explaining code | Code needs a comment to be understood | Rewrite the code            |
| Mutable global state    | Module-level mutable variables        | Encapsulate                 |

Produce a prioritized smell list:

```text
Smells found:
  P1 (high impact): [smell] — [location]
  P2 (medium):      [smell] — [location]
  P3 (low):         [smell] — [location]
```

## Step 3: Plan the Refactoring

Break the refactoring into small, independent steps. Each step must:

1. Change exactly one thing
1. Leave tests green
1. Be reviewable in isolation

```text
Refactoring plan:
  Step 1: [specific change] — [file] — [smell addressed]
  Step 2: [specific change] — [file] — [smell addressed]
  Step 3: ...

Estimated scope: [N files, N functions]
Risk:            [Low | Medium — reason]
```

**Stop and confirm with user if:**

- The plan requires changing a public API or exported interface
- The plan requires changing database schema
- More than 10 files are affected

## Step 4: Execute — One Step at a Time

For each planned step:

1. Make the change
1. Run tests immediately
1. Confirm green before moving to the next step

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

### Common refactoring patterns

**Extract function (Python):**

```python
# Before
def process_order(order):
    # validate
    if not order.get("id"):
        raise ValueError("missing id")
    if order.get("amount", 0) <= 0:
        raise ValueError("amount must be positive")
    # process
    ...

# After
def _validate_order(order: dict) -> None:
    if not order.get("id"):
        raise ValueError("missing id")
    if order.get("amount", 0) <= 0:
        raise ValueError("amount must be positive")

def process_order(order: dict) -> None:
    _validate_order(order)
    ...
```

**Guard clause (replace nested conditionals):**

```python
# Before
def process(item):
    if item is not None:
        if item.active:
            if item.value > 0:
                return item.value * 2
    return None

# After
def process(item):
    if item is None:
        return None
    if not item.active:
        return None
    if item.value <= 0:
        return None
    return item.value * 2
```

**Named constant:**

```python
# Before
if status_code == 429:
    time.sleep(60)

# After
HTTP_TOO_MANY_REQUESTS = 429
RATE_LIMIT_BACKOFF_SECONDS = 60

if status_code == HTTP_TOO_MANY_REQUESTS:
    time.sleep(RATE_LIMIT_BACKOFF_SECONDS)
```

**Parameter object:**

```python
# Before
def create_user(name, email, role, department, manager_id, start_date):
    ...

# After
@dataclass
class CreateUserRequest:
    name: str
    email: str
    role: str
    department: str
    manager_id: str
    start_date: date

def create_user(request: CreateUserRequest) -> User:
    ...
```

## Step 5: Verify

After all steps are complete, run the full verification suite:

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

Check:

- [ ] All tests still pass (same count as baseline)
- [ ] Coverage has not dropped
- [ ] No new lint warnings introduced
- [ ] No public interfaces changed (unless explicitly in scope)
- [ ] No behavior changes (verify with diff)

```bash
# Review what changed
git diff --stat
git diff
```

## Output

```text
Refactoring Summary
═══════════════════

Scope:     [file(s) / module(s)]
Smells:    [N identified]
Steps:     [N completed]

Changes made:
  ✅ [Step 1 description] — [file]
  ✅ [Step 2 description] — [file]
  ...

Result:
  Tests:    [N passed — same as baseline]
  Coverage: [N% — unchanged or improved]
  Lint:     [clean]

Public API changed: No
Behavior changed:   No
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"refactor","artifact_type":"skill","artifact_version":"20260421023","generator":"vstack","vstack_version":"3.5.1"} -->
