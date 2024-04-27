Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Carlos Felipe')
    cy.get('#lastName').type('Silva de Oliveira')
    cy.get('#email').type('felipecarloscontato@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click() 
})