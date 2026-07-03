# ADR-0001: Rebuild from scratch instead of incremental migration

> **date:** 2026-07-03\
> **status:** accepted

## context

The repository is on Nx 13 / Angular 12 / Storybook 6.3 with the third-party
`@angular-architects/module-federation` plugin. The target is the latest toolchain (Nx 23 / Angular 21
/ Storybook 10). That is ~10 Angular majors, ~10 Nx majors, and 4 Storybook majors of drift, plus a
change in the recommended Module Federation approach and the deprecation of NgModules-first Angular,
`.stories.mdx`, and the legacy Storybook addon model. The codebase is small (5 libs, 3 apps, 7 UI
components, ~18 unit specs) and its **end state is well understood and documented** in
`current-state.md`.

## decision

**Rebuild the workspace from scratch** on the latest toolchain, **preserving the observable end
state** (behaviour + visual design + public contracts), rather than running sequential `nx migrate`
upgrades. Work happens **in place on branch `upgrade_deps`** via commits; a fresh Nx 23 workspace is
scaffolded and the preserved artifacts (UI design, business logic, stories, docs) are ported into it.

## alternatives considered

- **Incremental `nx migrate` chain (12→13→…→23):** each hop risks broken generators, deprecated
  builders, and MF/Storybook config that no longer exists in later versions. Cumulative risk and
  debugging cost across 10 hops exceeds a clean rebuild for a codebase this small.
- **Keep `@angular-architects/module-federation`:** diverges from Nx's first-party MF direction and
  carries its own upgrade cadence; rejected in favour of ADR-0003.
- **Freeze versions / do nothing:** fails the goal of demonstrating the _newest_ Nx MF method.

## rationale

- The app is small and its contract is fully captured, so a rebuild is lower-risk and faster than a
  10-step migration.
- A clean workspace yields idiomatic, latest-version config (project graph, MF, Storybook) with no
  legacy residue.
- Behaviour parity is enforced by the preserved unit tests and the acceptance list in
  `current-state.md`.

## consequences

- **Easier:** idiomatic latest config; no dead migration artifacts; clean git history via phased
  conventional commits.
- **Harder:** must carefully port design tokens, business logic, and stories 1:1; must relocate the
  scaffold without clobbering `.git`, `.github`, `.vstack`, and `docs`.
- Requires a disciplined phase gate (validate → test → commit) to prove parity at each step.
