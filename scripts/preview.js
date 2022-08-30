/* eslint-disable @typescript-eslint/no-var-requires */
const { buildCommand } = require('./build.js');
const { executeWithSync, updateCapacitorConfig } = require('./scriptUtils.js');

// Preview commands
const preview = () => executeWithSync('npx vite preview');
/**
 * It builds the app, then runs it on an iOS device
 */
const previewIos = () => {
	updateCapacitorConfig();
	return executeWithSync(`${buildCommand} && npx cap run ios -l --external`);
};
/**
 * It builds the app, then runs it on an Android device
 */
const previewAndroid = () => {
	updateCapacitorConfig();
	return executeWithSync(`${buildCommand} && npx cap run android -l --external`);
};

module.exports = {
	preview,
	previewIos,
	previewAndroid
};
