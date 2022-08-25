// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execute, buildCommand } = require('./scriptUtils.js');

// Preview commands
const preview = () => execute('npx vite preview');
/**
 * It builds the app, then runs it on an iOS device
 */
const previewIos = () => execute(`${buildCommand} && npx cap run ios -l --external`);
/**
 * It builds the app, then runs it on an Android device
 */
const previewAndroid = () => execute(`${buildCommand} && npx cap run android -l --external`);

module.exports = {
	preview,
	previewIos,
	previewAndroid
};
