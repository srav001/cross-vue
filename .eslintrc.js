module.exports = {
	env: {
		node: true
	},
	plugins: ['sonarjs'],
	extends: [
		'eslint:recommended',
		'plugin:sonarjs/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'prettier'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'vue/no-deprecated-slot-attribute': 'off',
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['Index', 'Home', 'About']
			}
		]
	},
	settings: {
		'import/resolver': {
			typescript: {}
		}
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};
