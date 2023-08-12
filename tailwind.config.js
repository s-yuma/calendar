/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '56': '56rem',
      },
      height: {
        '55': '30rem',
      },
      height: {
        '57': '52.45rem',
      },
      width: {
        '57': '70rem',
      },
      width: {
        '56': '90rem',
      },
      colors: {
        'dark-green': '#006a6c'
      }
    },
  },
  plugins: [],
}
