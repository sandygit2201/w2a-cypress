import homePage from "../../support/pages/homePage"

describe('test details',()=>{

    before('invoke application',()=>{
        cy.visit('/')
    })

    it('create customer',()=>{
        homePage.loginAsManager()
    })

})