
class CustomerLoginPage{

    loginAsCustomer(customerName){
        cy.get('#userSelect').select(customerName)
        cy.contains('Login').click();

        cy.contains(`Welcome ${customerName} !! `).should('be.visible')
    }

}

export default new CustomerLoginPage()