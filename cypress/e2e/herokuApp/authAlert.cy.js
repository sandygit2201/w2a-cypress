describe('Handle Auth alert', () => {

    it('Enter user credentials on auth alert', () => {

        cy.visit('https://the-internet.herokuapp.com/basic_auth',
            {
                auth: {
                    username: "admin",
                    password: "admin"
                }
            })

        cy.contains("Congratulations! You must have the proper credentials.")
            .should('be.visible')


    })

})