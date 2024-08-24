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
        navbg: '#323236'
      },
      fontSize: {
        xxs: '.625rem',
        smd: '0.938rem',
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
