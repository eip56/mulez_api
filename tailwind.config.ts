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
      colors: {
        black: '#000000',
        navbg: '#323236',
        primary: '#0162FF'
      },
      fontSize: {
        10: '.625rem', // 10px
        13: '0.813rem', // 13px
        15: '0.938rem' // 15px
      },
      height: {
        15: '0.938rem', // 15px
        4.5: '1.125rem' // 18px
      },
      width: {
        15: '0.938rem', // 15px
        17: '4.688rem' // 75px
      },
      padding: {
        0.25: '0.188rem', // 3px
        1.25: '0.313rem', // 5px
        1.75: '0.438rem', // 7px
        2.5: '0.563rem', // 9px
        15: '0.938rem', // 15px
        5.5: '1.313rem', // 21px
        17: '4.688rem' // 75px
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
