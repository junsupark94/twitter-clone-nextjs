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
  },
  plugins: [],
}
