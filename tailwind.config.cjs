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
				'white' : '#FFFFFF',
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
        }
			},
			animation: {
        topToBottom: 'topToBottom 1s ease-in-out forwards',
				topToBottomDelay: 'topToBottom 1s ease-in-out forwards',
      }

		},
  },
  plugins: [],
}