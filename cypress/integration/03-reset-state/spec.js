/// <reference types="cypress" />
describe('04', () => {
  beforeEach(() => {
    // application should be running at port 3000
    // and the "localhost:3000" is set as "baseUrl" in "cypress.json"
    cy.visit('/');
  });
  it('loads', () => {
    cy.contains('h1', 'todos');
  });
  /**
   * Adds a todo item
   * @param {string} text
   */
  const addItem = text => {
    cy.get('.new-todo').type(`${text}{enter}`);
  };
  it('adds two items', () => {
    addItem('first item');
    addItem('second item');
    cy.get('li.todo').should('have.length', 2);
  });

  // Refactor 1:  Only reset if on localhost
  // Hint 1: check if Cypress baseUrl includes localhost
  // Hint 2: if localhost then run beforeEach

  // Best practices
  // reset state before each test
  //   - in our [Best practices guide](https://on.cypress.io/best-practices)
  //  - use [`cy.request`](https://on.cypress.io/request), [`cy.exec`](https://on.cypress.io/exec), [`cy.task`](https://on.cypress.io/task)
});
