# An all-in-one starter pack

A Vue 💚 production ready 🤩 template for building bleeding edge 😎 web apps for all platforms 🌟. Has [Capacitor](https://capacitorjs.com) 📱 and [Tauri](https://tauri.app) 💻 pre-configured and setup. 
#
Tauri is used over electron for the advantages Tauri offers such as smaller build size, lower memory usage and also because in concept both Capacitor and Tauri works similary, i.e uses WebView to render.
Note:
> This will act as the starting template for a new CLI based starter pack similar to `Quasar`. There will be an option to add `Supabase` as the DB if needed at that point. Learn more about [Cross Web](https://github.com/srav001/cross-web) here - https://github.com/srav001/cross-web


- `It uses the latest tech in vue ecosystem. For example pinia for store and vite for building.` [Click here for more info](https://twitter.com/youyuxi/status/1464058813649088516?lang=en)

### Why UnoCSS and bootstrap grid 🤔 ?

UnoCSS is awesome, since it's on-demand ( it offers low bundle size ) while providing access to multiple css utilty class from the likes of tailwind. Bootstrap's grid is included simply because I think bootstrap's grid is most superior in terms of functionality compared to rest like bulma while being easy to use ( Can be removed by deleting file in `src/assets/bootstrap-grid.min.css`).

## Why use this template ?

- You might don't want to go through the hassle of setting up linter, formatter, router, store etc and still want the [latest vue](https://twitter.com/youyuxi/status/1464058813649088516?lang=en) has to offer ( All of it is setup ).
- If you use the ionic components as your base for components, in future you can build your web app as an android or ios app with Capacitor ( I feel it is better for mobile than other vue component libraries).
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

## Getting Started 🤩

Note:

> pnpm is used and recommended for this project. If any other package manager is used, please go through the scripts folder to modify as needed.


Run the command given below in the root directory
``` 
pnpm project-setup 
```

##

## Custom Scripts:

All custom scripts with brief comments can be found in `scripts` directory. All of them have been added to package.json to be invoked.

