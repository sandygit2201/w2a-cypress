describe('custom commands example',()=>{

    it('login as user with custom command',()=>{
        cy.visit('/')

        cy.customerLogin('Harry Potter')

        

    })


})