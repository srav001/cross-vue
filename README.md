# An all-in-one starter pack

A starter template for building bleeding edge web apps for all platforms. 

- `It uses the latest tech in vue ecosystem. For example pinia for store and vite for building.` [Click here for more info](https://twitter.com/youyuxi/status/1464058813649088516?lang=en)

### Why UnoCSS and bootstrap grid 🤔 ?

UnoCSS is awesome, since it's on-demand ( it offers low bundle size ) while providing access to multiple css utilty class from the likes of tailwind. Bootstrap's grid is included simply because I think bootstrap's grid is most superior in terms of functionality compared to rest like bulma while being easy to use ( Can be removed by deleting file in `src/assets/bootstrap-grid.min.css`).

## Why use this template ?

- You might don't want to go through the hassle of setting up linter, formatter, router, store etc and still want the [latest vue](https://twitter.com/youyuxi/status/1464058813649088516?lang=en) has to offer ( All of it is setup ).
- If you use the ionic components as your base for components, in future you can build your web app as an android or ios app with capacitor ( I feel it is better for mobile than other vue component libraries).
- File structure based routing and UnoCSS for simpler css.
- Capacitor is present for mobile and Tauri for desktops.
- Eslint for linting and prettier for formatting files ( and yes both work combined without issues ).
- Husky is setup and is being used for commit linting.
- Vite is used for superior dev experience.
- Live servers with `dev-ios`, `dev-android` & `dev-tauri` for easier dev experience.

###

Note:

> This project will be updated bi-yearly, updating all dependencies to the latest version and maybe even replace some tech for newer and better ones or remove deprecated ones.

- ` Examples are included for the most common ones and rest is left for developer decision.`

## Custom Scripts:

```
pnpm project-setup: 'Runs pnpm install and setups up husky for commit linting'
pnpm lint: 'Runs eslint in src directory and fixes all autofixeable errors'
pnpm format: 'Runs src directory through prettier and formats all files'
```
