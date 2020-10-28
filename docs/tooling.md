# Tooling Setup

- [Tooling Setup](#tooling-setup)
  - [Node Version](#node-version)
  - [TypeScript](#typescript)
  - [Linting](#linting)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
    - [Lint Staged](#lint-staged)
  - [Editors](#editors)
    - [VSCode](#vscode)
  - [Git Hooks](#git-hooks)
    - [Why not using `commitizen` instead of `commitlint`](#why-not-using-commitizen-instead-of-commitlint)

## Node Version

Node version used to build the library can be found in `.nvmrc`.

[nvm](https://github.com/nvm-sh/nvm) can be used to switch to the mentioned version using `nvm use` in root directory.

## TypeScript

`tsconfig.json` contains the details for typescript setup. Some main configuration details are:

- `target` is `es6`
- `outDir` is `./lib`

## Linting

### ESLint

[Eslint](https://eslint.org) is used as the linter. The configuration file is `.eslintrc.js` and it

- extends `airbnb-typescript/base`.
- adds custom rules under `rules` directory.
- Integrates with `prettier` so that formatting errors are shown as ESLint errors.

### Prettier

[Prettier](https://prettier.io/) is used for providing formatting. The configuration file is `.prettierrc`.

Help links:

- [configure prettier in vs code](https://glebbahmutov.com/blog/configure-prettier-in-vscode/)
- [eslint and prettier in TS](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

### Lint Staged

[lint-staged](https://github.com/okonet/lint-staged) to run linters on staged files. The configuration file is `.lintstaged.js`.

## Editors

### VSCode

Following files has been added under `.vscode` directory:

- `settings.json`: To maintain VSCode settings across all users.

`.vscode/launch.json`: Contains various launch configuration like running current `*.spec.ts` file for testing.

Install following extensions:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Markdown lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) for linting markdown files.
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) to generate TOC for markdown files.

**Note**: Ensure `prettier` extension is installed for VSCode users.

## Git Hooks

[husky](https://github.com/typicode/husky) is used for maintaining `git hooks`. It's configured using `.huskyrc.js` file and contains hooks like `pre-commit` to run `lint-staged` and `commit-msg`.

### Why not using `commitizen` instead of `commitlint`

Tried `commitizen` with `husky` by adding `pre-commit-msg` hook to husky config. In order to commit changes, one would do

`git commit --message "some message"`

Doing this would trigger

- `lint-staged`
- `pre-commit-message`

But problem we were facing is if we exit while `git cz` runs, your commit still gets committed.
