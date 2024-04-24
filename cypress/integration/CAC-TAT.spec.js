/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')    
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it.only('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Carlos Felipe')
        cy.get('#lastName').type('Silva de Oliveira')
        cy.get('#email').type('felipecarloscontato@gmail.com')
        cy.get('#open-text-area').type('aqui ele gera um texto aleatório')    
    })
})