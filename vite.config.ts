import autoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

import transformerDirective from '@unocss/transformer-directives';
import Unocss from 'unocss/vite';

import tsconfigPaths from 'vite-tsconfig-paths';

const basePathForGeneration = './.generated/';

// @ts-expect-error this is a js file.
import { serverPort } from './build/config.js';

const serverConfig = {
	host: true,
	port: serverPort
};

export default defineConfig({
	server: serverConfig,
	preview: serverConfig,
	plugins: [
		tsconfigPaths({}),
		VueRouter({
			routesFolder: 'src/pages',
			extensions: ['.page.vue'],
			dts: basePathForGeneration.concat('typed-router.d.ts')
		}),
		autoImport({
			imports: [
				'vue',
				VueRouterAutoImports,
				{
					'~/pages/router.ts': ['$router']
				}
			],
			vueTemplate: true,
			eslintrc: {
				enabled: true,
				filepath: basePathForGeneration.concat('eslintrc-auto-import.json')
			},
			dts: basePathForGeneration.concat('auto-imports.d.ts')
		}),

		vue({
			script: {
				propsDestructure: true
			}
		}),
		Unocss({
			transformers: [transformerDirective()]
		})
	]
});
