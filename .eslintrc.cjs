module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: ['*.cjs'],
  rules: {
  }
}
