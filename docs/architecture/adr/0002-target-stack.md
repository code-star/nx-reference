# ADR-0002: Target stack — Nx 23, Angular 21.2 (Nx-aligned), Storybook 10

> **date:** 2026-07-03\
> **status:** accepted (amended 2026-07-03 after toolchain verification)

## context

The rebuild (ADR-0001) targets "latest". Verified latest published versions at decision time:
Nx `23.0.1`, `@nx/angular` `23.0.1`, `@angular/core` + `@angular/cli` `22.0.5`, `storybook` +
`@storybook/angular` `10.4.6`. Node 24 is installed locally.

**Key compatibility constraint discovered during Phase 1:** `@nx/angular@23.0.1` pins
`angularVersion = '~21.2.0'` (`node_modules/@nx/angular/.../utils/versions.js`). The latest Nx line
(23) targets **Angular 21.2**, not the standalone Angular 22.0.5 release. Nx's Angular executors,
schematics, and — critically — the **native Module Federation generators** (the "newest Nx MF method",
ADR-0003) are built against Angular 21.2. Forcing Angular 22 into Nx 23 would break those generators
and executors, defeating the primary objective.

## decision

Adopt the following baseline. **Angular tracks the latest version supported by the latest Nx (21.2),**
because the project goal is Nx-native Module Federation and Nx-hosted Storybook — Nx compatibility wins
over using a newer, unsupported Angular major.

| Concern            | Target                                                                       |
| ------------------ | ---------------------------------------------------------------------------- |
| Monorepo           | Nx 23.0.1 (integrated), packages under `@nx/*`                               |
| Framework          | Angular ~21.2.0 (latest Nx 23-supported; standalone + signals, see ADR-0006) |
| Storybook          | 10.x via `@nx/storybook` + `@storybook/angular` (see ADR-0004)               |
| Module Federation  | Nx-native `@nx/module-federation` + `withModuleFederation` (see ADR-0003)    |
| Unit tests         | Jest for spec parity (see ADR-0005)                                          |
| Language           | TypeScript 5.9.x (installed by `@nx/angular` init)                           |
| Package manager    | Yarn 1 (continuity with existing `yarn.lock` workflow)                       |
| npm scope          | `@star` (preserve `@star/*` import paths via `--importPath`)                 |
| Docs for Storybook | Compodoc (`documentation.json`) if compatible with Angular 21                |

## alternatives considered

- **Angular 22.0.5 (newest standalone release) on Nx 23:** rejected — `@nx/angular@23` supports Angular
  21.2; its MF generators and build executors would not work reliably with Angular 22. This directly
  conflicts with ADR-0003 (use Nx's newest MF method). Revisit if/when a future Nx minor adds Angular
  22 support (then `nx migrate` bumps both together).
- **Angular 22 without Nx executors (pure Angular CLI + manual MF):** abandons Nx-native MF and
  Nx-hosted Storybook — contradicts the whole goal. Rejected.
- **pnpm / npm package manager:** viable, but Yarn 1 preserves the current contributor workflow and
  README commands with least churn. Revisit only if Yarn 1 blocks Nx 23.
- **Vitest as default runner:** newer Nx default, but Jest ports the existing specs with least
  friction (ADR-0005).

## rationale

- The stated objective is "latest **Nx**" + "newest method **Nx provides** for module federation" +
  "hosted as a **Storybook** app". All three are Nx-mediated, so the binding constraint is the Nx
  release, and Angular must be the version that Nx release supports (21.2).
- Angular 21.2 already provides every modern idiom the rebuild relies on — standalone components,
  signal inputs (`input()`), `inject()`, built-in control flow (`@if`/`@for`/`@switch`),
  `provideHttpClient`/`provideRouter` — so ADR-0006 ("latest Angular way of working") is fully met.
- Keeping scope `@star` and Yarn 1 minimises churn to import paths and contributor docs while every
  other layer is modernised.

## consequences

- **Easier:** first-party Nx MF + Nx Storybook tooling work out of the box; standalone/signals idioms
  are available; `nx migrate` will later bump Angular + Nx together in lockstep.
- **Harder / accepted:** the workspace is on Angular 21.2 rather than the absolute-newest 22.0.5. This
  is a deliberate, documented trade-off in favour of a working Nx-native toolchain. Compodoc and some
  Storybook addons must still be re-validated for Angular 21 / Storybook 10 (open questions in the
  overview and ADR-0004).
- If Yarn 1 or Jest cause friction with Nx 23 / Angular 21, revisit via a follow-up ADR rather than
  ad-hoc changes.
