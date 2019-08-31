describe('My first testing codebreaker', function(){
    it('Check website', function(){
        //Arrange
        //-visit some place
        cy.visit('http://localhost:8080/')
        
    })
    it('Check juega bien', function(){
        //set secret
        cy.get('#secreto')
            .type('1989')
            .should('have.value', '1989')
        cy.contains('Secret').click()
        //secret set
        cy.contains('ok, let the game begin')
        //set adivinar
        cy.get('#adivinar')
            .type('1989')
        cy.contains('Break').click()
        //adivina secret
        cy.contains('XXXX')
    })
})