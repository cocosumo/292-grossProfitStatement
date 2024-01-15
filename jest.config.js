module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  modulePathIgnorePatterns: ['dist/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  modulePaths: ['<rootdir>/src'],
  verbose: true,
  globals: {
    kintone : undefined,
    XMLHttpRequest: undefined,
    'ts-jest': {
      isolatedModules: true,
    },
  },
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "<rootDir>/src/app/main.ts",
    ".tsx" // Temporarily hide from coverage reports. Re-enable when there are component unit tests.
  ],

  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/@api/$1',    
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
