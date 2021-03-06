// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('github-issue.json').then((res) => {
      cy.route('GET', 'https://api.github.com/repos/facebook/react/issues?page=1&amp;per_page=10', [res]).as("fetchIssueList");
    });
  });

  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', '課題');
  });

  it('move /issues', () => {
    cy.get('#nav a').click();
    cy.location("pathname").should('eq', '/issues');
    cy.get('.issue-list-view');
    cy.get('.issue-list-view .issue-list-item').should('have.length', 10);
  });

  it('issue detail', () => {
    cy.get('.issue-list-view .issue-list-item:first a').click();
    cy.location("pathname").should((pathname) => {
      expect(pathname.match(/\/issues\/[0-9]+/)).to.ok;
    });
    cy.get('.issue-detail-view');
    cy.get('.issue-detail-view h2');
  });
});