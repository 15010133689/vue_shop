module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0,
    'object-curly-spacing': 0,
    'vue/no-deprecated-slot-attribute': 0,
    'comma-spacing': 0,
    'quote-props': 0,
    'vue/no-deprecated-slot-scope-attribute': 0,
    'object-curly-newline': 0,
    'no-multiple-empty-lines': 0,
    'object-property-newline': 0,
    'indent': 0
  }
}
