/// <reference types="cypress" />

describe('Teste do formulário de contato', () => {
    it('Preenche o formulário e verifica o alerta de sucesso', () => {
        cy.visit('https://truck-me.vercel.app/');

        cy.get('input[type="text"]').type('John Doe');
        cy.get('input[type="email"]').type('john.doe@example.com');
        cy.get('textarea').type('Mensagem de teste Cypress');

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Form Submitted Successfully !');
        });

        cy.get('button[type="submit"]').click();
    });

    it('Verifica se os campos foram preenchidos corretamente e apresenta erros quando necessário', () => {
        cy.visit('https://truck-me.vercel.app/');

        // Testar email vazio
        cy.get('input[type="text"]').type('John Doe');
        cy.get('textarea').type('Mensagem de teste Cypress');
        cy.get('button[type="submit"]').click();

        cy.get('input[type="email"]:invalid').should('have.length', 1).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });

        // Testar mensagem vazia
        cy.get('input[type="email"]').type('john.doe@example.com');
        cy.get('textarea').clear();
        cy.get('button[type="submit"]').click();

        cy.get('textarea:invalid').should('have.length', 1).then(($textarea) => {
            expect($textarea[0].validationMessage).to.eq('Preencha este campo.');
        });
    });
});

