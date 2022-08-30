// eslint-disable-next-line @typescript-eslint/no-var-requires
const { executeWithSync, updateCapacitorConfig } = require('./scriptUtils.js');

const devCommand = 'npx vite';

// Dev commands
/* Copying the android files and opening the android emulator. */
const dev = () => executeWithSync(devCommand);

const devIos = () => {
	updateCapacitorConfig(true);
	return executeWithSync(`npx cap copy ios && npx cap open ios && ${devCommand}`);
};
const devAndroid = () => {
	updateCapacitorConfig(true);
	return executeWithSync(`npx cap copy android && npx cap open android && ${devCommand}`);
};

const devTauri = () => executeWithSync('npx tauri dev');

module.exports = {
	devCommand,

	dev,
	devIos,
	devAndroid,
	devTauri
};
