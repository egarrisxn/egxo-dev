import {defineConfig} from 'eslint/config'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import js from '@eslint/js'
import {FlatCompat} from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: compat.extends('next/core-web-vitals', 'plugin:mdx/recommended'),
    rules: {
      '@next/next/no-img-element': 'off',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-empty-pattern': 'error',
      'no-lone-blocks': 'error',
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true}],
      'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-whitespace-before-property': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
    },
    settings: {
      'mdx/code-blocks': true,
    },
  },
  {
    ignores: ['**/node_modules/', '.git/', '.vscode/', '.next/', 'public/'],
  },
])
