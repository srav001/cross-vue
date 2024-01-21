// Convert to esm
import { executeWithSync, updateCapacitorConfig } from './scriptUtils.js';

export const devCommand = 'npx vite';

// Dev commands
/* Copying the android files and opening the android emulator. */
export const dev = () => executeWithSync(devCommand);

export const devIos = () => {
	updateCapacitorConfig(true);
	return executeWithSync(`npx cap copy ios && npx cap open ios && ${devCommand}`);
};
export const devAndroid = () => {
	updateCapacitorConfig(true);
	return executeWithSync(`npx cap copy android && npx cap open android && ${devCommand}`);
};

export const devTauri = () => executeWithSync('npx tauri dev');
