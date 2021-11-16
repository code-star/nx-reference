# Nx Atomic Design Reference Project

A reference example monorepo with [Nx](https://nx.dev) + [Storybook](https://storybook.js.org) + [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) in [Angular](https://angular.io/)

Made by [Codestar](https://code-star.github.io) powered by [Ordina](https://www.ordina.nl)

For more info see the [Intro](https://code-star.github.io/nx-reference/?path=/story/introduction--page)

# Running

- Run storybook: `yarn docs:json && yarn nx storybook` (does nx run demo:storybook) or `nx run ui:storybook`.
So modify apps/demo/.storybook/main.js to also include libs/ui and then use `yarn nx storybook`
- Also run `yarn nx serve server` in a separate terminal
- To build storybook run: `yarn nx run demo:build-storybook`
- Run lint on all projects: `yarn nx run-many --all --target=lint` (with `yarn nx lint` only the default project is linted)


# Steps taken

yarn import
rm package-lock.json
yarn add --dev @nrwl/storybook
yarn nx g @nrwl/angular:storybook-configuration demo
yarn nx g @nrwl/angular:lib ui
yarn nx g @nrwl/angular:storybook-configuration ui
yarn nx g @nrwl/angular:component button --project=ui --export
yarn nx g @nrwl/angular:stories --name=ui
yarn nx g @nrwl/angular:component LoadingButton --project=ui --export
yarn nx g @nrwl/angular:stories --name=ui

## Back-end

yarn add -D @nrwl/express
yarn add cors
yarn add -D @types/cors
yarn nx g @nrwl/express:application server
yarn nx g @nrwl/node:library btc
yarn nx g service BtcRate
Note that modules (e.g. HttpClientModule or UiModule) need to be added to both app.module.ts and app.component.stories.ts

yarn nx g @nrwl/workspace:lib shared/types
yarn nx g @nrwl/angular:lib shared/services
yarn nx g @nrwl/angular:service Message --project=shared-services --export
manually export from services/lib/index.ts
yarn nx g @nrwl/angular:lib shared/data-access
yarn nx g @nrwl/angular:service btcRate/BtcRate --project=shared-data-access --export
manually export from data-access/lib/index.ts
yarn nx g @nrwl/angular:service MinimalLogger --project=shared-types --export
yarn nx g @nrwl/angular:component Alert --project=ui --export

## Adding docs in Storybook

https://github.com/storybookjs/storybook/blob/master/addons/docs/angular/README.md

```
yarn add -D @compodoc/compodoc
```

Add to package.json: "docs:json": "compodoc -p ./tsconfig.base.json -e json -d ." 

```
yarn docs:json // TODO this now needs to be run manually after each type change, then also storybook needs to be restarted
```

No stories generated because there were no components declared in /libs/ui/src/lib/ui.module.ts.
Hint: you can always generate stories later with the 'nx generate @nrwl/angular:stories --name=ui' command

## MFE

Target:

- React: 1 field, current balance
- Ng: more complex: portfolio, transactions, graph of balance over time (and use UI lib components in this MicroApp)

From https://nx.dev/l/a/guides/setup-mfe-with-angular

- This document explains that webpack 5 is required. After upgrading to the newest version of nx, and running `yarn why webpack` gives both webpack 4 and some special packages that end in webpack5. Let's try the recommended steps. 
- yarn nx g @nrwl/angular:app dashboard --mfe --mfeType=host --routing=true
- yarn nx g @nrwl/angular:app login --mfe --mfeType=remote --port=4201 --host=dashboard --routing=true
- seems to work, stash results
- yarn nx g mv --project demo demoOld
- yarn nx g mv --project demo-e2e demo-e2eOld
- yarn nx g @nrwl/angular:app demo --mfe --mfeType=host --routing=true
- yarn nx run demo:serve-mfe
- Update the content of apps/demo/src/app/* with apps/demoOld/src/app/*, same with .storybook files
- yarn nx g rm demoOld and reset the default project in in nx.json to demo
- yarn nx g @nrwl/angular:app portfolio --mfe --mfeType=remote --port=4201 --host=demo --routing=true
- test only portfolio, by running `yarn nx run portfolio:serve`
- test only shell app: `yarn nx run demo:serve:development`
- test integration, run `yarn nx run demo:serve-mfe` which will start both servers, view on http://localhost:4200/nx-reference-shell

Add a React Micro App:

- yarn add @nrwl/react
- yarn nx g @nrwl/react:app balance --mfe --mfeType=remote --port=4202 --host=demo --routing=true
  - stylesheet: emotion
- yarn nx run balance:serve
- it seems the mfe and port flags were ignored
- create a custom webpack.config.js from https://github.com/nrwl/nx/blob/master/packages/react/plugins/webpack.ts and set "customWebpackConfig": {
                            "path": "apps/balance/webpack.ts"
                        } in angular.json
- set port 4202 in angular.json
- add ModuleFederationPlugin in webpack.config.js
- create apps/balance/src/app/remote-entry

# Original Nx documentation

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@star/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
