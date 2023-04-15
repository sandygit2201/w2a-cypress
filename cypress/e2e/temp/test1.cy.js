describe('share data between tests',()=>{

    beforeEach('before each test',()=>{

        cy.restoreLocalStorage()
    })

    afterEach('after each test',()=>{

        cy.saveLocalStorage()
    })

    it('test1',()=>{

        cy.setLocalStorage('name',"sandy")
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/customer')
        cy.get('#userSelect').select('Harry Potter')
        cy.contains('Login').click()
        cy.contains('Deposit').click()
        cy.get("input[type='number']").type("50")
        cy.xpath("//button[text()='Deposit']").click()
        cy.contains("Deposit Successful").should('be.visible')
        cy.xpath('(//div[@ng-hide="noAccount"]/strong)[2]').invoke('text').then(balance=>{
            cy.setLocalStorage('balance',balance)
        })

    })

})