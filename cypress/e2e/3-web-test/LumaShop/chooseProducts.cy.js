import { shop } from '../../../support/pageObject/lumaShop/baseLumaShop.page'
import {login } from "../../../support/pageObject/lumaShop/login.page"

describe('My Account -> Edit Address', () => {
    before(() => {
        // Mengambil object login yang telah dibuat
        login.visitHomePage()
         // Tambahkan asersi untuk menunggu halaman Dashboard benar-benar terbuka
        cy.contains('New Luma Yoga Collection').should('be.visible')
    })

    it('Shop Products', () => {
        shop.shopProducts()
    })
})
