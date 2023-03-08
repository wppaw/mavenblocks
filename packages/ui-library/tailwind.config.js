/* eslint-disable global-require */
module.exports = {
	prefix: 'mvn-',
	theme: {
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
		},
		extend: {
			colors: {
				primary: {
					100: '#F3F9FF',
					200: '#E6F4FF',
					300: '#CCE8FF',
					400: '#99D1FF',
					500: '#66BAFF',
					600: '#4D9EFF',
					700: '#3366CC',
					800: '#254799',
					900: '#1A3566',
				},
			},
		},
	},
	important: true,
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class', // only generate classes
		}),
		require('@tailwindcss/aspect-ratio'),
	],
};
