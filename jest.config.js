module.exports = {
    verbose: true,
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    modulePaths: [
      "src"
    ]
  };