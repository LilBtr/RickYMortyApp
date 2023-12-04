/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'xl': '1280px',
		},
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {},
	},
	plugins: [],
}
