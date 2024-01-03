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

const shop = new Shop()

export {shop}