// https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
}
