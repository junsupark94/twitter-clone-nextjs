/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'highlight': '0 0 10px 2px rgba(255, 255, 255, 0.3)'
      },
      colors: {
        'color-hover': '#181818',
        'default-text': '#E7E9EA',
        "twitter-blue": "#1D9BF0",
      },
    },
    container: {
      screens: {
        'xs': '599px',
        'sm': '689px',
        'md': '987px',
        'lg': '1006px',
        'xl': '1077px',
        '2xl': '1264px',
      },
    },
    screens: {
      '2xl': {'max': '1264px'},
      'xl': {'max': '1077px'},
      'lg': {'max': '1006px'},
      'md': {'max': '987px'},
      'sm': {'max': '689px'},
      'xs': {'max': '599px'},
    }
  },
  plugins: [],
}
