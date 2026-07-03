# ADR-0003: Nx-native Module Federation method

> **date:** 2026-07-03\
> **status:** accepted

## context

The legacy repo wires Module Federation manually with the third-party
`@angular-architects/module-federation` plugin (hand-written `webpackHelper.js`,
`ModuleFederationPlugin`, `SharedMappings`). The goal is to demonstrate **the newest method Nx
provides** for Module Federation with Angular. Nx now ships first-party MF support: the
`@nx/angular:host` and `@nx/angular:remote` generators produce apps configured with
`withModuleFederation()` and a typed `module-federation.config.ts`, and Nx offers both a **webpack**
and a newer **Rspack** MF builder.

## decision

Use **Nx's first-party Module Federation generators and runtime helpers**:

- Scaffold the remote with `@nx/angular:remote` (name `portfolio`, port 4201) and the host with
  `@nx/angular:host` (name `demo`) consuming `portfolio`.
- Configure remotes/exposes via `module-federation.config.ts` + `withModuleFederation()` rather than a
  hand-written webpack helper.
- Preserve the topology: host `demo` lazy-loads remote `portfolio` at route `''`; dev remote on
  `localhost:4201`; the production remote URL is configurable to the GitHub Pages deployment.
- **Builder:** default to the **webpack** MF builder for maximum compatibility with Angular 22 and the
  Storybook Angular integration; evaluate the **Rspack** builder during the Phase 4 spike and adopt it
  if host+remote serve and build cleanly. Record the final choice as a follow-up note here.

## alternatives considered

- **Keep `@angular-architects/module-federation`:** not Nx-native; separate upgrade cadence; does not
  showcase "the newest method Nx provides". Rejected.
- **Hand-rolled `ModuleFederationPlugin` (as today):** verbose, brittle across versions, and not the
  recommended path. Rejected.
- **Rspack-only from the start:** newest and fastest, but higher risk against Angular 22 + compodoc +
  Storybook in one step. Deferred to a spike rather than a blind default.

## rationale

- First-party Nx MF is the idiomatic, documented, generator-supported path and directly satisfies the
  "newest Nx method" objective.
- Defaulting to webpack while spiking Rspack balances "newest" against the reference repo's need to
  actually build and deploy reliably.

## consequences

- **Easier:** typed MF config, Nx-managed shared deps and remote wiring, `nx serve` runs host+remote
  together.
- **Harder:** the standalone Angular MF pattern differs from the legacy `RemoteEntryModule` approach
  (exposes an entry route/component, not an NgModule) — the host route and remote `exposes` must be
  re-expressed. Storybook must remain independent of the MF remote (ADR-0004).
- Migration note (to update after Phase 4): **[builder chosen: webpack | rspack]** — record result.
