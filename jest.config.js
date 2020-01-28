module.exports = {
  moduleFileExtensions: [
    "jsx",
    "js"
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: [
    "**/*.(test|spec).(js|jsx)"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "enzyme.js"
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js"
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
