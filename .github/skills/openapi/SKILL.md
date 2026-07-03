---
name: openapi
description: 'Write and review OpenAPI 3.1 specifications. Covers resource naming, HTTP method semantics, status codes, error conventions, pagination, versioning, security schemes, and schema validation. Use when asked to "write an OpenAPI spec", "review this API spec", "add an endpoint to the spec", or "validate this OpenAPI file".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[API or spec file to write or review]'
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

# openapi — OpenAPI 3.1 Specification

Write or review OpenAPI 3.1 specifications. The spec is the contract — it must
be precise, complete, and implementable without ambiguity.

## Out of scope

- Service architecture decisions (use `architecture`)
- Full API design from scratch (use `design`)
- Security audit of the implementation (use `security`)
- Contract compliance of the implementation (use `verify`)

**Golden rule: The spec is the source of truth. Code must conform to the spec,
not the other way around.**

## Step 0: Understand the Task

> **Question:** What needs to be done?
>
> **Options:**
> A) Write a new OpenAPI spec from scratch
> B) Review and improve an existing spec
> C) Add endpoints to an existing spec
> D) Validate spec for correctness and completeness
> **Default:** B — review existing spec

```bash
# Locate existing spec files
find . -name 'openapi*.yaml' -o -name 'openapi*.json' \
  -o -name 'swagger*.yaml' -o -name 'swagger*.json' \
  2>/dev/null | grep -v node_modules | grep -v .venv | head -10

# Validate spec if tooling is available
[ -f openapi.yaml ] && npx @redocly/cli lint openapi.yaml 2>/dev/null || true
[ -f openapi.yaml ] && npx swagger-cli validate openapi.yaml 2>/dev/null || true
```

## Part 1: Spec Structure

Every OpenAPI 3.1 spec must have:

```yaml
openapi: "3.1.0"

info:
  title: Service Name API
  version: "1.0.0"
  description: |
    One paragraph describing the service purpose.
  contact:
    name: Team Name
    email: team@example.com

servers:
  - url: https://api.example.com/v1
    description: Production
  - url: https://api.staging.example.com/v1
    description: Staging

tags:
  - name: users
    description: User management

paths: {}

components:
  schemas: {}
  securitySchemes: {}

security: []
```

Check:

- [ ] `openapi` field is `"3.1.0"` (not 3.0.x or 2.x)
- [ ] `info.version` follows semver
- [ ] At least one server defined
- [ ] Tags defined at root level and used consistently on operations
- [ ] `components` section exists for reusable schemas

## Part 2: Resource & Path Design

### Naming conventions

| Correct                    | Incorrect            | Rule                        |
| -------------------------- | -------------------- | --------------------------- |
| `/users`                   | `/getUsers`, `/user` | Plural nouns, no verbs      |
| `/users/{userId}`          | `/users/{id}`        | Descriptive path parameters |
| `/users/{userId}/orders`   | `/userOrders`        | Nested for ownership        |
| `/orders/{orderId}/cancel` | `/cancelOrder/{id}`  | Sub-resource for actions    |

### HTTP method semantics

| Method   | Semantics                       | Idempotent | Body |
| -------- | ------------------------------- | ---------- | ---- |
| `GET`    | Read, no side effects           | Yes        | No   |
| `POST`   | Create or non-idempotent action | No         | Yes  |
| `PUT`    | Full replace                    | Yes        | Yes  |
| `PATCH`  | Partial update                  | No         | Yes  |
| `DELETE` | Remove                          | Yes        | No   |

Check each path:

- [ ] Path uses plural noun, no verbs
- [ ] Path parameters are descriptive (`userId` not `id`)
- [ ] HTTP method matches semantics above
- [ ] `GET` operations have no request body
- [ ] `DELETE` operations return `204 No Content` or `200` with body, never `201`
- [ ] Every operation has a unique `operationId` (camelCase, e.g. `listUsers`, `createOrder`)
- [ ] Every operation has a `summary` (short title, ≤ 80 chars) and `tags`

## Part 3: Status Codes

Use exactly these status codes — no others unless justified:

| Code                        | Meaning                       | When to use                           |
| --------------------------- | ----------------------------- | ------------------------------------- |
| `200 OK`                    | Success with body             | `GET`, `PUT`, `PATCH` success         |
| `201 Created`               | Resource created              | `POST` creating a resource            |
| `202 Accepted`              | Accepted for async processing | Background jobs                       |
| `204 No Content`            | Success, no body              | `DELETE`, `POST` with no return       |
| `400 Bad Request`           | Validation error              | Invalid input                         |
| `401 Unauthorized`          | Not authenticated             | Missing/invalid token                 |
| `403 Forbidden`             | Not authorized                | Valid token, insufficient permissions |
| `404 Not Found`             | Resource missing              | ID doesn't exist                      |
| `409 Conflict`              | State conflict                | Duplicate create, optimistic lock     |
| `422 Unprocessable Entity`  | Semantic validation           | Business rule violation               |
| `429 Too Many Requests`     | Rate limited                  | Include `Retry-After` header          |
| `500 Internal Server Error` | Unexpected error              | Never expose internals                |

Check:

