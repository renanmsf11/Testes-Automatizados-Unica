const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.magazineluiza.com.br',
    defaultCommandTimeout: 15000,
    viewportHeight: 900,
    viewportWidth: 1400,
    SpecPattern: 'cypress/e2e/RodarTodos.spec.cy.js',
    waitForAnimations: true,
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
