const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    baseUrl:'https://opensource-demo.orangehrmlive.com/',
    // baseUrl:'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    pageLoadTimeout:30000,
    defaultCommandTimeout:10000

    // setupNodeEvents(on, config) {
    //   require("cypress-localstorage-commands/plugin")(on, config);
    //   return config;
    // },
  },
});
