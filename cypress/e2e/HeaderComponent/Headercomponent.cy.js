/// <reference types="cypress" />

describe('HeaderComponent', () => {
    beforeEach(() => {
        cy.visit('https://truck-me.vercel.app/');
    });

    it('renders the logo with the correct alt text', () => {
        cy.get('#logo').should('have.attr', 'alt', 'TruckMe Logo');
    });

    it('renders the navigation links', () => {
        cy.get('nav').should('exist');

        cy.get('nav ul li').should('have.length', 4)
            .then((navItems) => {
                expect(navItems.eq(0)).to.contain.text('Home');
                expect(navItems.eq(1)).to.contain.text('Sobre Nós');
                expect(navItems.eq(2)).to.contain.text('Serviços');
                expect(navItems.eq(3)).to.contain.text('Contatos');
            });
    });
});
