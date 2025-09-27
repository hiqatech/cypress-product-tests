const { defineConfig } = require("cypress");

module.exports = defineConfig({

reporter:"mochawesome",
    reporterOptions:{
      "reportDir":"reports",
      charts: true,
      reportPageTitle: 'Mochawesome Reporter',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },


  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  e2e: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  },

})


