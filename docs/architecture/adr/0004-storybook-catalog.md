# ADR-0004: Storybook 10 as the deployed component catalog

> **date:** 2026-07-03\
> **status:** accepted

## context

Today the `demo` app hosts a Storybook 6.3 (webpack5) instance that **aggregates** stories from
`demo`, `libs/ui`, and `libs/shared/**` into one catalog, deployed static to GitHub Pages. Component
docs come from Compodoc (`documentation.json`). Two docs pages use `.stories.mdx`
(`intro`, `message.service`). Storybook 10 removes/changes several of these mechanisms:
`.stories.mdx` is replaced by CSF + MDX autodocs; the addon model changed (essentials largely merged
into core; `addon-storysource` behaviour differs); the Angular framework package is
`@storybook/angular` (webpack), with a Vite-based alternative (`@analogjs/storybook-angular`).

## decision

- Keep a **single deployable Storybook catalog** that aggregates `@star/ui` + shared + `demo` app
  stories, mirroring today's behaviour and GitHub Pages deployment (correct `base-href`).
- Use **`@storybook/angular` 10** (webpack builder) as the framework for continuity with Angular +
  compodoc; treat the Vite/Analog framework as a fallback only if webpack blocks the build.
- **Migrate stories to Storybook 10 CSF**; convert the two `.stories.mdx` pages to Storybook 10 MDX
  (docs pages / autodocs). Adopt the SB10 addon set (docs + essentials via core; replace
  `addon-storysource` with its SB10 equivalent or drop if unsupported).
- Keep **Compodoc** feeding component/`@Input` docs **if** it is compatible with Angular 21; otherwise
  fall back to Storybook's own `argTypes`/JSDoc extraction and record the change here.
- Storybook remains a **catalog only** — it does not load the MF remote (ADR-0003).

## alternatives considered

- **Vite-based `@analogjs/storybook-angular`:** faster, modern, but a bigger jump from the current
  webpack + compodoc setup and less proven with Angular 21 MF-adjacent config. Fallback, not default.
- **Per-project Storybooks (no aggregation):** diverges from the current single deployed catalog and
  the "hosted as a Storybook app, just like it is now" requirement. Rejected.
- **Drop MDX docs pages:** loses the intro/onboarding content that is part of the current end state.
  Rejected — migrate instead.

## rationale

- A single aggregated `@storybook/angular` catalog is the smallest faithful reproduction of the
  current deployed experience while moving to Storybook 10.
- Deferring the Vite framework and preserving compodoc reduces the number of simultaneously changing
  variables during the rebuild.

## consequences

- **Easier:** familiar aggregation + GitHub Pages deploy; existing CSF stories port with minor edits.
- **Harder:** MDX and addon migration is required; compodoc/Angular 21 compatibility must be verified
  in Phase 7; if incompatible, docs extraction strategy changes (recorded here).
- Migration note (resolved in Phase 7): **framework = `@storybook/angular` 10.4.6** (webpack builder);
  **compodoc = kept** (pinned `@compodoc/compodoc@1.2.1`, which resolves the Angular-21 devkit and
  runs on Node 24; `npm run docs:json` emits `documentation.json`, loaded via `setCompodocJson` in
  `.storybook/preview.ts`); **storysource = dropped** (removed from Storybook's core addon set in
  SB10; superseded by the source view in `@storybook/addon-docs`).

## Phase 7 implementation notes

- Storybook is hosted on the **`demo` app** and aggregates `libs/ui` + `libs/shared` stories via the
  `stories` globs in `apps/demo/.storybook/main.ts` (ADR-0004 single-catalog decision preserved).
- **Angular builder is mandatory in SB10:** the `@nx/storybook/plugin` inferred `storybook build`
  command target fails with `AngularLegacyBuildOptionsError`. `apps/demo/project.json` therefore
  defines explicit `storybook`/`build-storybook` targets on `@storybook/angular:start-storybook` /
  `:build-storybook`, fed `tsConfig`, `styles`, and `compodoc: false` (docs are pre-generated).
- **Zoneless:** zone.js is not installed, so both targets pass `experimentalZoneless: true`.
- **Stories = CSF3** (`Meta`/`StoryObj`), `.stories.mdx` migrated to MDX docs pages
  (`intro.mdx`, `message.mdx`) using `@storybook/addon-docs/blocks`. `tags: ['autodocs']` drives the
  Docs tab; component arg/`@Input` descriptions come from compodoc.
- Static output goes to `dist/storybook/demo` to preserve the GitHub Pages deploy contract
  (`.github/workflows/prod.yml`), which now runs `npm run docs:json` before `demo:build-storybook`.
