describe('My Account -> Edit Address', () => {
    before(() => {
        // Langkah-langkah login hanya akan dijalankan sekali sebelum pengujian dimulai
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('adrianoqalbi@gmail.com')
        cy.get('#pass').type('adrianoQalbi1')
        cy.get('#send2').click()

        // Tambahkan asersi untuk menunggu halaman Dashboard benar-benar terbuka
        cy.contains('Welcome').should('be.visible')
    })
})