module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // eslintのエラーが治らない場合、extendsの中身を全部消してください
  extends: [
    '@nuxtjs',
    //'prettier',
    //'prettier/vue',
    //'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off'
  }
}
