/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Conections endpoint', () => {
	it('GET - Obter total de conexões realizadas', () => {
		cy.api({
			method: 'GET',
			url: `${Cypress.config().apiUrl}/connections`,
		}).then(response => {
			expect(response.status).to.eq(200);
			expect(response.duration).lessThan(20);
			expect(response.body).to.have.property('total').to.be.a('number').greaterThan(5);
			expect(response.body.total)
				.an('number')
				.satisfy(totalValue => {
					return totalValue >= 5;
				});
			expect(response.headers).to.have.property('content-type').an('string').equals('application/json; charset=utf-8');
		});
	});
});
