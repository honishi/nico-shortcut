module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    webextensions: true,
  },
  extends: ["standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
