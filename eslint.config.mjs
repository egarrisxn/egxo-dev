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
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'no-useless-concat': 'error',
      'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-empty-pattern': 'error',
      'no-lone-blocks': 'error',
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-return': 'error',
      'no-whitespace-before-property': 'error',
      'object-shorthand': ['error', 'always'],
      'no-unsafe-optional-chaining': 'error',
      'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true}],
    },
    settings: {
      'mdx/code-blocks': true,
    },
  },
])
