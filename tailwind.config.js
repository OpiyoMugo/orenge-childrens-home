/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
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
				secondaryGrey: 'rgba(251, 160.20, 24, 0.30)',
				mainGreen: '#0AB04C',
				mainIndigo: '#232876'
			},
			fontFamily: {
				poppinsFont: ['Poppins', 'sans-serif'],
				satoshiFont: ['Satoshi', 'sans-serif']
			}
		}
	}
	// plugins: [require('@tailwindcss/forms')]
};
