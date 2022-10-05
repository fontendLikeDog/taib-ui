module.exports = {
  purge: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(171, 100%, 41%)', //#00d1b2
          light: 'hsl(171, 100%, 96%)',
          dark: 'hsl(171, 100%, 29%)', //#00947e
          '50': '#CEFFF8',
          '100': '#B7FFF4',
          '200': '#8AFFEE',
          '300': '#5CFFE7',
          '400': '#2EFFE0',
          '500': '#00FFD9',
          '600': '#00D1B2',
          '700': '#009982',
          '800': '#006152',
          '900': '#002923'
        },
        link: {
          DEFAULT: 'hsl(217, 71%, 53%)', //#3273dc
          light: 'hsl(219, 70%, 96%)', //#eef3fc
          dark: 'hsl(217, 71%, 45%)',
          '50': '#CFDEF7',
          '100': '#BDD2F4',
          '200': '#9BBAEE',
          '300': '#78A3E8',
          '400': '#558BE2',
          '500': '#3273DC',
          '600': '#205BBB',
          '700': '#184690',
          '800': '#113164',
          '900': '#0A1C38'
        },
        black: {
          DEFAULT: 'hsl(0, 0%, 4%)',
          bis: 'hsl(0, 0%, 7%)',
          ter: 'hsl(0, 0%, 14%)'
        },
        gray: {
          DEFAULT: 'hsl(0, 0%, 48%)',
          light: 'hsl(0, 0%, 71%)',
          lighter: 'hsl(0, 0%, 86%)',
          dark: 'hsl(0, 0%, 29%)',
          darker: 'hsl(0, 0%, 21%)'
        },
        light: {
          DEFAULT: 'hsl(0, 0%, 96%)',
        },
        success : {
          DEFAULT: 'hsl(141, 71%, 48%)',
          light: 'hsl(142, 52%, 96%)',
          dark: 'hsl(141, 53%, 31%)',
        },
        warning : {
          DEFAULT: 'hsl(48, 100%, 67%)',
          light: 'hsl(48, 100%, 96%)',
          dark: 'hsl(48, 100%, 29%)',
        },
        danger: {
          DEFAULT: 'hsl(348, 100%, 61%)',
          light: 'hsl(347, 90%, 96%)',
          dark: 'hsl(348, 86%, 43%)'
        },
        info: {
          DEFAULT: 'hsl(204, 86%, 53%)',
          light: 'hsl(206, 70%, 96%)',
          dark: 'hsl(204, 71%, 39%)'
        },
        white: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          ter: 'hsl(0, 0%, 96%)',
          bis: 'hsl(0, 0%, 98%)'
        }
        
      },
      spacing: {
        '1.7': '0.4375rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
