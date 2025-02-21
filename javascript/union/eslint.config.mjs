import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

const config = tseslint.config(
  {
    settings: { react: { version: '18.3' } },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
    files: ['**/src/**/*.ts', '**/src/**/*.tsx'],
  },
);

export default config;
