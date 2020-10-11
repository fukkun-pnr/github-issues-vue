// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  beforeEach(() => {
    cy.server().route('**/issues?page=**').as("fetchIssueList");
  });

  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', '課題');
  });
  it('move /issues', () => {
    cy.get('#nav a').click();
    cy.get('.issue-list-view').contains('*');
  });
});