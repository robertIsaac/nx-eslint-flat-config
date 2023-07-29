import tsParser from '@typescript-eslint/parser';
import baseConfig from '../eslint.base.config.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.lib.json', 'tsconfig.spec.json'],
        tsconfigRootDir: 'ui',
      },
    },
  },
];
