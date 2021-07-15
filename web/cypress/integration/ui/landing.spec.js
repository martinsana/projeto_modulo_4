/// <reference types="cypress" />

const larguras = [1200, 1090];

larguras.forEach(largura => {
	context('Landing', () => {
		beforeEach(() => {
			cy.visit('/');
			cy.viewport(largura, 1900);
		});

		it('Navegar para cadastro de aulas', () => {
			cy.get('div a.give-classes').click();
			cy.url().should('contain', 'give-classes');
		});

		it('Navegar para pesquisa de professores', () => {
			cy.get('div a.study').click();
			cy.url().should('contain', 'study');
		});
	});
});
