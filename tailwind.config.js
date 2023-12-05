/* eslint-disable prettier/prettier */
// @ts-check
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: "#ffec70",
          100: "#494000",
          200: "#937f00",
          300: "#dcbf00",
          400: "#ffe227",
          500: "#ffec70",
          600: "#fff08d",
          700: "#fff4a9",
          800: "#fff7c6",
          900: "#fffbe2"
        },
        azure: {
          DEFAULT: "#61d0ff",
          100: "#003146",
          200: "#00638d",
          300: "#0094d3",
          400: "#1bbaff",
          500: "#61d0ff",
          600: "#81d9ff",
          700: "#a0e3ff",
          800: "#c0ecff",
          900: "#dff6ff"
        },
        green: {
          DEFAULT: "#47f6ad",
          100: "#033c24",
          200: "#067949",
          300: "#09b56d",
          400: "#0bf292",
          500: "#47f6ad",
          600: "#6bf8bd",
          700: "#90face",
          800: "#b5fcde",
          900: "#dafdef"
        },
        black: {
          DEFAULT: "#101620",
          100: "#030406",
          200: "#06080c",
          300: "#090d12",
          400: "#0c1118",
          500: "#101620",
          600: "#2e3f5c",
          700: "#4e6a9a",
          800: "#849ac1",
          900: "#c1cde0"
        },
        gray: {
          DEFAULT: "#787a82",
          100: "#18181a",
          200: "#303134",
          300: "#48494e",
          400: "#606268",
          500: "#787a82",
          600: "#93949b",
          700: "#aeafb4",
          800: "#c9cacd",
          900: "#e4e4e6"
        },
        silver: {
          DEFAULT: "#e6edf3",
          100: "#1f3140",
          200: "#3e6180",
          300: "#6791b6",
          400: "#a7bfd5",
          500: "#e6edf3",
          600: "#ecf1f6",
          700: "#f1f5f8",
          800: "#f5f8fa",
          900: "#fafcfd"
        },
        white: {
          DEFAULT: "#ffffff",
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff"
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            p: {
              color: theme("colors.gray.800")
            },
            ul: {
              color: theme("colors.gray.800")
            },
            strong: {
              color: theme("colors.green.500")
            },
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.400")}`
              },
              code: { color: theme("colors.primary.400") }
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.gray.900")
            },
            "h1,h2": {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight")
            },
            h3: {
              fontWeight: "600"
            },
            code: {
              color: theme("colors.azure.600")
            }
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
