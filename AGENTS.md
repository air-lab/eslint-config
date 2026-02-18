# Repository Guidelines

## Project Structure & Module Organization

- Root entrypoint: `index.mjs` exports the shared ESLint config plus repository ignore patterns.
- Core composition: `eslint.config.mjs` combines TypeScript and Vue rule sets.
- TypeScript profile: `ts/index.mjs`.
- Vue profile: `vue/index.mjs` (with `vue/Test.vue` as a fixture-style example file).
- Style tooling: `stylelint.js`, `postcss.js`, and matching `*.d.ts` files.
- Docs: `README.md` (overview) and `USAGE.md` (consumer setup).
- CI/release automation: `.github/workflows/release-package.yml`.

## Build, Test, and Development Commands

- `pnpm install --frozen-lockfile`: install dependencies exactly as locked.
- `pnpm exec eslint .`: validate all JavaScript/TypeScript/Vue config and fixtures.
- `pnpm exec eslint vue/Test.vue --fix`: quick smoke check for Vue rule behavior.
- `pnpm exec stylelint "**/*.{vue,scss,css}"`: run stylelint against style sources.
- `pnpm pack`: verify package contents before publishing.

## Coding Style & Naming Conventions

- Use ESM (`.mjs`) for exported configs; keep CommonJS only where required (`stylelint.js`, `postcss.js`).
- Follow existing lint conventions: 2-space indentation, single quotes, and no semicolons in ESM config files.
- Keep module names predictable (`index.mjs` per domain folder such as `ts/` and `vue/`).
- Prefer explicit `defineConfig(...)` blocks and scoped `files` globs when adding rules.

## Testing Guidelines

- There is no formal unit-test suite yet; validation is lint-based.
- Run `pnpm exec eslint .` and `pnpm exec stylelint "**/*.{vue,scss,css}"` before opening a PR.
- For rule changes, update or add a focused fixture (for example under `vue/`) and describe expected lint outcomes in the PR.

## Commit & Pull Request Guidelines

- Use short, imperative commit subjects consistent with history (for example, `Update dependencies`, `Refactor release package workflow`).
- Keep each commit focused on one logical change.
- PRs should include: purpose, affected config files, validation commands run, and release impact (version/publish implications).

## Security & Configuration Tips

- Never commit tokens or registry credentials.
- Keep `.npmrc` and publish settings aligned with CI; prefer release publishing through GitHub Actions.
