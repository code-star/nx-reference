# NxStorybookAtomic

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
yarn add -D @nrwl/express
yarn add cors
yarn add -D @types/cors
yarn nx g @nrwl/express:application server
yarn nx g @nrwl/node:library btc
yarn nx g service BtcRate
Note that modules (e.g. HttpClientModule or UiModule) need to be added to both app.module.ts and app.component.stories.ts
yarn nx g @nrwl/workspace:lib shared/types
yarn add -D @compodoc/compodoc
Add to package.json: "docs:json": "compodoc -p ./tsconfig.base.json -e json -d ." 
yarn docs:json // TODO this now needs to be run manually after each type change, then also storybook needs to be restarted

No stories generated because there were no components declared in /libs/ui/src/lib/ui.module.ts.
Hint: you can always generate stories later with the 'nx generate @nrwl/angular:stories --name=ui' command

Run storybook: `yarn docs:json && yarn nx storybook` (does nx run demo:storybook) or `nx run ui:storybook`.
So modify apps/demo/.storybook/main.js to also include libs/ui and then use `yarn nx storybook`
Also run `yarn nx serve server`.

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

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
