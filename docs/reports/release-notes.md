# Release Notes — Toolchain rebuild

> **branch:** `upgrade_deps` · **date:** 2026-07-03

## Summary

`nx-reference` has been **rebuilt from scratch** on the latest toolchain while preserving its
observable end state: a Module Federation demo (host `demo` loads remote `portfolio`), a custom
Angular UI component library, an Express backend, and a deployed Storybook catalog.

## Highlights

- ⬆️ **Nx 13 → 23**, **Angular 12 → 21.2**, **Storybook 6.3 → 10.4.6**, **Node 15 → 24**.
- ⚡ **Angular modernised:** standalone components, `input()` signals, `inject()`, `@if`/`@for`
  control flow, `provide*` bootstrap, and **zoneless** change detection — no NgModules in new code.
- 🧩 **Module Federation on the newest Angular method:** migrated from webpack
  `@angular-architects/module-federation` to esbuild-based **Native Federation**
  (`@angular-architects/native-federation`), the path Nx now directs Angular users to.
- 📚 **Storybook 10 catalog:** CSF3 stories, MDX docs pages, compodoc-driven docs, deployed to
  GitHub Pages from `dist/storybook/demo`.
- 🎨 **UI design preserved:** identical HTML/SCSS, design tokens, and `star-` selectors.
- ✅ **Quality:** all lint, unit-test, build, and Storybook-build gates green; unit coverage at
  parity (35 tests / 16 suites). See the [test report](./test-report.md).

## Breaking changes

- **Cypress e2e removed** (`demo-e2e`, `portfolio-e2e`) to keep the demo focused; unit coverage is at
  parity.
- **Module Federation runtime changed** (webpack → Native Federation): remote entry is now
  `remoteEntry.json`, the host uses `public/federation.manifest.json` + `loadRemoteModule`, and the
  remote exposes `./Routes` (standalone) instead of `./Module` (NgModule).
- **`MessageService.logs` is now a signal** (`Signal<LogItem[]>`) rather than a plain array.
- **Component file/class naming** follows the modern convention (no `Component` suffix, `styleUrl`).

## Upgrade / run notes

- Requires **Node 24**.
- Run the catalog: `yarn docs:json && yarn nx storybook demo`.
- Run the MF demo: `yarn nx serve portfolio` and `yarn nx serve demo` (two terminals).
- Run the backend: `yarn nx serve server`.

## Known issues / follow-ups

- `@nx/jest:jest` and `@nx/eslint:lint` executors are deprecated (removed in Nx v24). A
  `convert-to-inferred` migration is recommended as a follow-up; functionality is unaffected today.
- Compodoc is pinned to `1.2.1` for Angular-21 / Node-24 compatibility; revisit when `2.x` supports
  the installed Node version.

## Audit trail

See [`docs/`](../) — [ADRs](../architecture/adr), the
[architecture overview](../architecture/overview.md), [design docs](../design), the
[migration notes](../migration.md), and the [test report](./test-report.md).
