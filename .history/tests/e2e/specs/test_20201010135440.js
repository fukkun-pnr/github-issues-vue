// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/issues?page=**').as("fetchIssueList");
  });

  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', '課題');
  });

  it('move /issues', () => {
    cy.get('#nav a').click();
    cy.location("pathname").should('eq', '/issues');
    cy.get('.issue-list-view .issue-list-item').should('have.length', 10);
  });

  it('issue detail', () => {
    cy.get('.issue-list-view .issue-list-item:first').click();
  });

  it('pagenation', () => {

  });
});