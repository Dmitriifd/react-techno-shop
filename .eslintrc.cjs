module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'sonarjs', 'simple-import-sort', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
               // Packages. `react` related packages come first.
               ["^react"],
               // Internal packages.
               ["^(@|@company|@ui|components|utils|config|lib)(/.*|$)", "^@?\\w"],
               // Side effect imports.
               ["^\\u0000"],
               // Parent imports. Put `..` last.
               ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
               // Other relative imports. Put same-folder imports and `.` last.
               ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$", "^\\/(?!/?$)"],
               // Style imports.
               ["^.+\\.s?css$"],
            ],
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
