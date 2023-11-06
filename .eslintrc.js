module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  plugins: ["@typescript-eslint", "jsx-a11y", "prettier", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "next",
    "next/core-web-vitals"
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },
  rules: {
    "prettier/prettier": ["error", {
      "printWidth": 100,
      "tabWidth": 2,
      "trailingComma": "none",
      "bracketSpacing": true,
      "singleQuote": false,
      "semi": true,
      "plugins": ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"]
    }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"]
      }
    ],
    "react/prop-types": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "react/no-unescaped-entities": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  }
};
