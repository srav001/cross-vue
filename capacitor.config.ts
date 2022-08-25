// eslint-disable-next-line import/no-extraneous-dependencies
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.ionic.starter',
	appName: 'Cross Web',
	webDir: 'dist',
	bundledWebRuntime: false,
	android: {
		path: './src-capacitor/android'
	},
	ios: {
		path: './src-capacitor/ios'
	},

	server: {
		url: 'http://192.168.1.34:5174',
		cleartext: true
	}
};

export default config;
