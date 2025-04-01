/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testMatch: ['**/*.test.ts'],
    collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**'],
    coverageDirectory: 'artifacts/coverage',
    coverageReporters: ['html'],
    clearMocks: true,
    testPathIgnorePatterns: ['node_modules/', 'dist/'],
    modulePathIgnorePatterns: ['dist'],
    testTimeout: 2000,
    randomize: true,
    transform: {
        '.*\\.ts$': [
            'ts-jest',
            {
                isolatedModules: true,
            },
        ],
    },
}
