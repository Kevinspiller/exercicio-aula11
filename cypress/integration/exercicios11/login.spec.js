/// <reference types="cypress" />

describe ('Funcionalidade Login', () => {
     beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve realizar login realizado com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac')
    });

    it('Email não deve ser existente no banco de dados', () => {
        cy.get('#username').type('aluno_ebac@teste999.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain','e-mail desconhecido')
    });

    it('Senha deve ser inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com999')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain','A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
    });
});