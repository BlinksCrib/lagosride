/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#129CE9',
				lBlue: '#2FB5D9',
				textBlue: '#275A7F',
				green: '#6FDB7A',
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			md: '768px',
			slg: '976px',
			lg: '1200px',
			xl: '1440px',
		},
		fontFamily: {
			krub: ['Krub', 'sans-serif'],
		},
	},
	plugins: [],
};
