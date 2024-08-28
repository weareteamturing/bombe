module.exports = {
  root: true,
  extends: ['expo'],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-empty': 'off',
    'react/display-name': 'off',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: false,
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
