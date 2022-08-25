// eslint-disable-next-line @typescript-eslint/no-var-requires
const { executeWithSync } = require('./scriptUtils.js');

const devCommand = 'npx vite';

// Dev commands
const dev = () => executeWithSync(devCommand);

const devIos = () => executeWithSync(`npx cap copy ios && npx cap open ios && ${devCommand}`);
const devAndroid = () => executeWithSync(`npx cap copy android && npx cap open android && ${devCommand}`);

const devTauri = () => executeWithSync('npx tauri dev');

module.exports = {
	devCommand,

	dev,
	devIos,
	devAndroid,
	devTauri
};
