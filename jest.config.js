/** @type {import('jest').Config} */
const config = {
  projects: [
    'apps/nodejs-api',
    'apps/nodejs-deploy',
    'apps/nodejs-legacy',
    'apps/server-image',
    'apps/upload-image',
    'apps/image-backend',
  ],
  collectCoverageFrom: [
    '**/*.js',
    '!**/*.test.js',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/build/**',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
  coverageReporters: ['text', 'lcov', 'json'],
};

module.exports = config;
