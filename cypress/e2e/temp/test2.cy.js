describe('share data between tests',()=>{

    beforeEach('before each test',()=>{

        cy.restoreLocalStorage()
    })

    afterEach('after each test',()=>{

        cy.saveLocalStorage()
    })

    it('test 2',()=>{
        cy.getLocalStorage("name").should("equal", "sandy");
        cy.getLocalStorage("balance").should("equal", "0");
        
    })

})