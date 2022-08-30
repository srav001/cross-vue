/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

import Unocss from 'unocss/vite';
import transformerDirective from '@unocss/transformer-directives';

import path from 'path';

import { serverPort } from './build/config.js';

export default defineConfig({
	server: {
		host: true,
		port: serverPort
	},
	plugins: [
		vue(),
		Pages(),
		Unocss({
			transformers: [transformerDirective()]
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			assets: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			core: path.resolve(__dirname, './src/core'),
			pages: path.resolve(__dirname, './src/pages'),
			stores: path.resolve(__dirname, './src/stores'),
			styles: path.resolve(__dirname, './src/styles')
		}
	}
});
