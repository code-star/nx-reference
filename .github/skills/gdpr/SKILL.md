---
name: gdpr
description: 'GDPR-compliant engineering practices for APIs, data models, authentication flows, logging, retention, erasure, and infrastructure. Covers privacy by design, data minimization, storage limitation, lawful basis, user rights (access, erasure, portability), encryption, pseudonymization, and PR review checklists. Use when asked to "GDPR review", "is this GDPR-compliant?", "privacy by design", "data retention policy", "right to erasure", or "DPIA". Proactively suggest before any feature that handles personal data.'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[component or feature: data model | API | logging | retention | erasure | infra | PR review]'
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

# gdpr — GDPR-Compliant Engineering

Actionable GDPR reference for engineers, architects, and tech leads working with
personal data. Based on GDPR Articles 5, 25, 32, 33, 35 and CNIL developer
guidance.

> **Golden Rule:** Collect less. Store less. Expose less. Retain less.
> Every byte of personal data you do not collect is a byte you cannot lose,
> cannot breach, and cannot be held liable for.

## Out of scope

- General security audit (use `security`)
- STRIDE threat modeling (use `threat-model`)
- Dependency vulnerability scanning (use `dependency`)

## Glossary

| Term     | Meaning                                                                   |
| -------- | ------------------------------------------------------------------------- |
| **RoPA** | Record of Processing Activities — maintained by the controller            |
| **DPIA** | Data Protection Impact Assessment — required for high-risk processing     |
| **DPA**  | Data Processing Agreement — required with every sub-processor             |
| **DSR**  | Data Subject Request — access, erasure, portability, rectification        |
| **DEK**  | Data Encryption Key — used for column-level encryption                    |
| **KMS**  | Key Management Service — e.g. AWS Secrets Manager, Azure Key Vault, Vault |

## Step 1: Core Principles (Article 5)

| Principle                          | Engineering obligation                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| Lawfulness, fairness, transparency | Document legal basis for every processing activity in the RoPA                              |
| Purpose limitation                 | Data collected for purpose A **must not** be reused for purpose B without a new legal basis |
| Data minimization                  | Collect only fields with a documented business need                                         |
| Accuracy                           | Provide update endpoints; propagate corrections to downstream stores                        |
| Storage limitation                 | Define TTL at schema design time — never after                                              |
| Integrity & confidentiality        | Encrypt at rest and in transit; restrict and audit access                                   |
| Accountability                     | Maintain evidence of compliance; RoPA ready for DPA inspection at any time                  |

## Step 2: Privacy by Design & by Default

**MUST:**

- Add `created_at`, `retention_expires_at` to every table holding personal data
- Default all optional data collection to **off** — users opt in, never opt out
- Conduct a **DPIA** before building high-risk processing (biometrics, health data, large-scale profiling, systematic monitoring)
- Update the **RoPA** with every new feature that introduces a processing activity
- Sign a **DPA** with every sub-processor before data flows to them

**MUST NOT:**

- Ship a new data collection feature without a documented legal basis
- Enable analytics, tracking, or telemetry by default without explicit consent
- Store personal data in a system not listed in the RoPA

## Step 3: Data Minimization

**MUST:**

- Map every DTO/model field to a concrete business need; remove undocumented fields
- Use separate DTOs for create, read, and update operations
- Return only what the caller is authorized to see — use response projections
- Mask sensitive values at the edge: return `****1234` for card numbers, never the full value
- Exclude sensitive fields (DOB, national ID, health) from default list/search projections

**MUST NOT:**

- Log full request/response bodies if they may contain personal data
- Include personal data in URL path segments or query parameters (appears in CDN logs and browser history)
- Collect `date_of_birth`, national ID, or health data without an explicit legal basis

## Step 4: Storage Limitation & Retention

Every table holding personal data **must** have a defined retention period.

| Data type                 | Max retention                                  |
| ------------------------- | ---------------------------------------------- |
| Auth / audit logs         | 12–24 months                                   |
| Session / refresh tokens  | 30–90 days                                     |
| Email / notification logs | 6 months                                       |
| Inactive user accounts    | 12 months after last login → notify → delete   |
| Payment records           | As required by tax law (7–10 years), minimized |
| Analytics events          | 13 months                                      |

**MUST:**

- Enforce retention automatically via a scheduled job or TTL policy — never a manual process
- Anonymize or delete data when retention expires
- Add `retention_expires_at` column — compute at insert time
- Use soft-delete (`deleted_at`) with a scheduled hard-delete after the erasure request window (30 days)

**MUST NOT:**

- Retain personal data indefinitely "in case it becomes useful later"

## Step 5: API Design

