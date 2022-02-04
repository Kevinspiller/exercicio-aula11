/// <reference types="cypress" />

describe ('Funcionalidade Adição de produto ao carrinho', () => {
     beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar o quarto produto da lista e adicionar ao carrinho', () => {
        cy.get('[class="product-block grid"]')
        .eq(3)
        .click() 

        var qtd = 2

        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain',qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });

    it('Deve buscar por roupas masculinas ', () => {
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .CaptionCont > span').click()
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .optWrapper > .options > :nth-child(3) > label').click()
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').click()
        cy.get('.woof_products_top_panel_ul > :nth-child(2)').should('contain','men')
    });

});