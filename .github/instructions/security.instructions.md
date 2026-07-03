---
name: security
description: 'Security policy for all code, configuration, and infrastructure. Use when writing or reviewing any code, configuration, or workflow file.'
applyTo: '**/*'
---

Apply these security policies in this project.

## Secrets and credentials

1. Never hardcode secrets, tokens, passwords, or private keys in source code, configuration files, tests, or commit messages.
1. Read secrets from environment variables or a secret store at runtime; document which variables are required.
1. Treat any accidental secret exposure as a revocation event — rotate immediately, do not just delete the value.

## Input and trust boundaries

1. Validate and sanitize all input that crosses a trust boundary: HTTP requests, CLI arguments, environment variables, files, and inter-service messages.
1. Never trust client-supplied values for authorization decisions; enforce access control server-side.
1. Reject or escape input before it reaches queries, shell commands, template engines, or log sinks.

## Authentication and authorization

1. Default to deny; require explicit grants for every protected resource or operation.
1. Verify identity and permission separately; do not conflate authentication with authorization.
1. Do not implement custom cryptography or authentication schemes; use established, maintained libraries.

## Dependencies and supply chain

1. Pin dependency versions in manifests; do not use unbounded version ranges in production code.
1. Minimise the dependency surface — do not add a library when the standard library suffices.
1. Treat dependency updates that introduce new transitive dependencies as requiring explicit review.

## Error handling and observability

1. Never expose internal stack traces, system paths, or configuration details to external callers.
1. Do not log sensitive data: passwords, tokens, PII, or session identifiers.
1. Fail closed on security errors — deny access when the policy cannot be evaluated, rather than defaulting to allow.

## Destructive and privileged operations

1. Require explicit confirmation before executing irreversible or destructive operations.
1. Apply least privilege: request only the permissions a component actually needs.
1. Isolate privileged logic; keep it minimal, auditable, and separate from business logic.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"security","artifact_type":"instruction","artifact_version":"20260502003","generator":"vstack","vstack_version":"3.5.1"} -->
