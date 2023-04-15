class AddCustomerPage{

    addCustomer(customerDetails){

        cy.get('input[ng-model="fName"]').type(customerDetails.firstName)
        cy.get('input[ng-model="lName"]').type(customerDetails.lastName)
        cy.get('input[ng-model="postCd"]').type(customerDetails.postCode)
        
        cy.xpath('//button[text()="Add Customer"]').click();

        // verify popup with success message  
        cy.on('window:alert', (alertText) => {
            //assertions
            cy.log(alertText)
            expect(alertText).to.contains('Customer added successfully');
        })

    }

}

export default new AddCustomerPage()