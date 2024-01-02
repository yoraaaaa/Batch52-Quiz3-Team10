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
    
    it('Visit-My Account', () => {
        // Langkah-langkah lainnya yang melibatkan halaman My Account bisa dilakukan di sini
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        // Tambahkan asersi untuk menunggu halaman My Account benar-benar terbuka
        cy.contains('My Account').should('be.visible')
        // Langkah untuk masuk halaman My Account
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        // Tambahkan asersi untuk menunggu halaman My Account benar-benar terbuka
        cy.contains('Manage Addresses').should('be.visible')
        // ...
        cy.contains('Manage Addresses').should('be.visible')
        // Langkah untuk melakukan Edit Address
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        // Tambahkan asersi untuk menunggu halaman Edit Aaddress benar-benar terbuka
        cy.contains('Edit Address').should('be.visible')
        cy.get('#company').clear().type('Sanber')
        cy.get('#telephone').clear().type('081234567890')
        cy.get('#street_1').clear().type('Jl. Jambu')
        cy.get('#street_2').clear().type('Rt. 04/Rw. 05, Jatibening')
        cy.get('#street_3').clear().type('Pondok Labu')
        cy.get('#city').clear().type('Bekasi')
        // cy.get('#region_id').clear().type('Texas')
        // cy.get('#zip').clear().type('12345')
        // cy.get('#country').select('Ukraine')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        // Tambahkan asersi untuk menunggu halaman My Account benar-benar terupdate
        cy.contains('Address Book').should('be.visible')
    })
    
    // it('Edit Address', () => {
    //     // ...
    // })

    // Dan seterusnya...
})
