/// <reference types="cypress" />
var faker = require('faker');

describe ('Funcionalidade Pré-cadastro', () => {
     beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
        it('Deve realizar pré-cadastro realizado com sucesso', () => {
          let primeironomeFaker = faker.name.firstName()
          let sobrenomeFaker = faker.name.lastName()
          let emailFaker = faker.internet.email(sobrenomeFaker)  
        
          cy.get('#reg_email').type(emailFaker)
          cy.get('#reg_password').type('123##testE')
          cy.get(':nth-child(4) > .button').click()

          cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
          cy.get('#account_first_name').type(primeironomeFaker)
          cy.get('#account_last_name').type(sobrenomeFaker)
          cy.get('.woocommerce-Button').click()

          cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
        });
});