- [ ] Every operation documents all realistic status codes
- [ ] `200` vs `201` vs `204` used correctly
- [ ] `401` and `403` are distinct and documented
- [ ] `500` is documented but never includes stack traces

## Part 4: Error Response Schema

Every error response must use a consistent schema:

```yaml
components:
  schemas:
    Error:
      type: object
      required: [code, message]
      properties:
        code:
          type: string
          description: Machine-readable error code
          example: "VALIDATION_ERROR"
        message:
          type: string
          description: Human-readable description
          example: "email must be a valid email address"
        details:
          type: array
          description: Field-level validation errors
          items:
            type: object
            required: [field, message]
            properties:
              field:
                type: string
                example: "email"
              message:
                type: string
                example: "must be a valid email address"
        request_id:
          type: string
          description: Correlation ID for tracing
          example: "req_01HZ..."
```

Check:

- [ ] All `4xx` and `5xx` responses reference `$ref: '#/components/schemas/Error'`
- [ ] Error schema has a machine-readable `code` field
- [ ] `request_id` for correlation is present
- [ ] Field-level errors included for `400`/`422`

## Part 5: Pagination

Standard cursor-based pagination (preferred for large datasets):

```yaml
# Query parameters
parameters:
  - name: cursor
    in: query
    schema:
      type: string
    description: Opaque cursor from previous response
  - name: limit
    in: query
    schema:
      type: integer
      minimum: 1
      maximum: 100
      default: 20

# Response envelope
components:
  schemas:
    PaginatedUsers:
      type: object
      required: [data, pagination]
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/User'
        pagination:
          type: object
          required: [has_more]
          properties:
            has_more:
              type: boolean
            next_cursor:
              type: string
              nullable: true
            total:
              type: integer
              description: Total count (expensive — omit if not needed)
```

Check:

- [ ] Pagination is cursor-based (not offset for large collections)
- [ ] `limit` has a maximum and default
- [ ] Response includes `has_more` and `next_cursor`
- [ ] `total` is optional (expensive query — only include if needed)

## Part 6: Schema Quality

For each schema in `components/schemas`:

```yaml
components:
  schemas:
    User:
      type: object
      required: [id, email, created_at]    # ← explicit required list
      properties:
        id:
          type: string
          format: uuid
          readOnly: true                   # ← readOnly for server-generated fields
          example: "01HZ..."
        email:
          type: string
          format: email
          example: "user@example.com"
        name:
          type: string
          minLength: 1
          maxLength: 255
          example: "Alice"
        created_at:
          type: string
          format: date-time
          readOnly: true
          example: "2026-01-01T00:00:00Z"
```

Check:

- [ ] All schemas have a `required` list (no implicit optionals)
- [ ] `id`, `created_at`, `updated_at` are `readOnly: true`
- [ ] All string fields have `minLength`/`maxLength` where appropriate
- [ ] All fields have an `example`
- [ ] `format` used for `uuid`, `email`, `date-time`, `uri`
- [ ] No `type: object` without properties (use `additionalProperties` explicitly)
- [ ] No circular `$ref` without a nullable break

## Part 7: Security Schemes

```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    apiKey:
      type: apiKey
      in: header
      name: X-API-Key

security:
  - bearerAuth: []   # Global default
```

Override at operation level where needed:

```yaml
paths:
  /health:
    get:
      security: []   # Public endpoint — no auth required
```

Check:

- [ ] Security scheme is defined in `components.securitySchemes`
- [ ] Global `security` set at root level
- [ ] Public endpoints explicitly override with `security: []`
- [ ] OAuth2 scopes are defined if using OAuth
- [ ] No API keys in query parameters (use headers)

## Part 8: Versioning

URI versioning is the recommended approach:

```yaml
servers:
  - url: https://api.example.com/v1
```

Check:

- [ ] Version in server URL (`/v1`, `/v2`)
- [ ] No minor versions in URL (`/v1.1` is wrong — use headers for minor)
- [ ] Deprecated operations tagged with `deprecated: true`
- [ ] Deprecated operations have a `x-sunset` date

```yaml
/users/{userId}:
  get:
    deprecated: true
    x-sunset: "2027-01-01"
    description: "Deprecated. Use /v2/users/{userId} instead."
```

## Output

Produce a review report or the corrected spec:

**Review report format:**

```text
OpenAPI Spec Review
═══════════════════

Spec:    [filename]
Version: [openapi version]
Paths:   [count]
Schemas: [count]

Issues:
  🔴 CRITICAL: [issue] — [path/operation]
  🟡 WARNING:  [issue] — [path/operation]
  🟢 INFO:     [suggestion]

Summary: [N critical, N warnings, N info]
```

**If writing or correcting the spec:** produce the complete corrected YAML, using
`$ref` for all reusable schemas, and validate it passes linting.

## References

> Always use the official specification for the OpenAPI version in use — schema keywords, security scheme types, and JSON Schema dialect support differ between 3.0 and 3.1.

- [OpenAPI Specification 3.1](https://spec.openapis.org/oas/latest.html)
- [JSON Schema (2020-12)](https://json-schema.org/specification)
- [Redocly CLI (linting)](https://redocly.com/docs/cli/)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"openapi","artifact_type":"skill","artifact_version":"20260421021","generator":"vstack","vstack_version":"3.5.1"} -->
