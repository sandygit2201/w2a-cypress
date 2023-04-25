describe('handle iframe',()=>{


    it('iframe',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('#mce_0_ifr').then(iframe=>{

            let body = iframe.contents().find('body')

            cy.wrap(body).find('#id').select('ddlElement')


        })

    })

})