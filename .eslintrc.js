module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier', // отключает правила, конфликтующие с Prettier
  ],
  rules: {
    // свои правила
    'react/react-in-jsx-scope': 'off', // если ты используешь React 17+
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/order': 'off', // порядок импорта теперь у Prettier
  },
};
