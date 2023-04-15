
class DepositPage{

    depositAmount(amount){
        cy.get('input[type="number"]').type(amount)
        cy.xpath("//button[text()='Deposit']").click()
        cy.contains('Deposit Successful').should('be.visible')
        cy.xpath("(//div[@ng-hide='noAccount']/strong)[2]").invoke('text').then(balance=>{
            cy.setLocalStorage('balanceAmount',balance)
          })
    }

}

export default new DepositPage();