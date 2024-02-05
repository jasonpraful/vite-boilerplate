module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
	],
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'postcss.config.js',
		'tailwind.config.js',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2020,
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.browser.json'],
		tsconfigRootDir: __dirname,
	},
	overrides: [
		{
			files: ['**/*.cjs'],
			env: {
				node: true,
			},
		},
	],
	plugins: ['@tanstack/query', 'react-refresh', 'simple-import-sort'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'simple-import-sort/exports': 2,
		'simple-import-sort/imports': 2,
	},
}
