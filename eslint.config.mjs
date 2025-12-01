import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import * as mdx from 'eslint-plugin-mdx'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    name: 'mdx/recommended',
    files: ['**/*.mdx'],
    ...mdx.flat,
  },
  {
    rules: {
      '@next/next/no-img-element': 'off',
      // '@typescript-eslint/no-explicit-any': 'off',
      // '@typescript-eslint/no-unused-vars': 'off',
      // 'react-hooks/exhaustive-deps': 'off',
      // 'react/jsx-no-undef': 'off',
    },
  },
  globalIgnores([
    '.git/',
    '.vscode/',
    '.vercel/',
    '.next/**',
    'public/',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '**/node_modules/',
  ]),
  prettier,
])

export default eslintConfig
