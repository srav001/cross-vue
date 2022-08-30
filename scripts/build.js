// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execute, updateCapacitorConfig } = require('./scriptUtils.js');

const buildCommand = 'npx vue-tsc --noEmit && npx vite build';

// Build commands
/**
 * It runs the vue-tsc compiler with the --noEmit flag, which means it will only type-check the code,
 * and then it runs the vite build command
 */
const build = () => execute(buildCommand);
/**
 * It builds the app, then copies the iOS platform files to the `ios` directory
 */
const buildIos = () => {
	updateCapacitorConfig();
	return execute(`${buildCommand} && npx cap sync ios`);
};
/**
 * `buildAndroid` builds the app, then copies the Android platform to the `android` directory
 */
const buildAndroid = () => {
	updateCapacitorConfig();
	return execute(`${buildCommand} && npx cap sync android`);
};

const buildTauri = () => execute('npx tauri build');

module.exports = {
	buildCommand,

	build,
	buildIos,
	buildAndroid,
	buildTauri
};
