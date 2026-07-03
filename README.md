# Nx Atomic Design Reference Project

A reference monorepo demonstrating **Module Federation in Nx with Angular**, plus a custom
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) UI component library
**published as a deployed [Storybook](https://storybook.js.org) catalog**.

Made by [Codestar](https://code-star.github.io).

For a component tour see the [Storybook Intro](https://code-star.github.io/nx-reference/?path=/docs/introduction--docs).

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

## Documentation & audit trail

- [Architecture overview](./docs/architecture/overview.md) and
  [current-state snapshot](./docs/architecture/current-state.md)
- [Architecture Decision Records](./docs/architecture/adr)
- [Design overview](./docs/design/overview.md),
  [UX](./docs/design/ux.md), [component contracts](./docs/design/components.md)
- [Migration notes](./docs/migration.md) and [release notes](./docs/reports/release-notes.md)
- [Test & verification report](./docs/reports/test-report.md)
