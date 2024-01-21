import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import autoImport from 'unplugin-auto-import/vite';

import vue from '@vitejs/plugin-vue';

import Unocss from 'unocss/vite';
import transformerDirective from '@unocss/transformer-directives';

import tsconfigPaths from 'vite-tsconfig-paths';

const basePathForGeneration = './.generated/';

// @ts-expect-error Un-typed file
// import { serverPort } from './build/config.cjs';
//
const serverPort = 3000;

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
			imports: ['vue', VueRouterAutoImports],
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
		}),
		legacy({
			targets: ['defaults', 'not IE 11']
		})
	]
});
