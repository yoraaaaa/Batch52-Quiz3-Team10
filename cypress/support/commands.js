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

// Perintah Login dengan memanggil data fixtures/lumaShop/userLogin.json
Cypress.Commands.add('loginWithFixture', () => {
    // Mengambil data dari direktori
    cy.fixture('lumaShop/userLogin.json').then((user) => {
        cy.get('.panel > .header > .authorization-link > a').click()
        // Mengambil data json untuk mengisi email dan password
        cy.get('#email').type(user.email)
        cy.get('#pass').type(user.pass)
    })
})


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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })