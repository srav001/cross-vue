import { execute, updateCapacitorConfig } from './scriptUtils.js';

export const buildCommand = 'npx vue-tsc --noEmit && npx vite build';

// Build commands
/**
 * It runs the vue-tsc compiler with the --noEmit flag, which means it will only type-check the code,
 * and then it runs the vite build command
 */
export const build = () => execute(buildCommand);
/**
 * It builds the app, then copies the iOS platform files to the `ios` directory
 */
export const buildIos = () => {
	updateCapacitorConfig();
	return execute(`${buildCommand} && npx cap sync ios`);
};
/**
 * `buildAndroid` builds the app, then copies the Android platform to the `android` directory
 */
export const buildAndroid = () => {
	updateCapacitorConfig();
	return execute(`${buildCommand} && npx cap sync android`);
};

export const buildTauri = () => execute('npx tauri build');
