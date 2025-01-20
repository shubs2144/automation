module.exports = {
  default: {
    require: ['./step-definitions/*.ts'], // Step definitions
    format: ['progress', 'html:reports/cucumber-report.html'], // Report format
    parallel: 1, // Number of threads to run
    worldParameters: {
      browserName: 'chromium',
    },
    requireModule: ['ts-node/register'], // Compile TypeScript
  },
};