import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/feature/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        bg: '#14171F',
        card: '#171C23',
        ch: '#222728',
        light: '#191919',
        dark: '#1F232D'
      },
      fontSize: {
        xxs: '.625rem',
        xsx: '0.813rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
export default config

// bg #141719
//card #1d2223
//#0B0C0D

// bg: '#141719',
// card: '#1F2223',
// ch: '#222728',
// light: '#191919',
// dark: '#121517'
