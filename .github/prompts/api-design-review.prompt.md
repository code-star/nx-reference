---
description: 'Review an API design or OpenAPI spec for correctness, completeness, and consistency.'
name: api-design-review
argument-hint: '[OpenAPI spec file, design doc, or endpoint scope]'
agent: designer
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---
Review the provided API design or OpenAPI specification for correctness, completeness, and consistency.

Focus on issues that affect consumers: breaking contracts, ambiguous semantics, missing error cases, and inconsistent conventions.
Do not focus on implementation details or tooling preferences.

Output exactly in this format:

## Contract Issues

List problems that would break or confuse consumers.

For each item:

- endpoint or field reference
- what the problem is in one sentence
- concrete fix

## Naming and Consistency

List naming violations, inconsistencies across endpoints, and deviations from REST conventions.

## Missing Error Cases

List expected error responses that are undocumented or missing status codes (400, 401, 403, 404, 409, 422, 500).

## Schema Completeness

List fields or objects that are missing required constraints, descriptions, or examples.

## Versioning and Compatibility

- versioning strategy present: yes | no | partial
- breaking changes relative to previous version: yes | no | unknown
- backward compatibility risk: low | medium | high

## Security Scheme Check

- authentication documented: yes | no
- authorization scopes documented where relevant: yes | no | partial
- sensitive fields handled appropriately: yes | no | partial

## Verdict

- approve | approve-with-conditions | reject
- top priority fix in one sentence

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"api-design-review","artifact_type":"prompt","artifact_version":"20260502006","generator":"vstack","vstack_version":"3.5.1"} -->
