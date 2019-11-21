module.exports = {
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        args: 'none'
      }
    ],
    'padded-blocks': ['error', 'never']
  }
};
