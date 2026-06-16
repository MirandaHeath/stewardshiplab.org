// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/no-multi-spaces': 'off',
    '@stylistic/operator-linebreak': ['error', 'after'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    'nuxt/nuxt-config-keys-order': 'off',
    'vue/attributes-order': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
});
