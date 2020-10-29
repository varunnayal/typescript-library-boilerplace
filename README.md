# TS Boilerplate

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[master](https://github.com/varunnayal/typescript-library-boilerplace/workflows/TS%20Boilerplate/badge.svg)

## Development

- Run `nvm use` to use the node version being used for development
- Ensure `$PATH` variable contains `./node_modules/.bin` path to use local `tsc` and other dependant binary being installed by `npm i`.

To run in watch mode use

`npm run dev`.

## Unit Tests

All the unit test must be written in file whose name matches `src/**/*.spec.ts`. These files has been ignored by `tsconfig.json` file.

Following scripts can be used:

- `npm run test`: To run test using `mocha` suite.
- `npm run cov`: To run tests and generate code coverage reports.
- `npm run dev:test:mac` and `npm run dev:cov:mac` to run test or coverage and open html files.

## TODO

- [ ] Add VSCode workspace extension configuration file containing `Prettier`.
- [ ]  Package release workflow including

  For release workflow we would want to:

  - Generate `CHANGELOG.md`
  - **Automatically** handles semantic versioning, for a version `<major>`.`<minor>`.`<patch>`
    - Updates `major` when there are breaking changes.(Having `BREAKING CHANGE:` text in `body` or `footer` section)
    - Updates `minor` for new features.(`feat:` commit)
    - Updates `patch` for bug fixes.(`fix:` commit)
  - Generate release notes
  - Integrate with CI/CD pipeline, if any
  - Publish on various channels like [GitHub Release](https://help.github.com/en/github/administering-a-repository/about-releases) or `npm`.

  Choices we have for release workflow:

  - `auto-changelog`: Just generated changelog. Supports custom changelog templates.
  - `semantic-release`: It is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry.
  - `standard-version`: It handles the versioning, changelog generation, and git tagging for you without automatic pushing (to GitHub) or publishing (to an npm registry). Use of standard-version only affects your local git repo - it doesn't affect remote resources at all. After you run standard-version, you still have to ability to review things and correct mistakes if you want to. [Diff with semantic-release](https://github.com/conventional-changelog/standard-version/issues/22).

## Other Docs

- [tooling setup](docs/tooling.md)
- [workflow](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge)