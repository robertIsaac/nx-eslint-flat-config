import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';

export default [
  {
    plugins: {
      ts,
    },
    languageOptions: {
      parser: tsParser,
    },
    files: ['**/*.ts'],
    rules: {
      'ts/no-unnecessary-condition': 'error'
    }
  },
];
