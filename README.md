# Nx Atomic Design Reference Project

A reference monorepo demonstrating **Module Federation in Nx with Angular**, plus a custom
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) UI component library
**published as a deployed [Storybook](https://storybook.js.org) catalog**.

Made by [Codestar](https://code-star.github.io).

For a component tour see the [Storybook Intro](https://code-star.github.io/nx-reference/storybook/?path=/docs/introduction--docs).

> **Rebuilt on the latest toolchain** — Nx 23 · Angular 21 (standalone + signals + zoneless) ·
> Storybook 10 · Native Federation. The full rationale and audit trail live under [`docs/`](./docs).
> Start with the [architecture overview](./docs/architecture/overview.md) and the
> [ADRs](./docs/architecture/adr).

## Stack

| Tool              | Version                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Nx                | 23                                                                                                                                             |
| Angular           | 21.2 (standalone, `input()` signals, `@if`/`@for`, zoneless)                                                                                   |
| Module Federation | [`@angular-architects/native-federation`](https://www.npmjs.com/package/@angular-architects/native-federation) (esbuild `application` builder) |
| Storybook         | 10 (`@storybook/angular`, compodoc docs)                                                                                                       |
| Backend           | Express 5                                                                                                                                      |
| Test runner       | Jest                                                                                                                                           |
| Node              | 24                                                                                                                                             |

## Workspace layout

```text
apps/
  demo/        # Module Federation HOST (Angular) + hosts the deployable Storybook catalog
  portfolio/   # Module Federation REMOTE (Angular) — exposes ./Routes
  server/      # Express backend — GET /api/btc
libs/
  ui/                    # @star/ui — standalone Atomic Design components + bySeverity pipe
  shared/types/          # @star/shared/types — contracts (Rate, BtcResponse, LogItem, IMessageService)
  shared/services/       # @star/shared/services — MessageService (signal-based log)
  shared/data-access/    # @star/shared/data-access — BtcRateService
  btc/                   # @star/btc — btc() rate generator
docs/          # ADRs, architecture & design docs, and the tester report (audit trail)
```

npm scope is `@star`; element selectors use the `star-` prefix (e.g. `<star-primary-button>`).

## Getting started

Requires Node 24.

```bash
npm install
```

### Run the Storybook component catalog

```bash
npm run docs:json          # generate compodoc documentation.json (feeds the Docs tab)
npx nx storybook demo  # serve the aggregated catalog on http://localhost:4400
```

Build the static catalog (deployed to GitHub Pages):

```bash
npm run docs:json && npx nx build-storybook demo   # → dist/storybook/demo
```

### Run the Module Federation demo

Serve the remote and the host in two terminals:

```bash
npx nx serve portfolio   # remote on http://localhost:4201
npx nx serve demo        # host on http://localhost:4200 (lazy-loads the portfolio remote)
```

### Run the backend

```bash
npx nx serve server      # Express API on http://localhost:3333 (GET /api/btc)
```

## Quality gates

```bash
npx nx run-many -t lint          # lint all projects
npx nx run-many -t test          # unit tests (Jest)
npx nx run-many -t build         # build the apps
npx nx build-storybook demo      # build the Storybook catalog
```

The latest verification results are recorded in [`docs/reports/test-report.md`](./docs/reports/test-report.md).

## Hosting

Everything is served from a **single GitHub Pages site** for this repo
(`code-star.github.io/nx-reference/`) using
subdirectory deployment:

| URL                                         | Serves                                                            |
| ------------------------------------------- | ----------------------------------------------------------------- |
| `http://codestar.nl/nx-reference/`          | Shell — Module Federation host (`apps/demo`)                      |
| `http://codestar.nl/nx-reference/portfolio` | Portfolio remote micro app + `remoteEntry.json` (`apps/portfolio`) |
| `http://codestar.nl/nx-reference/storybook` | Storybook component catalog                                       |

The `server` Express app is not deployed to Pages.

### How it works

- Each app builds with its own base href (`/nx-reference/` for the shell,
  `/nx-reference/portfolio/` for the remote — set on the production build
  configuration in each `project.json`) and is published to its own subdirectory.
- At runtime the shell reads `federation.manifest.json`. The production manifest
  ([`apps/demo/federation.manifest.prod.json`](./apps/demo/federation.manifest.prod.json))
  points the `portfolio` remote at `/nx-reference/portfolio/remoteEntry.json`;
  the committed dev manifest keeps pointing at `http://localhost:4201` so local
  development is unchanged.
- A root `404.html` (copy of the shell `index.html`) plus a `.nojekyll` marker
  provide SPA deep-link fallback on GitHub Pages.

### Independent deployments

Three path-filtered workflows deploy each piece **independently**, all through the
`actions/deploy-pages` action:

| Workflow                                   | Triggered by                          | Deploys       |
| ------------------------------------------ | ------------------------------------- | ------------- |
| `.github/workflows/deploy-shell.yml`       | `apps/demo/**`, shared libs           | site root `/` |
| `.github/workflows/deploy-portfolio.yml`   | `apps/portfolio/**`, shared libs      | `/portfolio`  |
| `.github/workflows/deploy-storybook.yml`   | `.storybook`, story files, shared libs | `/storybook`  |

A change confined to `apps/portfolio` rebuilds and redeploys **only** the portfolio
remote — the shell is never rebuilt, and vice-versa. That is the module-federation
payoff: host and remotes are decoupled at deploy time.

Because `deploy-pages` publishes one artifact that replaces the whole site, the
shared [`.github/actions/deploy-subdir`](./.github/actions/deploy-subdir) composite
action keeps the full assembled site on a `pages-content` storage branch and
overlays only the changed subdirectory before each deploy. All Pages deploys share a
`pages` concurrency group so they serialise safely.

> **Setup:** set the repo's **Settings → Pages → Source** to **GitHub Actions**, then
> trigger each workflow once via **Run workflow** (`workflow_dispatch`) to seed all
> three subdirectories on the first deploy.

## Documentation & audit trail

- [Architecture overview](./docs/architecture/overview.md) and
  [current-state snapshot](./docs/architecture/current-state.md)
- [Architecture Decision Records](./docs/architecture/adr)
- [Design overview](./docs/design/overview.md),
  [UX](./docs/design/ux.md), [component contracts](./docs/design/components.md)
- [Migration notes](./docs/migration.md) and [release notes](./docs/reports/release-notes.md)
- [Test & verification report](./docs/reports/test-report.md)
