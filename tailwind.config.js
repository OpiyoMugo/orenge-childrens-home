/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,ts,svelte}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],
	theme: {
		extend: {
			colors: {
				mainGray: '#F1F1F1',
				mainBlack: '#1F1F1F',
				mainBlue: '#13829B',
				mainOrange: '#FBA018',
				secondaryOrange: '#FCC29A',
				mainWhite: '#F1F1F1',
				hoverOrange: '#C98013',
				secondaryGrey: '#989898',
				tertiaryGrey: '#384C56',
				mainGreen: '#0AB04C',
				mainIndigo: '#232876'
			},
			fontFamily: {
				poppinsFont: ['Poppins', 'sans-serif'],
				satoshiFont: ['Satoshi', 'sans-serif']
			}
		}
	}
};
