'use strict'

module.exports = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after the first failure
  // bail: false,

  // Respect 'browser' field in package.json when resolving modules
  // browser: false,

  // Automatically clear mock calls and instances between every test:
  // Setting this to true only resets the mock usage data, not the implementation. In other words, it only replaces
  // fn.mock.calls and fn.mock.instances properties of a jest mock function.
  clearMocks: true,

  // Automatically reset mock state between every test:
  // A superset of clearMocks:true which is also taking care of resetting the implementation to a no return function.
  // In other words, it will replace the fn.mock object, not just fn.mock.calls and fn.mock.instances.
  // resetMocks: true,

  // Automatically restore mock state between every test:
  // Similar to resetMocks:true, with one important difference.It restores the original implementation of spies between
  // every test. So, in cases where we manually assign things with jest.fn(), we have to take care of implementation
  // restoration ourselves. Read more: https://github.com/facebook/jest/issues/5143#issuecomment-572024312
  //
  // It's "crucial to be enabled"; otherwise tests can hit the mock implementations set by previous tests while the
  // current test needs to hit the actual implementation. We don't want our tests to affect eachother.
  restoreMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: [],

  // The directory where Jest should output its coverage files
  // coverageDirectory: 'var/coverage',

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: ['/node_modules/'],

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: ['text-summary', 'html'],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: null,

  // Make calling deprecated APIs throw helpful error messages
  errorOnDeprecated: true,

  // Force coverage collection from ignored files usin a array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: null,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: null,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   'node_modules'
  // ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   'js',
  //   'json',
  //   'jsx',
  //   'node'
  // ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // An array of regexp patterns, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: 'always',

  // A preset that is used as a base for Jest's configuration
  // preset: null,

  // Run tests from one or more projects
  // projects: null,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: null,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  //roots: [],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: 'jest-runner',

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test.
  setupFilesAfterEnv: ['jest-chain', 'jest-extended', '<rootDir>/jest.setup.js'],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  // setupTestFrameworkScriptFile: null,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   '**/__tests__/**/*.js?(x)',
  //   '**/?(*.)+(spec|test).js?(x)'
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   '/node_modules/'
  // ],

  // The regexp pattern Jest uses to detect test files
  // testRegex: ',

  // This option allows the use of a custom results processor
  // testResultsProcessor: null,

  // This option allows use of a custom test runner
  // testRunner: 'jasmine2',

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: 'http://localhost',

  // Setting this value to 'fake' allows the use of fake timers for functions such as 'setTimeout'
  // timers: 'real',

  // A map from regular expressions to paths to transformers
  // transform: {}

  // An array of regexp patterns that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   '/node_modules/'
  // ],

  // Array of regexp patterns that are matched against all modules before the module loader automatically returns a mock
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: null,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
}
