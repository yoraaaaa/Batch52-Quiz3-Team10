// import {login } from "../../../fixtures/lumaShop/userLogin.json"

class Login {
    visitHomePage() {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.fixture('lumaShop/userLogin.json').then((user) => {
            cy.get('#email').type(user.email)
            cy.get('#pass').type(user.pass)
        })
        // cy.get('#email').type('adrianoqalbi@gmail.com')
        // cy.get('#pass').type('adrianoQalbi1')
        cy.get('#send2').click()
    }
    // Jika ada langkah-langkah lain yang ingin dimasukkan ke dalam objek ini, Anda dapat menambahkannya di sini
}
const login = new Login()
export {login}