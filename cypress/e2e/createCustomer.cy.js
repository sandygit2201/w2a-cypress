import utils from "../support/utils";


describe('add customer test scenarios', () => {

    it('Add a customer and verity', () => {
        //  invoke base url 
        cy.visit('/');
        // login to manager account  
        cy.contains('Bank Manager Login').click();
        cy.contains('Add Customer').should('be.visible');

        // Add customer 
        cy.contains('Add Customer').click()
        cy.contains('Last Name').should('be.visible')

        // create customer by adding customer details
        let customerLastName = 'peter' + utils.getRandomString()

        cy.get('input[ng-model="fName"]').type('mike')
        cy.get('input[ng-model="lName"]').type(customerLastName)
        cy.get('input[ng-model="postCd"]').type('12345')
        
        cy.xpath('//button[text()="Add Customer"]').click();

        // verify popup with success message  
        cy.on('window:alert', (alertText) => {
            //assertions
            cy.log(alertText)
            expect(alertText).to.contains('Customer added successfully');
        })

       //verify customer that has been added 

       cy.get("button[ng-class='btnClass3']").click()
       cy.get("input[placeholder='Search Customer']").type(customerLastName)
       cy.xpath(`//td[text()='${customerLastName}']`).should('be.visible')


       // assert account create message in case no account exists 

       cy.get('button.home').click()
       cy.contains('Customer Login').click()

       let customerName = 'mike ' + customerLastName

       cy.get('#userSelect').select(customerName)
       cy.xpath('//button[text()="Login"]').click()

       let messageOnLogin = `Welcome ${customerName} !! Please open an account with us`

       cy.contains(messageOnLogin).should('be.visible')

       // add account-1 for the customer  
       cy.get('button.home').click()
       cy.contains('Bank Manager Login').click();
       cy.get('button[ng-class="btnClass2"]').click()
       cy.get('#userSelect').select(customerName)
       cy.get('#currency').select('Pound')
       cy.contains('Process').click()

       cy.on('window:alert', (alertText) => {
        //assertions
        cy.log(alertText)
        expect(alertText).to.contains('Account created successfully');
        
    })

      // add account-2 for the customer  
      cy.get('button.home').click()
      cy.contains('Bank Manager Login').click();
      cy.get('button[ng-class="btnClass2"]').click()
      cy.get('#userSelect').select(customerName)
      cy.get('#currency').select('Pound')
      cy.contains('Process').click()

      cy.on('window:alert', (alertText) => {
       //assertions
       cy.log(alertText)
       expect(alertText).to.contains('Account created successfully');
       
   })

//    verify number of account added 

cy.get('button.home').click()
       cy.contains('Customer Login').click()

       cy.get('#userSelect').select(customerName)
       cy.xpath('//button[text()="Login"]').click()

       cy.get('#accountSelect').find('option').should('have.length',2)


       // deposit and amount 


       
      // search and delete customer 


    })

})
