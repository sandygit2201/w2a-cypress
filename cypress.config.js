const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')



module.exports = defineConfig({
  projectId: "5csns1",
  e2e: {
    chromeWebSecurity:false,
    // baseUrl:'https://opensource-demo.orangehrmlive.com/',
    // baseUrl:'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    baseUrl:"https://reqres.in/",
    pageLoadTimeout:120000,
    defaultCommandTimeout:10000,
    screenshotOnRunFailure:true,
    retries:2,

    setupNodeEvents(on, config) {
      on('task', {downloadFile})
    },
  },
});

//function to read excel file 
