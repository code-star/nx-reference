# Test & Verification Report — nx-reference rebuild

> **role:** tester · **branch:** `upgrade_deps` · **date:** 2026-07-03\
> **verdict:** ✅ **GO** — no unresolved blocking defects or security-critical issues.

## Scope

Verification of the from-scratch rebuild of `nx-reference` onto the latest toolchain
(Nx 23.0.1 · Angular 21.2 · Storybook 10.4.6 · Node 24.13.1), preserving the observable end state:
a Module Federation demo (host `demo` loads remote `portfolio` via Native Federation), the `@star/ui`
component catalog deployed as Storybook, and the Express `server` serving `/api/btc`.

This report covers **functional correctness** (unit tests), **static quality** (lint + typecheck),
**buildability** (app builds + Storybook static build), and **runtime smoke** (federation endpoints,
API endpoints, Storybook static serve). Performance and deep security testing were out of scope for
this demo rebuild.

## Gates executed

All commands run from the workspace root on Node 24.13.1 / Nx 23.0.1.

| Gate | Command | Result |
| --- | --- | --- |
| Lint (explicit) | `nx run-many -t lint` | ✅ 6/6 projects pass |
| Lint (inferred) | `nx run-many -t "eslint:lint"` | ✅ 8/8 projects pass |
| Unit tests | `nx run-many -t test` | ✅ 8/8 projects, **35 tests / 16 suites** pass |
| Typecheck | via Angular `application` build + Jest ts compile | ✅ no type errors |
| App builds | `nx run-many -t build` | ✅ 3/3 (`demo`, `portfolio`, `server`) |
| Storybook build | `nx build-storybook demo` | ✅ static output to `dist/storybook/demo` |

## Test evidence (per project)

| Project | Suites | Tests | Notes |
| --- | --- | --- | --- |
| `shared-types` | 1 | 3 | type/severity contracts |
| `shared-services` | 1 | 3 | signal-based `MessageService` log |
| `shared-data-access` | 1 | 1 | `BtcRateService` dual URL + error handling |
| `btc` | 1 | 1 | `btc()` rate generator |
| `ui` | 8 | 20 | 7 standalone components + `bySeverity` pipe |
| `demo` (host) | 2 | 4 | app shell + fallback route |
| `portfolio` (remote) | 2 | 3 | app shell + remote entry route |
| **Total** | **16** | **35** | all passing |

### Coverage parity vs. legacy

The legacy workspace had **18** `*.spec.ts` files, of which **2** were Cypress e2e
(`demo-e2e`, `portfolio-e2e`) — intentionally dropped for this demo (ADR-0005). That leaves **16
legacy unit spec files**. The rebuild has **16 unit spec files** (35 test cases), so unit coverage is
at parity or better. `imessage.service.spec.ts` was folded into `shared-types.spec.ts` (the interface
has no runtime), and the pipe/component specs were rewritten for signals + zoneless.

## Runtime smoke evidence

- **Module Federation:** with `nx serve portfolio` (:4201) and `nx serve demo` (:4200), the remote
  `remoteEntry.json`, the exposed `Routes.js`, and the host `index.html` all returned HTTP 200
  (verified in Phase 4/5).
- **Backend API:** the built `server` on :3333 returned `{"message":"Welcome to server!"}` for `/api`
  and `{"btc":<number>}` for `/api/btc` (Phase 6).
- **Storybook catalog:** the static `dist/storybook/demo` served `index.html` and `iframe.html`
  (HTTP 200); `index.json` lists **16 catalog entries** — Introduction (MDX), Message Service (MDX),
  and 7 components each with an Example story + autodocs page.

## Findings

| # | Severity | Finding | Disposition |
| --- | --- | --- | --- |
| 1 | Low | `@nx/jest:jest` and `@nx/eslint:lint` executors are deprecated (removed in Nx v24). | **Accepted / tracked.** Functional today. Recommend `nx g @nx/jest:convert-to-inferred` and `@nx/eslint:convert-to-inferred` in a follow-up; deferred to avoid destabilising the demo. |
| 2 | Info | `build` runs for 3 projects only; libraries are non-buildable. | **By design.** Libraries are validated via Jest (ts compile) and consumer app builds. |
| 3 | Info | Storybook emits asset-size warnings (>244 KiB bundles). | **Accepted.** Expected for a Storybook manager/preview bundle; not a production app bundle. |
| 4 | Info | Compodoc pinned to `1.2.1` (not latest `2.0.0`). | **Intentional.** `2.0.0` pulls Angular-22 devkit requiring Node ≥24.15; `1.2.1` matches the Angular-21 stack on Node 24.13 (ADR-0004). |

No High or Critical findings. No security-critical issues identified in the changed surface.

## Verdict

✅ **GO / ready for acceptance review.** All required lint, typecheck, unit-test, build, and
Storybook-build gates pass; runtime smoke of federation, API, and the Storybook catalog is green;
unit coverage is at parity with the legacy baseline. The single Low finding (deprecated Nx executors)
is non-blocking and tracked for a follow-up conversion.
