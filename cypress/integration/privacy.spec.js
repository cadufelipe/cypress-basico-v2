Cypress._.times(10, function(){
    it('testa a página da política de privacidade de forma independente', function(){
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
    })

    it.only('preenche a area de texto usando o comando invoke', function(){
        const longText = Cypress._.repeat('0123456789', 20)

        cy.get('#open-text-area')
          .invoke('val', longText)
          .should('have.value',longText)
    })
    
})