const nextJest = require('next/jest.js')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  coverageProvider: 'v8',
  transformIgnorePatterns: [
    'node_modules/(?!(nanoid|@sanity)/)',
  ],
}

module.exports = createJestConfig(customJestConfig)