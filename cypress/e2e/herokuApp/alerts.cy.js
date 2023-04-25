describe('Handle js alerts', () => {

    beforeEach('open alerts page', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('JavaScript Alerts')
            .should('be.visible')
    })

    it('Handle simple JS alert', () => {

        cy.contains('Click for JS Alert').click()

        cy.contains('You successfully clicked an alert')
            .should('be.visible')

    })

    it.skip('Handle confirm JS window - accept alert', () => {

        cy.contains('Click for JS Confirm').click()

        cy.contains('You clicked: Ok')
            .should('be.visible')

    })

    it('Handle confirm JS window - cancel alert', () => {

        cy.contains('Click for JS Confirm').click()

        cy.on('window:confirm',()=>false)
        cy.contains('You clicked: Cancel')
            .should('be.visible')

    })

    // debug for not accepting alert 
    it.skip('Handle confirm JS window - verify alert message', () => {

        cy.screenshot()
        cy.contains('Click for JS Confirm').click()

        cy.on('window:confirm',(text)=>{
            cy.log("Message displayed on alert window::"+text)
            expect(text).to.eql('I am a JS Confirm')
        }) 

    })

    
    it.skip('Handle prompt JS window - Enter message on prompt', () => {

       
        cy.contains('Click for JS Prompt').click()

        cy.window().then(window=>{
            cy.stub(window,'prompt').returns('Hello all')
        })


        cy.contains("You entered: Hello all").should('be.visible')

    })



})