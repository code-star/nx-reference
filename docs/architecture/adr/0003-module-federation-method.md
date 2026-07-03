# ADR-0003: Module Federation method — Native Federation (Nx-endorsed)

> **date:** 2026-07-03 (revised during Phase 4 implementation)\
> **status:** accepted (supersedes the initial webpack `@nx/angular:host/remote` decision)

## context

The legacy repo wires Module Federation manually with the third-party
`@angular-architects/module-federation` plugin (hand-written `webpackHelper.js`,
`ModuleFederationPlugin`, `SharedMappings`). The goal is to demonstrate **the newest method Nx
provides** for Module Federation with Angular.

During Phase 4 the `@nx/angular:remote` generator was run and reported, verbatim:

> `@nx/angular:remote` is deprecated. **Angular Module Federation in Nx is no longer supported. Use
> `@angular-architects/native-federation` instead.** See the v23 migration guide. **Removed in Nx v24.**

Investigation confirmed:

- Nx v23 replaced the v22 `host`/`remote` generators with a new **consumer/provider** surface
  (`@nx/react:consumer` / `@nx/react:provider`) that is **React-only** — there is no Angular
  equivalent.
- For **Angular**, Nx now documents and redirects to **Native Federation**
  (`@angular-architects/native-federation`), which builds on standards-based import maps and the
  Angular **esbuild `application` builder**.

So the webpack `withModuleFederation()` path is the *old, retiring* method (removed in Nx v24), not
the newest. The newest Nx-endorsed Angular MF method is **Native Federation**.

## decision

Use **Native Federation** via `@angular-architects/native-federation` (version `~21.2` to match the
Nx-pinned Angular 21.2), wired through Nx builders:

- Scaffold `portfolio` and `demo` as plain Angular applications with `@nx/angular:application`
  (esbuild `application` builder, standalone, zoneless).
- Initialise MF with `nx g @angular-architects/native-federation:init`:
  - remote: `--project=portfolio --type=remote --port=4201`
  - host: `--project=demo --type=dynamic-host --port=4200`
  - `--nxBuilders=true` (uses `@angular-architects/native-federation:build` / `:dev-server`).
- Configure `exposes` / `shared` in each project's generated `federation.config.js`; the remote
  exposes its entry route module (`./Routes`), consumed by the host via `loadRemoteModule`.
- Preserve the topology: host `demo` lazy-loads remote `portfolio` at route `''`; dev remote on
  `localhost:4201`; the production remote URL points at the GitHub Pages deployment via the host's
  `public/federation.manifest.json`.

## alternatives considered

- **`@nx/angular:host` / `:remote` (webpack `withModuleFederation`):** the previous Nx-native path.
  **Deprecated in v23, removed in v24, and Nx itself redirects away from it.** Choosing it would
  directly contradict the "newest method Nx provides" objective and create immediate upgrade debt.
  Rejected.
- **`@nx/react:consumer` / `:provider` (Vite/Rspack/Rsbuild):** the genuinely new v23 generators, but
  **React-only** — not applicable to an Angular workspace. N/A.
- **Keep `@angular-architects/module-federation` (legacy webpack):** not the newest method; same
  family being retired. Rejected.

## rationale

- Native Federation is the path Nx's own tooling redirects to for Angular in v23; it is therefore the
  newest method Nx provides for this stack.
- It is standards-based (import maps, ESM `remoteEntry.json`) and runs on the Angular esbuild
  `application` builder, aligning with the modern-Angular rewrite (standalone + signals + zoneless,
  ADR-0006).
- It avoids the v24 removal cliff that the webpack MF generators fall off.

## consequences

- **Easier:** future-proof (survives Nx v24), esbuild-fast builds, no hand-written webpack config,
  `nx serve demo` runs the dynamic host that pulls the remote from its manifest.
- **Different from legacy:** exposes an entry **route module** (not an `NgModule`); the host consumes
  it with `loadRemoteModule({ remoteName: 'portfolio', exposedModule: './Routes' })`; remotes are
  listed in `public/federation.manifest.json` rather than a webpack `remotes:` map.
- **Storybook stays independent of the remote** (ADR-0004): the catalog does not load the federated
  remote; a fallback message is shown where the remote would render.
- **Migration note (Phase 4 result):** builder = **Native Federation on the Angular esbuild
  `application` builder** (`@angular-architects/native-federation@21.2.5`). Webpack/Rspack MF builders
  are not used.
