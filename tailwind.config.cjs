/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js}"],
	darkMode: 'class',
  theme: {
    extend: {
		colors: {
			'shade0': '#1A1E38',
			'shade1' : '#7489F4',
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
				'0%': { transform: 'translateX(300px)' },
				'100%': { transform: 'translateX(0)' },
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
			}
		},
		animation: {
			header: 'topToBottom 800ms ease-in-out forwards, fadeIn 1s',
			headerDelay: 'topToBottom 0.3s ease-in-out forwards',
			headerDelay2: 'topToBottom 0.6s ease-in-out forwards',
			headerDelay3: 'topToBottom 0.8s ease-in-out forwards',
			headerDelay4: 'topToBottom 1s ease-in-out forwards',

			arrowPop: 'arrowPop 1s ease-in-out forwards, arrowFadeIn 1s',
			picturePop : 'picturePop 1s ease-in-out forwards, fadeIn 1s'
		},
		dropShadow: {
			'3xl': '0 10px 20px rgba(0,0,0,0.35)',
			'4xl': '0 25px 35px rgba(0,0,0,0.55)'
		}
	}
  },
  plugins: [],
}