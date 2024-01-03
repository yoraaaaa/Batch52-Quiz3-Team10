import {visit } from "../../../support/pageObject/lumaShop/baseLumaShop.page"
import {login } from "../../../support/pageObject/lumaShop/login.page"

describe('My Account -> Edit Address', () => {
    before(() => {
        // Mengambil object login yang telah dibuat
        login.visitHomePage()
        // Tambahkan asersi untuk menunggu halaman Dashboard benar-benar terbuka
        cy.contains('Welcome').should('be.visible')
    })
    
    // Viisit My Account -> Edit Address
    it('Visit-My Account', () => {
        visit.visitMyAccount()
    })
    
    // it('Edit Address', () => {
    //     // ...
    // })

})
