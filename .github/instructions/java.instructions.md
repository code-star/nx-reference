---
name: java
description: 'Java coding conventions for projects. Use when writing or reviewing Java source files, tests, and build configuration.'
applyTo: '**/*.java'
---
Use these Java conventions in this project.

## Design and readability

1. Prefer explicit, domain-meaningful names over abbreviations; follow standard Java naming conventions.
1. Keep methods focused; split methods that mix parsing, I/O, and business rules.
1. Prefer immutable objects; make fields `final` by default and expose mutation only where required.
1. Prefer straightforward control flow over clever one-liners.

## Types and APIs

1. Keep public APIs minimal and stable; mark implementation details `package-private` or `private`.
1. Program to interfaces, not implementations, for dependencies that may change.
1. Use records for simple value types where the Java version supports them.
1. Prefer `Optional` as a return type for values that may be absent; do not use it for fields or parameters.

## Null safety

1. Annotate method parameters and return types with `@NonNull` or `@Nullable` where nullability is meaningful.
1. Never return `null` from a public method that could return `Optional` instead.
1. Fail fast on unexpected nulls at system boundaries using explicit precondition checks.

## Exception handling

1. Use checked exceptions only for conditions the caller can reasonably recover from.
1. Prefer unchecked exceptions for programming errors and unrecoverable states.
1. Never swallow exceptions silently; log or rethrow with meaningful context.
1. Close resources with try-with-resources rather than manual `finally` blocks.

## Concurrency

1. Prefer high-level concurrency abstractions (`ExecutorService`, `CompletableFuture`) over raw threads.
1. Minimize shared mutable state; document thread-safety guarantees explicitly.
1. Do not use `synchronized` on publicly visible objects unless the locking strategy is documented.

## Dependencies and imports

1. Keep imports minimal; remove unused imports.
1. Avoid wildcard imports (`import foo.*`) in production code.
1. Do not add a library dependency when the standard library suffices.

## Testing and verification

1. Add or update tests for every behavioral change.
1. Keep unit tests independent of implementation details; test observable behavior.
1. Cover success paths, edge cases, and expected failures.

## Tooling alignment

1. Keep code compatible with the repository's checkstyle, PMD, or linting configuration.
1. Do not suppress static analysis warnings without a documented, task-specific reason.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"java","artifact_type":"instruction","artifact_version":"20260502001","generator":"vstack","vstack_version":"3.5.1"} -->
