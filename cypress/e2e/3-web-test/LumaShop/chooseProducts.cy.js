import { login, shop } from '../../../support/pageObject/lumaShop/baseLumaShop.page'

describe('My Account -> Edit Address', () => {
    before(() => {
        login.visitHomePage()
        cy.contains('New Luma Yoga Collection').should('be.visible')
    })

    it('Shop Products', () => {
        shop.shopProducts()
    })
})
