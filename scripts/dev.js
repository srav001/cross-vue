// eslint-disable-next-line @typescript-eslint/no-var-requires
const { executeWithSync } = require('./scriptUtils.js');

const devCommand = 'npx vite';

// Dev commands
const dev = () => executeWithSync(devCommand);

const devIos = () => executeWithSync('npx cap run ios -l --external');
const devAndroid = () => executeWithSync('npx cap run android -l --external');

const devTauri = () => executeWithSync('npx tauri dev');

module.exports = {
	devCommand,

	dev,
	devIos,
	devAndroid,
	devTauri
};
