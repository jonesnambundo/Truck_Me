module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': 'vue3-jest',
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };
  