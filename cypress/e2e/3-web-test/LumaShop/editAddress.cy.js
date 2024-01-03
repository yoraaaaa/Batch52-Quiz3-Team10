import { login ,visit } from "../../../support/pageObject/lumaShop/baseLumaShop.page"

describe('My Account -> Edit Address', () => {
    before(() => {
        // Mengambil object login yang telah dibuat
        login.visitHomePage()
        // Tambahkan asersi untuk menunggu halaman Dashboard benar-benar terbuka
        cy.contains('Welcome').should('be.visible')
    })
    
    it('Visit-My Account', () => {
        visit.visitMyAccount()
    })
    
    // it('Edit Address', () => {
    //     // ...
    // })

    // Dan seterusnya...
})
