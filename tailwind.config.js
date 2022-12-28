// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#52575c',
      secondary: '#cb3364',
      juniper: '#cb3364',
      light_juniper: '#b72e5a',
      slate: '#52575c',
      honey: '#f6d87c',
      vanilla: {
        100: '#ffffff',
        200: '#f5f5f5',
        300: '#eeeeee',
        400: '#c0c1c3'
      },
      ink: {
        100: '#373c49',
        200: '#2c303a',
        300: '#21242c',
        400: '#16181d'
      }
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.375rem',
      full: '9999px'
    },
    borderWidth: {
      DEFAULT: '1px',
    },
    fontFamily: {
      sans: ['Inter'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.75rem',
      '3xl': '2.75rem',
      '4xl': '4rem'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  corePlugins: {},
  plugins: [require("daisyui")]
}
