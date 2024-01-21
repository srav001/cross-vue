module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:sonarjs/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
		'prettier',
		'./.generated/eslintrc-auto-import.json'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'vue/no-deprecated-slot-attribute': 'off',
		'@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'no-constant-binary-expression': 'error',
		'sonarjs/no-duplicate-string': ['error', { threshold: 4 }],
		'vue/multi-word-component-names': 'off'
	},
};
