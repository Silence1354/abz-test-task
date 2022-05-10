module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to plugin:vue/strongly-recommended or plugin:vue/recommended for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'no-shadow': 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier':
      process.env.NODE_ENV !== 'production' ? [
        'error',
        {
          endOfLine: 'auto',
        },
      ] : 'off',
    'vue/no-v-html': 'off',
  },
};
