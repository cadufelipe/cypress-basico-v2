// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//<<<<<<< HEAD
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//>>>>>>> a2dfeafc0bc3d8a8a5d03536f5ce903da5fe1353
Cypress.Commands.add('generateFixture',() => {
    const faker = require('faker')

    cy.writeFile('cypress/fixtures/stories.json', {
        'hits' : Cypress._.times(20, () => {
            return{
                'title': `${faker.lorem.words(3)}`,
                'url': `${faker.internet.url()}`,
                'author': `${faker.name.fistName}`,
                'num_comments': `${faker.datatype.number()}`,
                'point': `${faker.datatype.number()}`,
                'objectID': `${faker.datatype.uuid()}`,
            }
        })
    })
})
