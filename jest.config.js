module.exports = {
  transform: {
    '^.+\\.js$': ['babel-jest', { rootMode: 'upward' }]
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.test.js',
    '<rootDir>/*.test.js'
  ],
  transformIgnorePatterns: [
    // 'js-agent.js',
    '/node_modules/'
  ]
};