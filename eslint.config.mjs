import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:mdx/recommended',
    ],
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-no-undef': 'off',
    },
  }),
  {
    ignores: [
      '**/node_modules/',
      '.git/',
      '.vscode/',
      '.vercel/',
      '.next/',
      'public/',
      'next-env.d.ts',
    ],
  },
]

export default eslintConfig
