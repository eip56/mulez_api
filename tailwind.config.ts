import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
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
        black: '#000000',
        zero: {
          50: '#f6f8f9',
          100: '#eeeff0',
          200: '#e2e3e5',
          300: '#d0d2d3',
          400: '#acadae',
          500: '#8b8c8d',
          600: '#646566',
          700: '#515253',
          800: '#333435',
          900: '#131415' // Primary
        },
        smoke: {
          50: '#f8fafe',
          100: '#f2f5f9',
          200: '#ebeef2',
          300: '#dde0e4',
          400: '#babdc1',
          500: '#9b9ea2',
          600: '#737579',
          700: '#5f6165',
          800: '#404245',
          900: '#1f2124' // Primary
        },
        border: {
          50: '#f6f7fe',
          100: '#eeeff5',
          200: '#e2e4ea',
          300: '#d1d2d8',
          400: '#acadb3',
          500: '#8c8d93',
          600: '#515257',
          700: '#515257',
          800: '#333439', // Primary
          900: '#131419'
        },
        davy: {
          50: '#f6f6ff',
          100: '#edeeff',
          200: '#e2e2f3',
          300: '#d0d1e1',
          400: '#abacbc',
          500: '#8b8c9b',
          600: '#636473',
          700: '#50515f', // Primary
          800: '#323340',
          900: '#12131f'
        },
        edge: '#323340', // Primary davy-700 #B8BBC1
        navbg: '#323236'
      },
      fontSize: {
        xxs: '.625rem',
        xsx: '0.813rem'
      },
      height: {
        15: '0.938rem',
        4.5: '1.125rem'
      },
      width: {
        15: '0.938rem',
        17: '4.688rem'
      },
      padding: {
        15: '0.938rem',
        17: '4.688rem'
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio')
    ]
  }
}
export default config
