import { buildCommand } from './build.js';
import { executeWithSync, updateCapacitorConfig } from './scriptUtils.js';

// Preview commands
export const preview = () => executeWithSync('npx vite preview');
/**
 * It builds the app, then runs it on an iOS device
 */
export const previewIos = () => {
	updateCapacitorConfig();
	return executeWithSync(`${buildCommand} && npx cap run ios -l --external`);
};
/**
 * It builds the app, then runs it on an Android device
 */
export const previewAndroid = () => {
	updateCapacitorConfig();
	return executeWithSync(`${buildCommand} && npx cap run android -l --external`);
};
