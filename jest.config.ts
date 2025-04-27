module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
