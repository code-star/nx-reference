---
name: security
description: 'OWASP Top 10 + STRIDE security audit for APIs, services, and libraries. Finds authentication bypasses, injection vulnerabilities, insecure configurations, exposed secrets, dependency vulnerabilities, and broken access control. Use when asked to "security audit", "security review", or "check for vulnerabilities". Proactively suggest before any code ships to production.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[component or service to audit]'
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

# security — Security Audit (OWASP Top 10 + STRIDE)

Perform a systematic security audit. No finding is too small. Report every issue
with severity, evidence, and specific remediation.

## Out of scope

- Full code review for non-security issues (use `code-review`)
- Performance analysis (use `performance`)
- Architecture design (use `architecture`)
- Writing new features (engineering role)

## Deliverable and artifact policy

- Primary deliverable: `docs/reports/security-report.md`
- Baseline-first default: write final findings directly to `docs/reports/security-report.md` on the feature branch.
- Before merge: consolidate severity-ranked findings and mitigations into baseline security reports.

## Audit Scope

Parse the user's request for scope:

- **Full audit:** All code in the repository
- **Diff audit:** Only changes since base branch (default on feature branches)
- **Dependency audit:** Only dependency vulnerabilities
- **Config audit:** Only infrastructure and configuration

```bash
# Detect scope
CURRENT=$(git branch --show-current)
git diff <base> --stat 2>/dev/null | head -20 || true
```

## Part 1: OWASP Top 10

### A01: Broken Access Control

```bash
# Look for authorization checks
grep -r -n "is_admin\|hasRole\|checkPermission\|authorize\|can(" \
  --include='*.ts' --include='*.py' --include='*.go' --include='*.java' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | head -30

# Look for endpoints missing auth
grep -r -n "@app.route\|router\.\|@Get\|@Post\|@Put\|@Delete\|@Patch" \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | head -30
```

Check:

- [ ] Every endpoint checks authentication AND authorization
- [ ] Authorization is per-resource, not just per-role
- [ ] No direct object reference without ownership check (IDOR)
- [ ] Admin endpoints protected by privilege check, not just auth
- [ ] JWT/token claims validated (expiry, issuer, audience)

### A02: Cryptographic Failures

```bash
# Find hardcoded secrets
grep -r -E '(password|secret|api_key|private_key|token)\s*[=:]\s*["\x27][^"\x27]{8,}' \
  --include='*.ts' --include='*.py' --include='*.go' --include='*.yaml' --include='*.env' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor --exclude-dir=.git . 2>/dev/null | grep -v test | grep -v example

# Find weak crypto
grep -r -n "MD5\|SHA1\|DES\|RC4\|Math.random\|random.random" \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | head -20
```

Check:

- [ ] No secrets in source code (use secret manager)
- [ ] Passwords hashed with bcrypt/argon2/scrypt (not MD5/SHA1)
- [ ] TLS enforced for all network communication
- [ ] Cryptographic random for security-sensitive values
- [ ] Sensitive data encrypted at rest

### A03: Injection

```bash
# SQL injection risk
grep -r -n 'query\|execute\|raw\|f"' \
  --include='*.py' --include='*.ts' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | grep -E '"SELECT|"INSERT|"UPDATE|"DELETE|f".*sql' | head -20

# Command injection risk
grep -r -n 'exec\|subprocess\|shell=True\|execSync\|spawnSync' \
  --include='*.py' --include='*.ts' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | head -20
```

Check:

- [ ] All database queries use parameterized queries / ORM
- [ ] No string concatenation in SQL
- [ ] System commands use argument arrays, not shell strings
- [ ] Template engines auto-escape output

### A04: Insecure Design

- [ ] Threat model exists for the system?
- [ ] No security through obscurity
- [ ] Principle of least privilege in service-to-service auth
- [ ] Defense in depth — multiple layers, not single gate

### A05: Security Misconfiguration

```bash
# Check for debug/development modes
grep -r -n 'DEBUG\s*=\s*True\|debug:\s*true\|development\|NODE_ENV' \
  --include='*.py' --include='*.ts' --include='*.yaml' --include='*.json' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | grep -v test | head -20

# Check for permissive CORS
grep -r -n 'cors\|CORS\|Access-Control-Allow-Origin' \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | head -20
```

Check:

