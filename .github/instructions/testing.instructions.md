---
name: testing
description: 'Test authoring conventions for any language or framework. Use when writing or reviewing tests, test plans, or test coverage decisions.'
applyTo: '**/*'
---

Use these testing conventions in this project.

## Scope and intent

1. Write tests to verify observable behavior, not internal implementation details.
1. A test that passes when behavior is wrong, or fails when behavior is correct, has negative value.
1. Tests are documentation — a reader should understand what the system does by reading the test.

## Naming and structure

1. Name tests to describe what they verify: what the subject does, under what condition, and what the expected outcome is.
1. Keep each test focused on one behavior; avoid asserting unrelated outcomes in a single test.
1. Group related tests together; separate unrelated test concerns into distinct test units.

## Coverage and completeness

1. Cover the success path, expected failure paths, and boundary conditions for every behavioral change.
1. Treat missing tests for changed behavior as a defect — a change without tests is not complete.
1. Do not chase a coverage number; cover behaviors that matter rather than lines that exist.

## Test quality

1. Make tests deterministic — a test that passes or fails non-deterministically is unreliable and must be fixed.
1. Keep tests independent; no test should depend on execution order or shared mutable state.
1. Prefer clear, direct assertions over indirect checks; assert the outcome, not the path to it.
1. Avoid logic (loops, conditionals) in tests; if a test needs logic, split it into multiple focused tests.

## Test boundaries

1. Use unit tests for isolated logic; use integration tests when behavior crosses component or service boundaries.
1. Mock or stub only what is necessary to isolate the subject; avoid over-mocking that disconnects the test from real behavior.
1. Test contracts and interfaces, not just internal units — what the caller observes is what matters.

## Maintenance

1. Update tests in the same change as the behavior they cover.
1. Remove tests that no longer reflect real behavior rather than commenting them out.
1. Treat flaky tests as bugs; do not merge code with known test reliability issues.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"testing","artifact_type":"instruction","artifact_version":"20260502004","generator":"vstack","vstack_version":"3.5.1"} -->
