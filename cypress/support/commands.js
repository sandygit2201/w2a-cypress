// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  Cypress.Commands.add('customerLogin',(customerName)=>{

    cy.contains("Customer Login").click()
    cy.get('#userSelect').select(customerName)
    cy.contains('Login').click();
    cy.contains(`Welcome ${customerName} !! `).should('be.visible')

  })

  Cypress.Commands.add('userLoginAndSaveSession',(user,pwd)=>{
    cy.session([user,pwd],()=>{
      cy.visit('/')
      cy.get('input[name="username"]').type(user)
      cy.get('input[name="password"]').type(pwd)
      cy.get('button[type="submit"]').click()
      cy.contains('Dashboard').should('be.visible')
  })
  })