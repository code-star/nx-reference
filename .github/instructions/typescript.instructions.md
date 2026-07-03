---
name: typescript
description: 'TypeScript coding conventions for projects. Use when writing or reviewing TypeScript or JavaScript modules, components, and package internals.'
applyTo: '**/*.{ts,tsx,js,jsx,mts,cts,mjs,cjs}'
---

Use these TypeScript conventions in this project.

## Type safety

1. Enable and respect strict mode; do not disable strictness per-file without a documented reason.
1. Avoid `any`; prefer `unknown` when the type is genuinely unknown and narrow it explicitly.
1. Prefer `interface` for object shapes that may be extended; use `type` for unions, intersections, and aliases.
1. Do not use type assertions (`as`) to silence type errors; fix the type instead.

## Design and readability

1. Prefer explicit, domain-meaningful names over abbreviations.
1. Keep functions focused; split functions that mix parsing, I/O, and business rules.
1. Prefer straightforward control flow over clever one-liners.
1. Use `const` by default; use `let` only when reassignment is required; never use `var`.

## Null and undefined

1. Prefer `undefined` over `null` for absent optional values unless an API contract requires `null`.
1. Use optional chaining (`?.`) and nullish coalescing (`??`) rather than manual null guards.
1. Do not suppress non-null assertions (`!`) unless the value is provably non-null and the reason is documented.

## Modules and imports

1. Use named exports by default; use default exports only when the module clearly has a single entry point.
1. Keep imports minimal and remove unused imports.
1. Avoid circular dependencies; if they appear, treat them as a structural design problem.

## Async and error handling

1. Prefer `async/await` over raw promise chains for readability.
1. Always handle or propagate rejected promises; never silently swallow errors.
1. Use typed error boundaries where the runtime supports them.

## Testing and verification

1. Add or update tests for every behavioral change.
1. Keep tests independent of implementation details; test observable behavior.
1. Cover success paths, edge cases, and expected failures.

## Tooling alignment

1. Keep code compatible with the repository's linting and type-checking configuration.
1. Do not suppress lint or type errors with inline disable comments unless there is a documented, task-specific reason.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"typescript","artifact_type":"instruction","artifact_version":"20260502005","generator":"vstack","vstack_version":"3.5.1"} -->
