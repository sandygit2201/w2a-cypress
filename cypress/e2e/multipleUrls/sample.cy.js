describe('',()=>{

    it('get data form source 1',()=>{
        cy.visit('url1')
        // script to get ur data 
        cy.setLocalStorage('some data')
        
    })

    it('get data form source 1',()=>{
        cy.visit('url2')
        // script to get ur data 
        cy.getLocalStorage('somedata')
    })



})