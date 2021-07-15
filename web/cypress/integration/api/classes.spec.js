/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
	it('POST - Cadastrar professor', () => {
		cy.api({
			method: 'POST',
			url: `${Cypress.config().apiUrl}/classes`,
			body: {
				name: 'ana',
				avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg',
				whatsapp: '1999999999',
				bio: 'Biografia',
				subject: 'Português',
				cost: 10,
				schedule: [
					{
						week_day: '1',
						from: '09:43',
						to: '15:00',
					},
				],
			},
		}).then(response => {
			expect(response.status).to.eq(201);
		});
	});
});
