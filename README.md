# Typescript library

## Development

- Run `nvm use` to use the node version being used for development
- Ensure `$PATH` variable contains `./node_modules/.bin` path to use local `tsc` and other dependand binary being installed by `npm i`.

## Files

- `.nvmrc`: To handle the node version being used. When in repo for the first time, run `nvm use`.
- `tsconfig.json`: TS configuratio file.
- `.eslintrc.js` and `.eslintignore`: ESLint configuration files.
  - Added scripts `npm run lint` and `npm run lint:fix`. The latter command fixes the `ts` and `js` files. For example `const x: number = 123` will be converted to `const x = 123` as `number` is redundant here.
- `.prettierrc`: Adding prettier configuration using Prettier. See [configure prettier in vs code](https://glebbahmutov.com/blog/configure-prettier-in-vscode/), [eslint and prettier in TS](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
- `.vscode/settings.json`: Added to maintain VSCode settings across all users. Ensure `prettier` extension is installed.
- `.lintstagedrc` and `.huskyrc.js`: Added these file for running linters (`npm run lint`) before adding files. The flow is:
  - `pre-commit` hooks is added in `.huskyrc.js` that runs `lint-staged` command.
  - `.lintstagedrc` config file for `lint-staged` defines the commands to run.

## Notes

### Why not using `commitizen` instead of `commitlint`.

Tried `commitizen` with `husky` by adding `pre-commit-msg` hook to husky config. In order to commit changes, one would do

`git commit --message "some message"`

Doing this would trigger

  - `lint-staged`
  - `pre-commit-message`

But problem we were facing is if we exit while `git cz` runs, your commit still gets committed.