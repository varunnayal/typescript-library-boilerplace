# Typescript library

## Development

- Run `nvm use` to use the node version being used for development
- Ensure `$PATH` variable contains `./node_modules/.bin` path to use local `tsc` and other dependand binary being installed by `npm i`.

To run in watch mode use

`npm run dev`.

## Unit Tests

All the unit test must be written in file whose name matches `src/**/*.spec.ts`. These files has been ignored by `tsconfig.json` file.

Following scripts can be used:

- `npm run test`: To run test using `mocha` suite.
- `npm run cov`: To run tests and generate code coverage reports.
- `npm run dev:test:mac` and `npm run dev:cov:mac` to run test or coverage and open html files.

### Run current test file in VSCode

Use `Mocha Current File` launch configuration to run current `*.spec.ts` file for testing.

## TODO

[x]  Add testing famework

[ ]  Package release workflow including
For release workflow we would want to:

- Generate `CHANGELOG.md`
- Autoamtically hanles semantic versioning, for a version `<major>`.`<minor>`.`<patch>`
  - Updates `major` when there are breaking changes.(Having `BREAKING CHANGE:` text in `body` or `footer` section)
  - Updates `minor` for new features.(`feat:` commit)
  - Updates `patch` for bug fixes.(`fix:` commit)
- Generates relase notes
- Integrate with CI/CD pipeline, if any
- Publish on various channels like [GitHub Releae](https://help.github.com/en/github/administering-a-repository/about-releases) or `npm`.

Choices we have for realase workflow:

- `auto-changelog`: Just generated changelog. Supports custom changelog templates.
- `semantic-release`: It is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry.
- `standard-version`: It handles the versioning, changelog generation, and git tagging for you without automatic pushing (to GitHub) or publishing (to an npm registry). Use of standard-version only affects your local git repo - it doesn't affect remote resources at all. After you run standard-version, you still have to ability to review things and correct mistakes if you want to. [Diff with semantic-release](https://github.com/conventional-changelog/standard-version/issues/22).

## Files, Directories

- `.nvmrc`: To handle the node version being used. When in repo for the first time, run `nvm use`.
- `tsconfig.json`: TS configuration file.
- `.eslintrc.js` and `.eslintignore`: ESLint configuration files.
  - Added scripts `npm run lint` and `npm run lint:fix`. The latter command fixes the `ts` and `js` files. For example `const x: number = 123` will be converted to `const x = 123` as `number` is redundant here.
- `.prettierrc`: Adding prettier configuration using Prettier. See [configure prettier in vs code](https://glebbahmutov.com/blog/configure-prettier-in-vscode/), [eslint and prettier in TS](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
- `.vscode/settings.json`: Added to maintain VSCode settings across all users. Ensure `prettier` extension is installed.
- `.lintstagedrc` and `.huskyrc.js`: Added these file for running linters (`npm run lint`) before adding files. The flow is:
  - `pre-commit` hooks is added in `.huskyrc.js` that runs `lint-staged` command.
  - `.lintstagedrc` config file for `lint-staged` defines the commands to run.
- airbnb eslint configuration integration. See [Airbnb JS Style Guide](https://github.com/airbnb/javascript).
- `lib`: Our distribution direcotry.

## Notes

### Why not using `commitizen` instead of `commitlint`.

Tried `commitizen` with `husky` by adding `pre-commit-msg` hook to husky config. In order to commit changes, one would do

`git commit --message "some message"`

Doing this would trigger

- `lint-staged`
- `pre-commit-message`

But problem we were facing is if we exit while `git cz` runs, your commit still gets committed.