- [ ] Debug mode disabled in production
- [ ] CORS restricted to known origins (not `*`)
- [ ] Error messages don't leak internal details
- [ ] Security headers set (HSTS, CSP, X-Frame-Options if applicable)
- [ ] Unnecessary features/endpoints disabled in production

### A06: Vulnerable and Outdated Components

```bash
# Dependency vulnerability scan
[ -f package.json ]   && npm audit 2>/dev/null || true
[ -f pyproject.toml ] && pip-audit 2>/dev/null || safety check 2>/dev/null || true
[ -f go.mod ]         && govulncheck ./... 2>/dev/null || true
[ -f Cargo.toml ]     && cargo audit 2>/dev/null || true
[ -f pom.xml ]        && mvn dependency-check:check 2>/dev/null || true
```

### A07: Identification and Authentication Failures

```bash
# Check session/token implementation
grep -r -n 'jwt\|JWT\|session\|cookie\|token' \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | grep -i 'expire\|expiry\|secret\|key' | head -20
```

Check:

- [ ] Token expiry enforced
- [ ] Refresh token rotation implemented
- [ ] Logout invalidates tokens server-side
- [ ] Password reset tokens single-use and time-limited
- [ ] Multi-factor authentication for privileged operations (if applicable)

### A08: Software and Data Integrity Failures

```bash
# Check for unsigned dependencies
cat package-lock.json 2>/dev/null | python3 -c "import sys,json; d=json.load(sys.stdin); print('Integrity checks:', sum(1 for v in d.get('packages',{}).values() if v.get('integrity')))" 2>/dev/null || true
```

Check:

- [ ] Dependencies pinned to specific versions with integrity hashes
- [ ] CI/CD pipeline integrity (no untrusted actions/orbs)
- [ ] Artifacts signed before distribution

### A09: Security Logging and Monitoring Failures

```bash
grep -r -n 'audit\|security_log\|auth.*log\|access.*log' \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | head -20
```

Check:

- [ ] Authentication events logged (success and failure)
- [ ] Authorization failure logged with user ID and resource
- [ ] Suspicious patterns produce alerts
- [ ] Logs protected from tampering
- [ ] PII not logged

### A10: Server-Side Request Forgery (SSRF)

```bash
grep -r -n 'fetch\|requests\.\|http\.get\|axios\|urllib' \
  --include='*.ts' --include='*.py' --include='*.go' \
  --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=venv --exclude-dir=env --exclude-dir=__pycache__ --exclude-dir=dist --exclude-dir=build --exclude-dir=vendor . 2>/dev/null | grep -v test | head -20
```

Check:

- [ ] URLs from user input are validated against allowlist
- [ ] Private network ranges blocked (169.254.0.0/16, 10.0.0.0/8, etc.)
- [ ] SSRF protection on any URL-fetching functionality

## Part 2: STRIDE Threat Model

For each new service/component, answer:

| Threat                     | Question                                                  | Mitigation in place? |
| -------------------------- | --------------------------------------------------------- | -------------------- |
| **Spoofing**               | Can an attacker impersonate a legitimate user or service? |                      |
| **Tampering**              | Can an attacker modify data in transit or at rest?        |                      |
| **Repudiation**            | Can actions be denied without audit trail?                |                      |
| **Information Disclosure** | What sensitive data could leak?                           |                      |
| **Denial of Service**      | Can the service be made unavailable? Rate limiting?       |                      |
| **Elevation of Privilege** | Can a user gain admin access through normal flows?        |                      |

## Audit Report

```text
## Security Audit Report — [service/repo] — [date]
Scope: [full/diff/dependency/config]

### Critical Findings (immediate fix required)
1. [Category] `path/to/file:line` — [Issue]
   Evidence: [code snippet or behavior]
   Remediation: [specific fix]
   CVSS: [if applicable]

### High Findings (fix before shipping)
...

### Medium Findings (fix in near-term)
...

### Low / Informational
...

### OWASP Coverage
[X/10 categories checked, N issues found]

### Dependency Vulnerabilities
[X critical, Y high, Z medium]

### Recommendation
[SHIP-READY / FIX CRITICALS / SECURITY REVIEW REQUIRED]
```

## References

> OWASP Top 10 and STRIDE are living documents — always refer to the current edition.

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [STRIDE threat modeling (Microsoft)](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"security","artifact_type":"skill","artifact_version":"20260421025","generator":"vstack","vstack_version":"3.5.1"} -->
