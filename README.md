# What's inside

- `TypeScript`
- `PostCSS`
- `Tailwind CSS`
- `ESLint`
- `Prettier`
- Setup for deployment on `GitHub Pages`

# How to use

Go to `svelte.config.js` and edit the variable `REPO_NAME` by adding the name of the GitHub repo.

**Note:** To build paths, always `import { base, assets } from '$app/paths'` and use those variables.

# How it's been created

- Created repo with `svelte-add`
  - `TypeScript` + `PostCSS` + `Tailwind CSS` + `ESLint` + `Prettier`
- Added `.nojekyll` to `static/`
- Added `@sveltejs/adapter-static`
- Configured `svelte.config.js` to build in `docs/` folder
- Bugfix for `svelte-add`
  - Added `$lib` alias to `tsconfig.json`
