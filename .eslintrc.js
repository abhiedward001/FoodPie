const path = require('path');

module.exports = {
  // Configuration for JavaScript files
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['unicorn', 'prettier', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'no-console': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'no-nested-ternary': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'prefer-promise-reject-errors': 'off',
    'max-len': [2, { code: 110, tabWidth: 2, ignoreUrls: true }],
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    'unicorn/filename-case': ['error', { case: 'kebabCase', ignore: ['/android', '/ios'] }],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      plugins: ['@typescript-eslint', 'unused-imports'],
      extends: ['@react-native-community', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
        'max-params': ['error', 7], // Limit the number of parameters in a function to use object instead
        'max-lines-per-function': ['error', 750],
        'react/no-unstable-nested-components': 'off',
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
        ],
      },
    },
    // Configuration for  translations files (i18next)
    {
      files: ['src/translations/*.json'],
      extends: ['plugin:i18n-json/recommended'],
      rules: {
        'i18n-json/valid-message-syntax': [
          2,
          { syntax: path.resolve('./scripts/i18next-syntax-validation.js') },
        ],
        'i18n-json/valid-json': 2,
        'i18n-json/sorted-keys': [2, { order: 'asc', indentSpaces: 2 }],
        'i18n-json/identical-keys': [2, { filePath: path.resolve('./src/translations/en.json') }],
        'prettier/prettier': [0, { singleQuote: true, endOfLine: 'auto' }],
      },
    },
    {
      // Configuration for testing files
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
