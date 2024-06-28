import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: {
        dodger: {
          50: '#e3f2ff',
          100: '#bbdeff',
          200: '#90caff',
          300: '#63b4ff',
          400: '#42a4ff',
          500: '#2495fe',
          600: '#2586ef',
          700: '#2474dc',
          800: '#2263c9',
          900: '#1f44aa',
        },
        erie: {
          50: '#f5f8ff',
          100: '#edeff8',
          200: '#e2e4ed',
          300: '#d0d3db',
          400: '#acaeb6',
          500: '#8b8d95',
          600: '#64666d',
          700: '#51535a',
          800: '#33353b',
          900: '#13151b',
        },
        dark: '#212226',
        'semi-dark': '#171717',
        'light-dark': '#20222C',
        back: '#14161C',
        mainbg: '#171922',
        accent: '#20222C',
        pp: '#5f52fc',
        ppl: '#4a2ae6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
