// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', '課題');
  });
  it(',', () => {
    cy.get('#nav a').click();
    cy.contains(".issue-list-view");
  });
});