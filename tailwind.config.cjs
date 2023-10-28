/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js}"],
	darkMode: 'class',
  theme: {
    extend: {
		width: {
			'128': '32rem',
		},
		height: {
			'128': '32rem',
		},
		colors: {
			'shade0': '#1A1E38',
			'shade1' : '#ebebe4',
			'shade2' :'#F8F8FF',
			'shade3' :'#F1F1E6',
			'shade4' : '#C0C0F2'
		},
		backgroundImage: {
			'intro-bg': "url('/img/intro-bg.png')",
		},
		FontFace: {
			'font-family': ['Inter', 'serif'],
		},
		keyframes: {
			topToBottom: {
				'0%': { transform: 'translateY(-300px)' },
				'100%': { transform: 'translateY(0)' },
			},
			picturePop: {
				'0%': { transform: 'translateX(300px)', filter: 'blur(40px)' },
				'100%': { transform: 'translateX(0)', filter: 'blur(15px)' },
			},
			fadeIn: {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 }
			},
			arrowFadeIn: {
				'0%': { opacity: 0 },
				'100%': { opacity: 0.6 }
			},
			arrowFadeOut: {
				'0%': { opacity: 0.6 },
				'100%': { opacity: 0 }
			},
			arrowPop : {
				'0%': { transform: 'translateY(3rem)' },
				'100%': { transform: 'translateX(0)' },
			},
			projectDescriptionPop: {
				'0%': { transform: 'translateY(0.7rem)', },
				'100%': { transform: 'translateY(0)', },
			},
			heightAppear: {
				'0%': { maxHeight: '0' },
				'100%': { maxHeight: '100vh' }
			},
			projectHoverEnter: {
				'0%': {},
				'100%': {
					borderRadius: '1rem',
					backgroundColor: '#ebebe4',
					filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.55))',
					padding: '1rem'
				},
			},
			projectHoverLeave: {
				'0%': {
					borderRadius: '1rem',
					backgroundColor: '#ebebe4',
					filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.55))',
					padding: '1rem'
				},
				'100%': {},
			},
			projectImgHoverEnter: {
				'0%': {
				},
				'100%': {
					borderRadius: '1rem',
					// height: '100%',
				},
			},
			projectImgHoverLeave: {
				'0%': {
					borderRadius: '1rem',
					// height: '100%',
				},
				'100%': {
					// height: '18rem',
				},
			},
		},
		animation: {
			header: 'topToBottom 800ms ease-in-out forwards, fadeIn 1s',
			headerDelay: 'topToBottom 300ms ease-in-out forwards',
			headerDelay2: 'topToBottom 600ms ease-in-out forwards',
			headerDelay3: 'topToBottom 800ms ease-in-out forwards',
			headerDelay4: 'topToBottom 1s ease-in-out forwards',

			arrowPop: 'arrowPop 1.2s ease-in-out forwards, arrowFadeIn 1.5s',
			picturePop : 'picturePop 800ms ease-in-out forwards, fadeIn 1s',
			projectDescriptionPop : 'projectDescriptionPop 300ms ease-in-out forwards, heightAppear 2300ms, fadeIn 1200ms',
			fadeIn: 'fadeIn 800ms',

			projectHoverEnter: 'projectHoverEnter 200ms ease-in-out forwards',
			projectHoverLeave: 'projectHoverLeave 200ms ease-in-out forwards',
			projectImgHoverEnter: 'projectImgHoverEnter 200ms ease-in-out forwards',
			projectImgHoverLeave: 'projectImgHoverLeave 300ms ease-in-out forwards',
		},
		dropShadow: {
			'3xl': '0 10px 20px rgba(0,0,0,0.35)',
			'4xl': '0 25px 35px rgba(0,0,0,0.55)'
		}
	}
  },
  plugins: [],
}