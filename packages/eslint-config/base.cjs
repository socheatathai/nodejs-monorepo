module.exports = {
  root: false,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": "off",
    "no-console": "off",
    "no-prototype-builtins": "off"
  },
  ignorePatterns: [
    "node_modules/",
    "build/",
    "dist/",
    "coverage/",
    "public/",
    "uploads/"
  ],
};
