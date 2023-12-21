module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', ],
  rules: {
    'react/jsx-uses-react': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/destructuring-assignment': [2, 'always'],
    'react/no-unstable-nested-components': [2, { allowAsProps: true }],
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-newline': [
      2,
      { multiline: 'consistent', singleline: 'consistent' },
    ],
    'react/jsx-curly-spacing': [2, { when: 'never' }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-max-props-per-line': [2, { maximum: 3 }],
    'react/jsx-max-depth': [2, { max: 3 }],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/jsx-props-no-multi-spaces': [1],
    'react/jsx-one-expression-per-line': [2],
    'react/jsx-wrap-multilines': [2],
    'react/jsx-tag-spacing': [2],
    'no-unused-vars': 'off',
    'no-nested-ternary': [2],
    'react/no-array-index-key': [2],
    'no-console': 'warn',
    'no-loop-func': [2],
    'react/jsx-no-constructed-context-values': [2], //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-pascal-case': [2], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'newline-per-chained-call': [2],
    'function-paren-newline': ['error', 'consistent'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/no-extraneous-dependencies': 'off', // Was having problems with this in a monorepo. Need help to resolve.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],

    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'no-param-reassign': [
      'error',
      { 
        props: true, 
        ignorePropertyModificationsFor: ['draft', 'acc', 'res'],
      },
    ],
  },
  overrides: [
    {
      files: [
        '*.test.ts',
        '*.cy.ts',
        '*.spec.ts',
        '**/scripts/**.*',
        '**/helpers/**/*',
      ],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/kokoas-server/**/*', './automation/**/*', '**/api-*/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/**.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/quotes': 'off',
      },
    },
  ],
};
