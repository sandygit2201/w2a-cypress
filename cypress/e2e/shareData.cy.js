describe('share data between tests',()=>{

    beforeEach('before each test',()=>{

        cy.restoreLocalStorage()
    })

    afterEach('after each test',()=>{

        cy.saveLocalStorage()
    })

    it('test1',()=>{

        cy.setLocalStorage('name',"sandy")

    })

    it('test 2',()=>{
        cy.getLocalStorage("name").should("equal", "sandy");
    })

})