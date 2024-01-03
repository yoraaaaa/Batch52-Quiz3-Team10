import "../../commands"

class Login {
    visitHomePage() {
        cy.visit('https://magento.softwaretestingboard.com/')
        // Klik text Sign-In
        cy.get('.panel > .header > .authorization-link > a').click()
        // Melakukan Login dengan memanggil perintah dari commands.js
        cy.loginWithFixture()
        // Melakukan klik button SignIn
        cy.get('#send2').click()
    }
    // Jika ada langkah-langkah lain yang ingin dimasukkan ke dalam objek ini, Anda dapat menambahkannya di sini
}
const login = new Login()
export {login}