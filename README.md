<img height="204" src="https://cloud.githubusercontent.com/assets/464822/20228152/d3f36dc2-a804-11e6-80ff-51ada2d13ea7.png">

# [Neptune](http://neptune.lunaris.io/) [![CircleCI](https://circleci.com/gh/palantir/blueprint/tree/develop.svg?style=svg)](https://circleci.com/gh/palantir/workflows/blueprint)

Neptune is a React-based UI toolkit for the web.

It is optimized for building complex, data-dense web interfaces for _desktop applications_ which run in modern browsers and IE11. This is not a mobile-first UI toolkit.

[**Read the introductory blog post ▸**](https://medium.com/@palantir/scaling-product-design-with-blueprint-25492827bb4a)

[**View the full documentation ▸**](http://neptune.lunaris.io/docs)

[**Try it out on CodeSandbox ▸**](https://codesandbox.io/s/blueprint-sandbox-et9xy)

[**Read frequently asked questions (FAQ) on the wiki ▸**](https://github.com/palantir/blueprint/wiki/Frequently-Asked-Questions)

## Changelog

Neptune's change log and migration guides for major verions live on the repo's [Github wiki](https://github.com/palantir/blueprint/wiki/3.x-Changelog).

## Packages

This repository contains multiple projects in the `packages/` directory that fall into 3 categories:

### Libraries

These are the component libraries we publish to NPM.

-   [![npm](https://img.shields.io/npm/v/@neptune/core.svg?label=@neptune/core)](https://www.npmjs.com/package/@neptune/core) &ndash; Core styles & components.
-   [![npm](https://img.shields.io/npm/v/@neptune/datetime.svg?label=@neptune/datetime)](https://www.npmjs.com/package/@neptune/datetime) &ndash; Components for interacting with dates and times.
-   [![npm](https://img.shields.io/npm/v/@neptune/icons.svg?label=@neptune/icons)](https://www.npmjs.com/package/@neptune/icons) &ndash; Components for generating and displaying icons.
-   [![npm](https://img.shields.io/npm/v/@neptune/select.svg?label=@neptune/select)](https://www.npmjs.com/package/@neptune/select) &ndash; Components for selecting items from a list.
-   [![npm](https://img.shields.io/npm/v/@neptune/table.svg?label=@neptune/table)](https://www.npmjs.com/package/@neptune/table) &ndash; Scalable interactive table component.
-   [![npm](https://img.shields.io/npm/v/@neptune/timezone.svg?label=@neptune/timezone)](https://www.npmjs.com/package/@neptune/timezone) &ndash; Components for picking timezones.

### Applications

These are hosted on GitHub Pages as static web applications:

-   `docs-app` &ndash; Documentation site at neptune.lunaris.io/docs
-   `landing-app` &ndash; Landing page at neptune.lunaris.io

These are used as development playground environments:

-   `table-dev-app` &ndash; demo page that supports manual testing of all table features

### Build tooling

These packages define development dependencies and contain build configuration. They adhere to the standard NPM package layout, which allows us to keep clear API boundaries for build configuration and isolate groups of `devDependencies`. They are published to NPM in order to allow other Neptune-related projects to use this infrastructure outside this monorepo.

-   [![npm](https://img.shields.io/npm/v/@neptune/docs-theme.svg?label=@neptune/docs-theme)](https://www.npmjs.com/package/@neptune/docs-theme) &ndash; Documentation theme for [Documentalist](https://github.com/palantir/documentalist) data.
-   [![npm](https://img.shields.io/npm/v/@neptune/eslint-config.svg?label=@neptune/eslint-config)](https://www.npmjs.com/package/@neptune/eslint-config) &ndash; ESLint configuration used in this repo and recommended for Neptune-related projects
-   [![npm](https://img.shields.io/npm/v/@neptune/eslint-plugin.svg?label=@neptune/eslint-plugin)](https://www.npmjs.com/package/@neptune/eslint-plugin) &ndash; implementations for custom ESLint rules which enforce best practices for Neptune usage
-   [![npm](https://img.shields.io/npm/v/@neptune/karma-build-scripts.svg?label=@neptune/karma-build-scripts)](https://www.npmjs.com/package/@neptune/karma-build-scripts)
-   [![npm](https://img.shields.io/npm/v/@neptune/node-build-scripts.svg?label=@neptune/node-build-scripts)](https://www.npmjs.com/package/@neptune/node-build-scripts) &ndash; various utility scripts for linting, working with CSS variables, and building icons
-   [![npm](https://img.shields.io/npm/v/@neptune/test-commons.svg?label=@neptune/test-commons)](https://www.npmjs.com/package/@neptune/test-commons) &ndash; various utility functions used in Neptune test suites
-   [![npm](https://img.shields.io/npm/v/@neptune/tslint-config.svg?label=@neptune/tslint-config)](https://www.npmjs.com/package/@neptune/tslint-config) &ndash; TSLint configuration used in this repo and recommended for Neptune-related projects (should be installed by `@neptune/eslint-config`, not directly)
-   [![npm](https://img.shields.io/npm/v/@neptune/webpack-build-scripts.svg?label=@neptune/webpack-build-scripts)](https://www.npmjs.com/package/@neptune/webpack-build-scripts)

## Contributing

Looking for places to contribute to the codebase?
First read the [contribution guidelines](https://github.com/palantir/blueprint/blob/develop/CONTRIBUTING.md),
then [check out the "help wanted" label](https://github.com/palantir/blueprint/labels/help%20wanted).

## Development

[Lerna](https://lerna.js.org/) manages inter-package dependencies in this monorepo.
Builds are orchestrated via `lerna run` and NPM scripts.

**Prerequisites**: Node.js v10+, Yarn v1.18+

### One-time setup

After cloning this repo, run:

1. `yarn` to install all dependencies.
1. If running on Windows:
    1. `npm install -g windows-build-tools` to install build tools globally
    1. Ensure `bash` is your configured script-shell by running:<br />
       `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"`
1. `yarn verify` to ensure you have all the build tooling working properly.

### Incorporating upstream changes

If you were previously in a working state and have just pulled new code from `develop`:

-   If there were package dependency changes, run `yarn` at the root.
    -   This command is very quick if there are no new things to install.
-   Run `yarn compile` to get the latest built versions of the library packages in this repo.
    -   This command is quicker than `yarn verify` since it doesn't build the application packages (`docs-app`, `landing-app`, etc.) or run tests

### Developing libraries

Run `yarn dev` from the root directory to watch changes across all packages and run the docs application with webpack-dev-server.

Alternately, each library has its own dev script to run the docs app and watch changes to just that package (and its dependencies): `yarn dev:core`, `yarn dev:datetime`, etc.
One exception is `table`: since it has its own dev application, the `dev:table` script runs `table-dev-app` instead of the docs.

### Updating documentation

Much of Neptune's documentation lives inside source code as JSDoc comments in `.tsx` files and KSS markup in `.scss` files. This documentation is extracted and converted into static JSON data using [documentalist](https://github.com/palantir/documentalist/).

If you are updating documentation sources (_not_ the docs UI code which lives in `packages/docs-app` or the docs theme in `packages/docs-theme`), you'll need to run `yarn compile` from `packages/docs-data` to see changes reflected in the application. For simplicity, an alias script `yarn docs-data` exists in the root to minimize directory hopping.

### Updating icons

The [One-time setup](#one-time-setup) and [Incorporating upstream changes](#incorporating-upstream-changes) steps should produce the generated
source code in this repo used to build the icons documentation. This is sufficient for most development workflows.

If you are updating icons or adding new ones, you'll need to run `yarn compile` in `packages/icons` to see those changes reflected before
running any of the dev scripts.

## License

This project is made available under the Apache 2.0 License.