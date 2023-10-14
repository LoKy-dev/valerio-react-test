const bgColors = {
	'f': 'rgb(var(--bg-f) / <alpha-value>)',
	'm': 'rgb(var(--bg-m) / <alpha-value>)',
	'b': 'rgb(var(--bg-b) / <alpha-value>)',
	'hover': 'var(--bg-hover)',
	'active': 'var(--bg-active)',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#22c55e',
				'bg': bgColors,
				'text': 'rgb(var(--c-text) / <alpha-value>)',
				'border': 'rgb(var(--c-border) / <alpha-value>)',
			},

			// Color aliases
			backgroundColor: ({ theme }) => ({
				'foreground': theme('colors.bg-f'),
				'middleground': theme('colors.bg-m'),
				'background': theme('colors.bg-b'),
				...bgColors,
			}),
			borderColor: ({ theme }) => ({
				'default': theme('colors.border'),
			}),
			textColor: ({ theme }) => ({
				'default': theme('colors.text'),
			}),
		},
	},
	plugins: [],
}

