class Login {
    visitHomePage() {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('adrianoqalbi@gmail.com')
        cy.get('#pass').type('adrianoQalbi1')
        cy.get('#send2').click()
    }
    // Jika ada langkah-langkah lain yang ingin dimasukkan ke dalam objek ini, Anda dapat menambahkannya di sini
}

class Shop {
    shopProducts() {
        cy.get('.home-main > .content > .action').click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-size-143-item-172').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#qty').clear().type('2')
        cy.get('#product-addtocart-button > span').click()
        cy.get('.showcart').click()
    }

    // Jika ada langkah-langkah lain yang ingin dimasukkan ke dalam objek ini, Anda dapat menambahkannya di sini
}

class Visit {
    visitMyAccount(){
        // assert login berhasil
        cy.contains('Welcome').should('be.visible')
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
    }
}

const login = new Login()
const shop = new Shop()
const visit = new Visit()

export { login, shop , visit}
