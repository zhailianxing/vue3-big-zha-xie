module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,  // 避免找不到 Babel 配置文件的错误
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};