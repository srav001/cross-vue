const { exec } = require('child_process');
/**
 * It executes a command and logs the output to the console
 */
const execute = command =>
	exec(command, (err, stdout, stderr) => {
		console.log(stdout);
		if (err) console.error(err);
		else if (stderr) console.error(stderr);
	});

/**
 * It installs the project dependencies, removes the husky config incase already installed, re-installs husky, and adds a
 * commit-msg hook that runs commitlint
 */
const projectSetup = () =>
	execute(
		`pnpm install && rm -rf .husky && npx husky install && npx husky add .husky/commit-msg 'npx --no -- commitlint --verbose --edit $1'`
	);

// Build commands
/**
 * It runs the vue-tsc compiler with the --noEmit flag, which means it will only type-check the code,
 * and then it runs the vite build command
 */
const build = () => execute('vue-tsc --noEmit && vite build');

const buildIos = () => execute('npx cap copy ios');
const buildAndroid = () => execute('npx cap copy android');

const tauriDev = () => execute('npx tauri dev');
const tauriBuild = () => execute('npx tauri build');

// House keeping
/**
 * It runs the prettier command on the src and scripts folders, and overwrites the files with the
 * formatted version
 */
const format = () => execute('npx prettier ./src ./scripts -w');
/**
 * `lint` runs `eslint` on all `.js`, `.ts`, and `.vue` files in the `src` and `scripts` directories,
 * ignoring files in the `.gitignore` file, and fixes any errors it finds
 */
const lint = () => execute('npx eslint --ext .js,.ts,.vue --ignore-path .gitignore --fix src scripts');

module.exports = {
	execute,

	projectSetup,

	format,
	lint,

	buildIos,
	buildAndroid,

	tauriDev,
	tauriBuild
};
