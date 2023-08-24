const { defineConfig } = require("cypress");
const { pluginGrep } = require("@mmisty/cypress-grep/plugins");
process.env['CYPRESS_SPEC_PATTERN'] = '*.*';

module.exports = defineConfig({
  e2e: {
    env: {
    },
    specPattern: ['cypress/e2e/**/*.cy.js'],
    setupNodeEvents(on, config) {
      pluginGrep(on, config);
      
      // important to return config
      return config;
    },
  },
});
