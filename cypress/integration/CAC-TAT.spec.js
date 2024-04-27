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
        cy.contains('button','Enviar').click()    
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Carlos Felipe')
        cy.get('#lastName').type('Silva de Oliveira')
        cy.get('#email').type('felipecarloscontatogmail.com')
        cy.get('#open-text-area').type('text')
        cy.contains('button','Enviar').click()    
        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor não numérico', function(){
        cy.get('#phone')
        .type('dasdda%¨¨$')
        .should('have.value','')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
        cy.get('#firstName').type('Carlos Felipe')
        cy.get('#lastName').type('Silva de Oliveira')
        cy.get('#email').type('felipecarloscontatogmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('text')
        cy.get('button[type="submit"]').click()     

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
            .type('Carlos')
            .should('have.value','Carlos')
            .clear()
            .should('have.value','')
        cy.get('#lastName')
            .type('Oliveira')
            .should('have.value','Oliveira')
            .clear()
            .should('have.value','')    
        cy.get('#email')
            .type('emailexemplo@exemplo.com')
            .should('have.value','emailexemplo@exemplo.com')
            .clear()
            .should('have.value','')
        cy.get('#phone')
            .type('4399999999')
            .should('have.value','4399999999')
            .clear()
            .should('have.value','')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.contains('button','Enviar').click() 
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado',function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto',function(){
        cy.get('#product')
        .select('YouTube')
        .should('have.value','youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)',function(){
        cy.get('#product')
        .select('mentoria')
        .should('have.value','mentoria')
    })

    it('seleciona um produto (Blog) por seu índice',function(){
        cy.get('#product')
        .select(1)
        .should('have.value','blog')
    })

    it.only('marca o tipo de atendimento "Feedback"',function(){
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('have.value','feedback')

    })

    it.only('marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
          })
    })
})