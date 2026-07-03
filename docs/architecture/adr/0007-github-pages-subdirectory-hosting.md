# ADR-0007: Single GitHub Pages site with subdirectory hosting and independent per-app deploys

> **date:** 2026-07-03\
> **status:** accepted

## context

The Module Federation front-ends were previously hosted from **separate GitHub repositories**, one
per front-end, and the Storybook catalog was deployed at the **Pages root** of this repo (the legacy
`prod.yml` workflow). `hosting.md` frames the choice: GitHub Pages serves only **one** site per repo,
so multiple origins are not possible from a single repo (Option 1), but everything can live under one
Pages site via **subdirectory deployment** (Option 2).

We want to consolidate the demo into this single monorepo and still host the shell, the remote, and
the Storybook catalog — while keeping the module-federation selling point visible: the host and its
remotes are **decoupled at deploy time**.

## decision

Adopt **Option 2 — one GitHub Pages site with subdirectory deployment** for `code-star/nx-reference`
(custom domain `codestar.nl`, project base path `/nx-reference/`):

| URL                            | Serves                                                     |
| ------------------------------ | ---------------------------------------------------------- |
| `/nx-reference/`               | Shell — Native Federation host (`apps/demo`)               |
| `/nx-reference/portfolio/`     | Portfolio remote + `remoteEntry.json` (`apps/portfolio`)   |
| `/nx-reference/storybook/`     | Storybook component catalog                                |

- **Per-app base href** is set on the **production** build configuration in each `project.json`
  (`/nx-reference/` for the shell, `/nx-reference/portfolio/` for the remote). Development
  configurations keep base href `/`, so local dev is unchanged.
- **Production federation manifest** (`apps/demo/federation.manifest.prod.json`) points the
  `portfolio` remote at `/nx-reference/portfolio/remoteEntry.json`; the committed dev manifest keeps
  pointing at `http://localhost:4201`. The deploy job swaps the prod manifest into the built shell.
- **`actions/deploy-pages` for every deployment.** Because it publishes one artifact that replaces
  the whole site, the full assembled tree is kept on a `pages-content` **storage branch**; a shared
  composite action (`.github/actions/deploy-subdir`) overlays only the changed subdirectory, adds the
  SPA fallback (`404.html` + `.nojekyll`), uploads the merged site, and persists it back.
- **Independent, path-filtered workflows** — `deploy-shell.yml`, `deploy-portfolio.yml`,
  `deploy-storybook.yml` — so a change confined to `apps/portfolio` rebuilds and deploys **only** the
  remote, and a change to `apps/demo` deploys **only** the shell. Shared libraries trigger all three.
  All deploys share a `pages` **concurrency group** so storage-branch writes serialise.

## alternatives considered

- **Option 1 — multiple `gh-pages`-style branches (one per module):** rejected. A repo has exactly one
  Pages source, so multiple branches cannot yield multiple origins (`hosting.md`).
- **Status quo — one repo per front-end:** rejected. More repos, tokens, and CI to maintain; obscures
  the monorepo/loose-coupling story the demo exists to tell.
- **Single "rebuild-and-deploy-everything" workflow:** rejected. Simpler, but every remote change would
  rebuild and redeploy the shell, hiding the module-federation decoupling advantage.
- **Pages "Deploy from a branch" source instead of `deploy-pages`:** rejected. The Actions artifact
  flow (`upload-pages-artifact` + `deploy-pages`) is the current first-class path and was the
  requested mechanism.

## rationale

- Subdirectory hosting is the only way to serve shell + remote + catalog from one repo's Pages site.
- Native Federation resolves remote chunks relative to `remoteEntry.json`, so a correct base href and
  a manifest pointing at `/nx-reference/portfolio/remoteEntry.json` are sufficient for the host to
  lazy-load the remote in production.
- Path-filtered per-app workflows make the loose coupling **observable in CI**: independent build and
  deploy per micro app.

## consequences

- **Easier:** one repo and CI surface; independent per-app deploys; standard `deploy-pages` flow;
  local dev untouched (dev manifest + base href `/`).
- **Harder / to note:**
  - `deploy-pages` replaces the whole site, so the `pages-content` storage branch is required to
    preserve unchanged subdirectories between independent deploys.
  - **First run** must seed all three subdirectories — trigger each workflow once
    (`workflow_dispatch`) and set **Pages → Source** to **GitHub Actions**.
  - A shared-library change intentionally triggers all three deploys (real coupling through `@star/*`).
  - The custom domain `codestar.nl` is managed at the org Pages level; no per-repo `CNAME` is added.
