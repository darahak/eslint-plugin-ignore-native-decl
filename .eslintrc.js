module.exports = {
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
    es2017: true,
    node: true
  }
};
