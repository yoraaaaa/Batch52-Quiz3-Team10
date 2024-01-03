describe('My Account -> Edit Address', () => {
    before(() => {
        // Langkah-langkah login hanya akan dijalankan sekali sebelum pengujian dimulai
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('adrianoqalbi@gmail.com')
        cy.get('#pass').type('adrianoQalbi1')
        cy.get('#send2').click()

        // Tambahkan asersi untuk menunggu halaman Dashboard benar-benar terbuka
        cy.contains('New Luma Yoga Collection').should('be.visible')
    })

    it('Shop Products', () => {
        // Masuk ke halaman Daftar Produk
        cy.get('.home-main > .content > .action').click()
        // Memilih produk yang di kehendaki
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        // Memilih size
        cy.get('#option-label-size-143-item-172').click()
        // Memilih warna
        cy.get('#option-label-color-93-item-50').click()
        // Melakukan penambahan qty
        cy.get('#qty').clear().type('2')
        // Menambahkan Produk ke keranjang
        cy.get('#product-addtocart-button > span').click()
        // Melihat isi keranjang
        cy.get('.showcart').click()
        
    })
})