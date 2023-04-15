import customerLoginPage from "./customerPages/customerLoginPage"

class HomePage{

    verifyHomePageElements(){
        cy.contains("Customer Login").should('be.visible')
        cy.contains("Bank Manager Login").should('be.visible')
    }

    loginAsCustomer(customerName){
        
        this.verifyHomePageElements()
        cy.contains("Customer Login").click()
        customerLoginPage.loginAsCustomer(customerName)

    }
    
    loginAsManager(){

        this.verifyHomePageElements()
        cy.contains("Bank Manager Login").click()

    }

    navigateToHomePage(){
        cy.get('button.home').click()
    }


}

export default new HomePage()