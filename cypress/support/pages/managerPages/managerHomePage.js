class ManagerHome{

    navigateToAddCustomerPage(){
        cy.contains('Add Customer').click();
    }

}

export default new ManagerHome()