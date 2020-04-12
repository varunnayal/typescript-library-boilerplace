# Typescript library

## Development

- Run `nvm use` to use the node version being used for development
- Ensure `$PATH` variable contains `./node_modules/.bin` path to use local `tsc` and other dependand binary being installed by `npm i`.

## Files

- `.nvmrc`: To handle the node version being used. When in repo for the first time, run `nvm use`.
- `tsconfig.json`: TS configuratio file.
- `.eslintrc.js` and `.eslintignore`: ESLint configuration files.
  - Added scripts `npm run lint` and `npm run lint:fix`. The latter command fixes the `ts` and `js` files. For example `const x: number = 123` will be converted to `const x = 123` as `number` is redundant here.
- `.prettierrc`: Adding prettier configuration using Prettier.
