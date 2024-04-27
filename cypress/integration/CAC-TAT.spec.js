/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')    
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = ' Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande Texto exemplo gigante grande'

        cy.get('#firstName').type('Carlos Felipe')
        cy.get('#lastName').type('Silva de Oliveira')
        cy.get('#email').type('felipecarloscontato@gmail.com')
        cy.get('#open-text-area').type('text')
        cy.get('button[type="submit"]').click()    
        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Carlos Felipe')
        cy.get('#lastName').type('Silva de Oliveira')
        cy.get('#email').type('felipecarloscontatogmail.com')
        cy.get('#open-text-area').type('text')
        cy.get('button[type="submit"]').click()    
        cy.get('.error').should('be.visible')
    })
    it('campo telefone continua vazio quando preenchido com valor não numérico', function(){
        cy.get('#phone')
        .type('dasdda%¨¨$')
        .should('have.value','')
    })
    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
        cy.get('#firstName').type('Carlos Felipe')
        cy.get('#lastName').type('Silva de Oliveira')
        cy.get('#email').type('felipecarloscontatogmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('text')
        cy.get('button[type="submit"]').click()     

        cy.get('.error').should('be.visible')
    })
})