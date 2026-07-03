# ADR-0005: Testing strategy and coverage parity

> **date:** 2026-07-03\
> **status:** accepted

## context

The legacy repo uses Jest 27 (`jest-preset-angular`) for unit tests (~18 spec files) and Cypress 6
for e2e (`demo-e2e`, `portfolio-e2e`, `ui-e2e`). The rebuild goal is **minimal test coverage similar
to the current coverage**. Nx 23 supports both Jest and Vitest for Angular unit tests; Angular 22 also
has experimental Vitest support via `@angular/build`. The user asked for coverage parity, not a test
framework overhaul.

## decision

- **Unit tests: Jest**, targeting **parity with the current ~18 spec files** — one spec per UI
  component + pipe, per shared service, per app component, and the `btc` function. Tests assert the
  preserved behaviour/contracts (selectors, inputs, immutable log array, 1s-delay rate mapping, error
  logging, severity filtering).
- **e2e: treat Cypress as optional/minimal.** The demo's value is the MF + Storybook showcase; unit
  parity is the coverage target. Add at most a smoke e2e only if it is cheap and stable; otherwise
  omit to keep the reference small.
- Tests are authored/verified by the **tester role** in Phase 8, after implementation, and the verdict
  is recorded in `docs/reports/test-report.md`.

## alternatives considered

- **Vitest (newer Nx default):** modern and fast, but migrating the existing Jest specs adds churn
  without changing coverage. Chosen as a documented alternative, not the default. Revisit only if
  Angular 22 + Jest ESM/zone friction blocks the build.
- **Full Cypress e2e parity (3 e2e apps):** disproportionate for a small demo; higher flake and CI
  cost. Rejected in favour of unit parity + optional smoke.
- **No tests:** violates the parity requirement. Rejected.

## rationale

- Jest ports the existing specs with least friction and directly satisfies "similar coverage".
- Prioritising unit parity over e2e keeps the reference minimal while still proving behaviour.

## consequences

- **Easier:** existing spec intent transfers directly; fast local runs; green
  `nx run-many -t test`.
- **Harder:** Angular 22 + Jest may need `jest-preset-angular` config tuning (ESM, zone) — validated
  in Phase 2. If unresolved, Vitest is the pre-approved fallback (record here).
- e2e coverage is intentionally lighter than legacy; noted as accepted residual risk in the test
  report.
