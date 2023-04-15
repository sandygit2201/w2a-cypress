
class CustomerHomePage{

    navigateToDepositPage(){
        cy.get('button[ng-class="btnClass2"]').click()
        cy.contains('Amount to be Deposited').should('be.visible')
    }

}

export default new CustomerHomePage()