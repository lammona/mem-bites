// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',  // Use jsdom for simulating the browser environment
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Transform JS/TS files using Babel
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],  // Set up jest-dom for custom assertions
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Optional: If you're using path aliasing in Next.js
    },
  };
  