---
name: migrate
description: 'Database migration review and authoring. Covers forwards/backwards compatibility, zero-downtime strategies, rollback plans, data integrity, and index safety. Use when asked to "write a migration", "review this migration", "is this migration safe?", or "zero-downtime schema change". Proactively suggest before any DDL change ships to production.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[migration file or schema change to review]'
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

# migrate — Database Migration Review & Authoring

Review or write database migrations for safety, correctness, and zero-downtime
deployability. No migration ships without a rollback plan.

## Out of scope

- ORM model design (use `design`)
- Performance benchmarking of queries (use `performance`)
- Full security audit (use `security`)
- Architecture decisions (use `architecture` + `adr`)

**Golden rule: Every migration must be reversible or explicitly documented as
irreversible with a data-recovery plan.**

## Step 0: Understand the Change

Before reviewing or writing anything, gather context:

> **Question:** What schema change is needed and why?
>
> - What table(s) / collection(s) are affected?
> - Approximate row count and data size?
> - Is this service actively serving production traffic?
> - What deployment strategy is used (blue/green, rolling, big-bang)?
>   **Default:** Assume rolling deployment, production traffic, safety-first.

```bash
# Find existing migration files
find . -type f \( -name '*.sql' -o -name '*migration*' -o -name '*migrate*' \) \
  -not \( -path '*/.venv/*' -o -path '*/node_modules/*' -o -path '*/dist/*' -o -path '*/build/*' \) \
  2>/dev/null | sort | tail -20

# Show migration files changed in this branch
git diff <base> --stat -- '*.sql' '**migration**' '**migrate**' 2>/dev/null | head -20

# Check migration framework in use
[ -f alembic.ini ] && echo "alembic" || true
[ -f flyway.conf ] && echo "flyway" || true
grep -r "migrate\|liquibase\|goose\|dbmate" pyproject.toml package.json go.mod 2>/dev/null | head -5
```

Document:

```text
Framework:     [alembic | flyway | goose | dbmate | raw SQL | other]
Table:         [affected table(s)]
Row estimate:  [< 1k | 10k | 100k | 1M | 10M+ ]
Deployment:    [rolling | blue-green | big-bang | maintenance window]
Direction:     [new migration | review existing | both]
```

## Step 1: Classify the Migration

Classify every DDL operation by risk level:

| Operation                                | Risk            | Notes                              |
| ---------------------------------------- | --------------- | ---------------------------------- |
| `CREATE TABLE`                           | Low             | Safe at any time                   |
| `ADD COLUMN` nullable, no default        | Low             | Safe in rolling deploy             |
| `ADD COLUMN` with default (non-volatile) | Medium          | May lock on large tables           |
| `ADD COLUMN NOT NULL` without default    | **High**        | Breaks old app version             |
| `DROP COLUMN`                            | **High**        | Must remove all references first   |
| `RENAME COLUMN`                          | **High**        | Breaks old app version immediately |
| `ALTER COLUMN` type change               | **High**        | May require data rewrite           |
| `CREATE INDEX CONCURRENTLY`              | Low             | Safe, non-blocking                 |
| `CREATE INDEX` (without CONCURRENTLY)    | **High**        | Full table lock                    |
| `DROP INDEX`                             | Low             | Safe                               |
| `ADD CONSTRAINT`                         | **High**        | Validates all existing rows        |
| `TRUNCATE` / `DROP TABLE`                | **Destructive** | Requires explicit confirmation     |

Assign risk to each operation in the migration:

```text
Operations:
  1. [operation] — [Low | Medium | High | Destructive]
  2. ...
Overall risk: [Low | Medium | High | Destructive]
```

## Step 2: Zero-Downtime Analysis

**Rolling deployments require that the schema be compatible with BOTH the old and
new version of the application simultaneously.**

Check each operation:

- [ ] Old app version can read/write with the new schema
- [ ] New app version can read/write with the old schema (before migration runs)
- [ ] No `NOT NULL` columns added without a default or backfill step
- [ ] No column renames (use add → backfill → switch → drop in separate deploys)
- [ ] No type changes that are incompatible with existing data

**Expand/Contract pattern (required for breaking changes):**

```text
Phase 1 — Expand:   Add new column/table alongside old one
Phase 2 — Migrate:  Backfill data; dual-write in application
Phase 3 — Switch:   Application reads from new column
Phase 4 — Contract: Drop old column in a separate deploy
```

If the migration violates zero-downtime, flag it:

```text
⚠ ZERO-DOWNTIME VIOLATION
  Operation: [operation]
  Problem:   [what breaks]
  Fix:       [expand/contract steps or maintenance window required]
```

## Step 3: Rollback Plan

Every migration must have a defined rollback:

```sql
-- Forward migration
ALTER TABLE orders ADD COLUMN discount_cents INTEGER;

-- Rollback
ALTER TABLE orders DROP COLUMN discount_cents;
```