**MUST:**

- Never include personal data in URL paths or query parameters
- Authenticate all endpoints that return or accept personal data
- Extract acting user identity from the JWT — never from the request body
- Validate ownership on every resource: return 403 if `resource.owner_id != current_user_id`
- Use UUIDs or opaque identifiers — never sequential integers as public resource IDs
- Rate-limit sensitive endpoints (login, data export, password reset)

**MUST NOT:**

- Return stack traces, internal paths, or database errors in API responses
- Use `Access-Control-Allow-Origin: *` on authenticated APIs

## Step 6: Logging

**MUST:**

- Anonymize IPs in application logs — mask last octet (IPv4) or last 80 bits (IPv6)
- Enforce log retention — purge automatically after the defined period
- Log events, not data: `"user {id} updated email"` not `"email changed from a@b.com"`

**MUST NOT log:**

- Passwords, tokens, session IDs, credentials, card numbers, national IDs, health data
- Full request/response bodies where PII may be present

## Step 7: Encryption

| Scope                                         | Minimum standard                                   |
| --------------------------------------------- | -------------------------------------------------- |
| Standard personal data                        | AES-256 disk/volume encryption                     |
| Sensitive data (health, financial, biometric) | AES-256 column-level + envelope encryption via KMS |
| In transit                                    | TLS 1.2+ (prefer 1.3); HSTS enforced               |
| Keys                                          | HSM-backed KMS; rotate DEKs annually               |

**Password hashing:** Use **Argon2id** (recommended) or **bcrypt** (cost ≥ 12).
Never MD5, SHA-1, or SHA-256 for passwords.

**MUST NOT:** Allow TLS 1.0/1.1, null cipher suites, or hardcoded encryption keys.

## Step 8: Secrets Management

- Store all secrets in a KMS: AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, or HashiCorp Vault
- Use pre-commit hooks (`gitleaks`, `detect-secrets`) to prevent secret commits
- Rotate secrets on developer offboarding, annual schedule, or suspected compromise

`.gitignore` must include: `.env`, `.env.*`, `*.pem`, `*.key`, `*.pfx`, `*.p12`, `secrets/`

## Step 9: Anonymization & Pseudonymization

- **Anonymization** = irreversible → falls outside GDPR scope; use for retained records after erasure
- **Pseudonymization** = reversible with a key → still personal data, but reduced risk
- When erasing a user, anonymize records that must be retained (financial, audit) rather than deleting them
- Store the pseudonymization key in the KMS — never in the same database as the pseudonymized data

**MUST NOT** call data "anonymized" if re-identification is possible through linkage attacks.

## Step 10: Testing with Fake Data

**MUST NOT:**

- Use production personal data in dev, staging, or CI environments
- Restore production DB backups to non-production without scrubbing PII first

Use synthetic data generators: `Faker` (Python/JS/Ruby), `factory_boy` (Python).
Use `@example.com` for all test email addresses.

## PR Review Checklist

### Data model

- [ ] Every new PII column has a documented purpose and retention period
- [ ] Sensitive fields (health, financial, national ID) use column-level encryption
- [ ] No sequential integer PKs as public-facing identifiers

### API

- [ ] No PII in URL paths or query parameters
- [ ] All endpoints returning personal data are authenticated
- [ ] Ownership checks present — users cannot access other users' resources
- [ ] Rate limiting applied to sensitive endpoints

### Logging

- [ ] No passwords, tokens, or credentials logged
- [ ] IPs anonymized (last octet masked)
- [ ] No full request/response bodies logged where PII may be present

### Infrastructure

- [ ] No public storage buckets or public-IP databases
- [ ] Encryption at rest enabled for new storage resources
- [ ] New geographic regions for data storage are EEA-compliant or covered by SCCs

### Retention & erasure

- [ ] Retention enforcement covers new data store or field
- [ ] Erasure pipeline updated to cover new data store

### User rights & governance

- [ ] Data export endpoint includes any new personal data field
- [ ] RoPA updated if a new processing activity is introduced
- [ ] New sub-processors have a signed DPA and a RoPA entry
- [ ] DPIA triggered if the change involves high-risk processing

## References

> GDPR is a legal instrument — always consult the authoritative text and current DPA guidance rather than summaries.

- [GDPR full text (EUR-Lex)](https://eur-lex.europa.eu/eli/reg/2016/679)
- [CNIL developer guide (privacy by design)](https://www.cnil.fr/en/cnil-publishes-gdpr-guide-developers)
- [EDPB guidelines](https://www.edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"gdpr","artifact_type":"skill","artifact_version":"20260502029","generator":"vstack","vstack_version":"3.5.1"} -->
