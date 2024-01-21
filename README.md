# An all-in-one starter pack

A Vue 💚 production ready 🤩 template for building bleeding edge 😎 web apps for all platforms 🌟. Has [Capacitor](https://capacitorjs.com) 📱 and [Tauri](https://tauri.app) 💻 pre-configured and setup.

## New in V2 :

-   Upgrade to Vue 3.4 and enable `props-destructure`.
-   Upgrade to Vite 5 and update dependencies.
-   Move to unlugin-vue-router for file based routing.
-   Use `vite-tsconfig-paths` for vite paths.
-   Update all scripts and project to use ESM.
-   Removed bootstrap-grid. Can use Tailwind classes.
-   Add auto-import with unplugin-auto-import - All vue exports, Vue router exports and common Ionic components added.

### Planned for Later in V2:

-   Update UnoCSS to Tailwind v4(To benefit from Oxide Complier and other updates).

Tauri is used over electron for the advantages Tauri offers such as smaller build size, lower memory usage and also because in concept both Capacitor and Tauri works similary, i.e uses WebView to render# Why use this template ?

-   You might don't want to go through the hassle of setting up linter, formatter, router, store etc and still want the [latest vue](https://twitter.com/youyuxi/status/1464058813649088516?lang=en) has to offer ( All of it is setup ).
-   If you use the ionic components as your base for components, in future you can build your web app as an android or ios app with Capacitor ( I feel it is better for mobile than other vue component libraries).
-   File structure based routing and UnoCSS for simpler css.
-   Capacitor is present for mobile and Tauri for desktops.
-   Eslint for linting and prettier for formatting files ( and yes both work combined without issues ).
-   Husky is setup and is being used for commit linting.
-   Vite is used for superior dev experience.
-   Live servers with `dev-ios`, `dev-android` & `dev-tauri` for easier dev experience.

###

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

#

Note:

> This project will be updated yearly, updating all dependencies to the latest version and maybe even replace some tech for newer and better ones or remove deprecated ones.
