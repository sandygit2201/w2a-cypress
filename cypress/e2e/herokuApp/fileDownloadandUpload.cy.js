describe('File Download and upload', () => {

    it.only('download file using browser', () => {

        cy.visit('https://the-internet.herokuapp.com/download')
        cy.contains('test1.pdf').click()

    })

    it.skip('download file using url', () => {

        cy.downloadFile('https://the-internet.herokuapp.com/download/upload-me.txt', 'cypress/downloads', '123.txt')
    })

    it.skip('upload file ', () => {
        tag: smoke

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload')
            .selectFile('cypress/fixtures/sample.pdf', { action: 'drag-drop' })

        cy.screenshot('upload.jpeg')

        cy.wait(3000)

        cy.get('#file-submit').click()

        cy.contains('File Uploaded!').should('be.visible')

    })

})