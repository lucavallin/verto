module.exports = {
  testEnvironment: "jsdom", // Use the DOM environment for testing
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Enhance Jest with testing-library
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy" // Mock CSS imports
  },
  coverageReporters: ["lcov", "text-summary"] // Generate coverage reports
};

// jest.config.js
module.exports = {
  testEnvironment: "jest-environment-jsdom"
  // ... other Jest configuration options
};
