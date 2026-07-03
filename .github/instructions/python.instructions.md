---
name: python
description: 'Python coding conventions for projects. Use when writing or reviewing Python modules, tests, CLI code, and package internals.'
applyTo: '**/*.py'
---
Use these Python conventions in this project.

## Design and readability

1. Prefer explicit, domain-meaningful names over abbreviations.
1. Keep functions focused; split functions that mix parsing, I/O, and business rules.
1. Prefer straightforward control flow over clever one-liners.
1. Raise precise exceptions with actionable error messages.

## Typing and APIs

1. Add type hints to public functions, methods, and module-level constants.
1. Keep public interfaces stable and backward compatible unless the task explicitly allows breaking changes.
1. Use dataclasses or TypedDict for structured data instead of untyped dicts when shape is known.

## Imports and dependencies

1. Group imports as standard library, third-party, and local modules.
1. Keep imports minimal and remove unused imports.
1. Avoid adding runtime dependencies unless there is a clear benefit over stdlib or existing project dependencies.

## Testing and verification

1. Add or update tests for every behavioral change.
1. Prefer focused unit tests first; add integration coverage when behavior crosses module boundaries.
1. Cover success paths, edge cases, and expected failures.

## I/O, paths, and safety

1. Prefer pathlib over string-based path manipulation.
1. Use context managers for files, sockets, and subprocess resources.
1. Never hardcode secrets or tokens in code or tests.

## Tooling alignment

1. Keep code compatible with repository linting and type-checking standards.
1. Do not silence lint/type errors unless there is a documented, task-specific reason.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"python","artifact_type":"instruction","artifact_version":"20260421002","generator":"vstack","vstack_version":"3.5.1"} -->
