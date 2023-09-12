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
        violet: 'hsl(263, 55%, 52%)',
        'light-grayish': 'hsl(210, 46%, 95%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        gray: 'hsl(217, 19%, 35%)',
        'dark-gray': 'hsl(219, 29%, 14%)',
      },
      fontFamily: {
        barlow: ['var(--font-barlow)'],
      },
      fontSize: {
        body: '0.813rem',
      },
    },
  },
  plugins: [],
}
