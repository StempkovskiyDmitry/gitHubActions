const error = 'error';
const warn = 'warn';
const off = 'off';

module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import', 'eslint-plugin-import-helpers'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'array-bracket-spacing': [error, 'never'],
        'object-curly-spacing': [error, 'always'],
        quotes: [error, 'single'],
        'react-hooks/exhaustive-deps': off,
        'react/no-children-prop': error,
        'react/default-props-match-prop-types': [error],
        'react/require-default-props': [off],
        'react/sort-prop-types': [error],
        'react-native/no-color-literals': error,
        'react-native/no-single-element-style-arrays': error,
        'react-native/no-inline-styles': 2,
        'react-native/no-unused-styles': 2,
        'import/first': 2,
        'react-native/sort-styles': [
          warn,
          'asc',
          { ignoreClassNames: true, ignoreStyleProperties: false },
        ],
        'react/prefer-stateless-function': error,
        'react/jsx-curly-brace-presence': [error, 'never'],
        'react/no-unstable-nested-components': [error, { allowAsProps: true }],
        'no-undef': off,
        'no-shadow': off,
        'no-console': error,
        'no-unused-vars': off,
        'react/jsx-sort-props': [
          warn,
          {
            callbacksLast: true,
            shorthandFirst: true,
            multiline: 'ignore',
            ignoreCase: true,
            reservedFirst: true,
          },
        ],
        'max-lines': [error, { max: 350, skipBlankLines: true }],
        'arrow-parens': [error, 'as-needed'],
        'import/no-duplicates': error,
        'import-helpers/order-imports': [
          warn,
          {
            newlinesBetween: 'always',
            groups: [
              '/^(react|react-native|react-redux)$/',
              '/#hooks/redux/',
              '/^@/',
              '/^react/',
              'module',
              'absolute',
              '/^#theme/',
              '/^#components/',
              '/^#hooks/',
              '/^#models/',
              '/^#navigators/',
              '/^#screens/',
              '/^#services/',
              '/^#store/',
              '/^#utils/',
              ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
          },
        ],
      },
    },
  ],
};
