module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    semi: ["error", "always"],
    "no-trailing-spaces": 0,
    quotes: ["error", "double"],
    ignorePatterns: ["**/node_modules", "**/dist"],
  },
};
