import eslintJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/src/**/*.ts', '**/src/**/*.tsx'],
  ignores: ['**/.storybook/**', '**/dist/**/*.mjs'],
  extends: [
    eslintJs.configs.recommended,
    tseslint.configs.recommended,
    eslintReact.configs.recommended,
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    // Put rules you want to override here
    '@eslint-react/prefer-shorthand-boolean': 'warn',
  },
});
