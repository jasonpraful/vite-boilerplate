/** @type {import("prettier").Config} */
module.exports = {
	jsxSingleQuote: false,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	endOfLine: 'lf',
	printWidth: 80,
	tailwindConfig: './tailwind.config.ts',
	plugins: ['prettier-plugin-tailwindcss'],
}
