// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', '課題');
  });
  it('move /issues', () => {
    cy.get('#nav a').click();
    cy.location({
      timeout: 15000
    }).should((url) => expect(url).toContain('/issues'));
  });
});