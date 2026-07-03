# Migration Notes — legacy → rebuilt `nx-reference`

> **role:** architect/engineer · **branch:** `upgrade_deps` · **date:** 2026-07-03

This monorepo was **rebuilt from scratch** on the latest toolchain rather than migrated in place. An
in-place migration would have spanned ~10 major versions of Nx, Angular, and Storybook at once
(see [ADR-0001](./architecture/adr/0001-rebuild-from-scratch.md)). The rebuild preserves the
observable end state; this document maps the old world to the new one.

## Version deltas

| Tool              | Legacy                                            | Rebuilt                                           |
| ----------------- | ------------------------------------------------- | ------------------------------------------------- |
| Nx                | 13.0.2                                            | 23.0.1                                            |
| Angular           | 12.2                                              | 21.2                                              |
| Storybook         | 6.3 (webpack5)                                    | 10.4.6 (`@storybook/angular`)                     |
| Module Federation | `@angular-architects/module-federation` (webpack) | `@angular-architects/native-federation` (esbuild) |
| Package manager   | Yarn 1                                            | Yarn 1 (unchanged)                                |
| Node              | 15                                                | 24                                                |
| Test runner       | Jest 27                                           | Jest (parity)                                     |

## What was preserved (the "end state")

- **Apps:** `demo` (host), `portfolio` (remote), `server` (Express `/api/btc`).
- **Libraries & scope:** `@star/ui`, `@star/shared/types`, `@star/shared/services`,
  `@star/shared/data-access`, `@star/btc`.
- **UI design:** identical HTML/SCSS, design tokens (`#e87e00`, `#001329`, `#002042`), the `star-`
  selector prefix, `@Input` names, and the atomic-design menu grouping.
- **Behaviour:** `btc()` random rate, `BtcRateService` (1s delay, dual dev/prod URL, graceful error
  handling), `MessageService` log, `bySeverity` filtering into alerts.
- **Storybook:** a single deployed catalog aggregating `@star/ui` + shared + app stories, with the
  intro and message-service docs pages, deployed to GitHub Pages at `dist/storybook/demo`.

## Key changes

### Angular idioms (see ADR-0006)

| Legacy                                           | Rebuilt                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------ |
| NgModules (`UiModule`, `AppModule`)              | Standalone components; `bootstrapApplication` + `provide*`               |
| `@Input()` decorators                            | `input()` signal inputs                                                  |
| `*ngIf` / `*ngFor`                               | `@if` / `@for` control flow                                              |
| Constructor DI                                   | `inject()`                                                               |
| `HttpClientModule`                               | `provideHttpClient()`                                                    |
| Zone.js change detection                         | **Zoneless** (`provideZonelessChangeDetection()`, no zone.js dependency) |
| `Foo` in `foo.component.ts` (`Component` suffix) | `Foo` in `foo.ts` (no suffix, `styleUrl`)                                |

`MessageService.logs` moved from a mutable array to a **signal** (`Signal<LogItem[]>`) so the UI stays
reactive under zoneless change detection.

### Module Federation (see ADR-0003)

The Nx-native webpack MF generators (`@nx/angular:host`/`:remote`, `withModuleFederation`) are
**deprecated in Nx 23 and removed in v24**; Nx's own generator output redirects Angular users to
**Native Federation**. The `@nx/react:consumer/provider` generators are React-only.

| Concern        | Legacy (webpack MF)                        | Rebuilt (Native Federation)                                   |
| -------------- | ------------------------------------------ | ------------------------------------------------------------- |
| Runtime        | webpack Module Federation                  | standards-based import maps                                   |
| Builder        | webpack                                    | esbuild `@angular/build:application`                          |
| Remote entry   | `remoteEntry.js`                           | `remoteEntry.json`                                            |
| Host config    | webpack `remotes` map                      | `public/federation.manifest.json` + `initFederation()`        |
| Consume        | `loadChildren: import('portfolio/Module')` | `loadRemoteModule({ remoteName, exposedModule: './Routes' })` |
| Remote exposes | `./Module` (NgModule)                      | `./Routes` (standalone routes)                                |

Topology is unchanged: `demo` lazy-loads `portfolio` at route `''`, with a fallback route added for
when the remote is unavailable.

### Storybook (see ADR-0004)

- Stories migrated from CSF2 (`Story`/`Template.bind`) to **CSF3** (`Meta`/`StoryObj`).
- `.stories.mdx` (`intro`, `message.service`) migrated to **Storybook 10 MDX** docs pages using
  `@storybook/addon-docs/blocks`.
- `UiModule` decorators dropped — standalone components are auto-imported by CSF.
- **Explicit `@storybook/angular` builder targets** are required (`start-storybook`/`build-storybook`
  with `experimentalZoneless: true`); SB10 rejects the plain `storybook build` CLI path with
  `AngularLegacyBuildOptionsError`, and zone.js is absent.
- Compodoc kept, pinned to `@compodoc/compodoc@1.2.1` (latest `2.0.0` pulls Angular-22 devkit that
  requires Node ≥24.15; `1.2.1` matches Angular 21 on Node 24.13).

### Testing (see ADR-0005)

- Jest retained for spec parity. Zoneless test env via `jest-preset-angular/setup-env/zoneless`.
- Signal inputs set in specs via `fixture.componentRef.setInput()` + `await fixture.whenStable()`.
- **Cypress e2e removed** (`demo-e2e`, `portfolio-e2e`) to keep the demo small; unit coverage is at
  parity (16 unit spec files, 35 test cases).

## Gotchas encountered

- `@nx/angular@23` pins Angular **21.2** (not 22) and scaffolds **zoneless** by default.
- The Native Federation `nf:init` generator drops the trailing newline on rewritten `project.json`
  and re-serializes arrays; `nx format:write` normalises these.
- The `@nx/js` `btc` lib and the `server` app expose lint via the **inferred** `eslint:lint` target,
  so `nx run-many -t lint` skips them; lint them via `nx run-many -t "eslint:lint"`.
- `@nx/jest:jest` and `@nx/eslint:lint` executors are deprecated (removed in Nx v24) — tracked as a
  follow-up (`convert-to-inferred`), see the test report.

## Deployment

`.github/workflows/prod.yml` now runs `npm run docs:json` before `nx run demo:build-storybook` (compodoc
output is git-ignored) and deploys `dist/storybook/demo` to GitHub Pages. The Node version was bumped
from 15 to 24.
