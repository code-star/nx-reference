# ADR-0002: Target stack — Nx 23, Angular 22, Storybook 10

> **date:** 2026-07-03\
> **status:** accepted

## context

The rebuild (ADR-0001) targets "latest". Verified latest published versions at decision time:
Nx `23.0.1`, `@nx/angular` `23.0.1`, `@angular/core` + `@angular/cli` `22.0.5`, `storybook` +
`@storybook/angular` `10.4.6`. Node 24 is installed locally. The legacy `@nrwl/*` package scope was
renamed to `@nx/*` in Nx 16+.

## decision

Adopt the following baseline:

| Concern | Target |
| --- | --- |
| Monorepo | Nx 23.0.1 (integrated), packages under `@nx/*` |
| Framework | Angular 22.0.5 (standalone + signals, see ADR-0006) |
| Storybook | 10.4.6, `@storybook/angular` (see ADR-0004) |
| Module Federation | Nx-native `@nx/module-federation` + `withModuleFederation` (see ADR-0003) |
| Unit tests | Jest for spec parity (see ADR-0005) |
| Language | TypeScript version pinned by Angular 22 peer range |
| Package manager | Yarn 1 (continuity with existing `yarn.lock` workflow) |
| npm scope | `star` (preserve `@star/*` import paths) |
| Docs for Storybook | Compodoc (`documentation.json`) if compatible with Angular 22 |

## alternatives considered

- **Angular 20/21 (older LTS):** not "latest"; rejected per goal.
- **pnpm / npm package manager:** viable and pnpm is fast, but Yarn 1 preserves the current
  contributor workflow and README commands with least churn. Revisit only if Yarn 1 blocks Nx 23.
- **Vitest as default runner:** newer Nx default, but Jest ports the existing specs with least
  friction (ADR-0005).

## rationale

- Using the exact latest majors satisfies the "newest method" objective and gives the longest support
  runway for a reference repo.
- Keeping scope `star` and Yarn 1 minimises churn to import paths and contributor docs while every
  other layer is modernised.

## consequences

- **Easier:** first-party Nx MF + Storybook 10 tooling; standalone/signals idioms.
- **Harder:** Angular 22 peer constraints may pin specific TypeScript/zone.js versions; compodoc and
  some Storybook addons must be re-validated for Angular 22 / Storybook 10 compatibility (tracked as
  open questions in the overview and ADR-0004).
- If Yarn 1 or Jest cause friction with Nx 23 / Angular 22, revisit via a follow-up ADR rather than
  ad-hoc changes.