For destructive operations (DROP, TRUNCATE), rollback is not possible — document this explicitly:

```text
⚠ IRREVERSIBLE OPERATION
  Operation: DROP TABLE legacy_sessions
  Pre-condition: Confirm legacy_sessions is unused (grep all references)
  Backup required: Yes — take a snapshot before deploying
  Recovery: Restore from snapshot (RTO: [estimate])
```

## Step 4: Data Integrity

Check:

- [ ] Foreign key constraints are correct and indexed
- [ ] `NOT NULL` columns have sensible defaults for existing rows
- [ ] `UNIQUE` constraints won't fail on existing duplicates
- [ ] `CHECK` constraints won't reject existing data
- [ ] Enum additions are safe (additions OK; removals break existing data)
- [ ] Cascade behavior is intentional (`ON DELETE CASCADE` vs `RESTRICT`)

```sql
-- Before adding a NOT NULL column: verify no NULLs exist
SELECT COUNT(*) FROM table WHERE column IS NULL;

-- Before adding UNIQUE constraint: verify no duplicates
SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1;

-- Before adding CHECK constraint: verify no violations
SELECT COUNT(*) FROM table WHERE NOT (constraint_expression);
```

## Step 5: Index Safety

**Never create an index without `CONCURRENTLY` on a live table.**

```sql
-- BAD: acquires ACCESS EXCLUSIVE lock
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- GOOD: non-blocking, runs in background
CREATE INDEX CONCURRENTLY idx_orders_user_id ON orders(user_id);
```

Caveats for `CONCURRENTLY`:

- Cannot run inside a transaction block
- Takes longer to build
- May fail if the table is modified heavily during build

Check:

- [ ] All new indexes use `CONCURRENTLY` (unless in a migration transaction that can afford a lock)
- [ ] Composite index column order matches query patterns
- [ ] No redundant indexes (subset of existing composite index)
- [ ] Partial indexes considered for filtered queries

## Step 6: Performance on Large Tables

For tables with > 100k rows:

```bash
# Estimate table size
# PostgreSQL:
psql -c "SELECT pg_size_pretty(pg_total_relation_size('table_name'));" 2>/dev/null || true
# MySQL:
# SELECT table_name, ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
# FROM information_schema.TABLES WHERE table_schema = DATABASE();
```

For large tables, prefer:

- **Online DDL** (MySQL 8+, PostgreSQL with `CONCURRENTLY`)
- **Batched backfills** instead of single `UPDATE` statements
- **Maintenance window** for operations that cannot be made non-blocking

Batched backfill pattern:

```sql
-- Backfill in batches to avoid long-running locks
DO $$
DECLARE
  batch_size INT := 10000;
  offset_val INT := 0;
  rows_updated INT;
BEGIN
  LOOP
    UPDATE table SET new_col = <expr>
    WHERE id IN (
      SELECT id FROM table WHERE new_col IS NULL LIMIT batch_size
    );
    GET DIAGNOSTICS rows_updated = ROW_COUNT;
    EXIT WHEN rows_updated = 0;
    PERFORM pg_sleep(0.1); -- brief pause between batches
  END LOOP;
END $$;
```

## Step 7: Testing

```bash
# Run migration tests
# Framework-specific:
alembic upgrade head && alembic downgrade -1 2>/dev/null || true
flyway migrate && flyway undo 2>/dev/null || true

# Verify the schema matches models
# (adjust for your ORM)
python -c "from app.models import Base; Base.metadata.create_all(engine)" 2>/dev/null || true
```

Check:

- [ ] Migration applies cleanly on a fresh database
- [ ] Migration applies cleanly on a database with production-representative data
- [ ] Rollback/downgrade works cleanly
- [ ] Application tests pass with the new schema
- [ ] No model/schema drift detected

## Output

Produce a structured migration review:

```text
Migration Review
════════════════

File:          [migration filename]
Framework:     [framework]
Risk level:    [Low | Medium | High | Destructive]

Operations:
  1. [operation] — [risk] — [safe / unsafe for rolling deploy]
  2. ...

Zero-downtime: [SAFE | UNSAFE — reason]
Rollback:      [SQL rollback statement | IRREVERSIBLE — reason]

Issues found:
  🔴 CRITICAL: [issue + fix]
  🟡 WARNING:  [issue + recommendation]
  🟢 OK:       [what is correct]

Recommended migration:
  [corrected or approved SQL]

Pre-deploy checklist:
  [ ] Backup taken
  [ ] Migration tested on staging with production data volume
  [ ] Rollback script validated
  [ ] Feature flag in place (if needed for expand/contract)
  [ ] Monitoring alert set for migration duration
```

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"migrate","artifact_type":"skill","artifact_version":"20260421019","generator":"vstack","vstack_version":"3.5.1"} -->
