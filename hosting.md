I now use multiple github repos to host multiple front-ends for module federation, for a demo project to demonstrate module federation. I use github pages. Can I somehow integrate the repos into a single repo and still host multiple modules on github pages?

---

Yes, you can consolidate into a single repo and still host multiple sites on GitHub Pages. There are two solid approaches:

**Option 1: Multiple `gh-pages`-style branches (one per module)**

GitHub Pages can serve from any branch. You can have:
- `gh-pages-shell` → serves the shell app
- `gh-pages-remote1` → serves remote1
- `gh-pages-remote2` → serves remote2

Each gets its own GitHub Pages URL like `https://<user>.github.io/<repo>/` ... but actually this doesn't work cleanly — a repo only has **one** Pages site, served from one source. So this approach alone won't give you multiple origins.

**Option 2: Subdirectory deployment (recommended)**

Host everything under one Pages site using subdirectories:

```
https://<user>.github.io/<repo>/shell/
https://<user>.github.io/<repo>/remote1/
https://<user>.github.io/<repo>/remote2/
```

Your repo structure:

```
/
├── packages/
│   ├── shell/
│   ├── remote1/
│   └── remote2/
└── .github/workflows/deploy.yml
```

In each app's webpack/vite config, set `publicPath` / `base` to match:

```js
// vite.config.js for remote1
base: '/your-repo-name/remote1/'
```

And in the shell's module federation config, point remotes at the deployed paths:

```js
remotes: {
  remote1: 'remote1@https://<user>.github.io/<repo>/remote1/remoteEntry.js',
  remote2: 'remote2@https://<user>.github.io/<repo>/remote2/remoteEntry.js',
}
```

Your deploy workflow builds each package and puts the output in the right subdirectory:

```yaml
- name: Build all
  run: |
    npm run build --workspace=packages/shell
    npm run build --workspace=packages/remote1
    npm run build --workspace=packages/remote2

- name: Arrange dist
  run: |
    mkdir -p dist/shell dist/remote1 dist/remote2
    cp -r packages/shell/dist/* dist/shell/
    cp -r packages/remote1/dist/* dist/remote1/
    cp -r packages/remote2/dist/* dist/remote2/

- name: Deploy
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

**Bonus: you can still develop independently** using an npm/pnpm workspaces monorepo — each package has its own `package.json`, and the root orchestrates builds. This is probably the cleanest fit for a demo project since it keeps module boundaries clear while unifying the repo and CI.

The main thing to watch is that all `remoteEntry.js` URLs and `publicPath` values match the subdirectory structure — module federation is sensitive to those base URLs being exactly right.
