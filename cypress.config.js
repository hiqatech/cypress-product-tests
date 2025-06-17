export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
},
    
  },
});
