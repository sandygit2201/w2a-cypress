describe('cypress session example',()=>{

    beforeEach('Login to the application',()=>{

        cy.userLoginAndSaveSession('Admin','admin123')
        cy.wait(3000)
        cy.visit('/')
    })

    it.skip('Navigate to admin tab and verity label',()=>{
        
        cy.xpath("//a[@class='oxd-main-menu-item']//span[text()='Admin']").click()
        cy.contains("System Users").should('be.visible')
    })

    it('Navigate to Time and verify label on the page',()=>{
       
        cy.xpath("//a[@class='oxd-main-menu-item']//span[text()='Leave']").click()
        cy.contains("Leave List").should('be.visible')

    })



})