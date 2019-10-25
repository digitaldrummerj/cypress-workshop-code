/// <reference types="cypress" />
describe('04-answer', () => {
  const isLocalHost = () => Cypress.config('baseUrl').includes('localhost');

  if (isLocalHost()) {
    // we can reset data only when running locally
    beforeEach(function resetData() {
      cy.request('POST', '/reset', {
        todos: [],
      });

      // Note: we are using json-server-reset - https://github.com/bahmutov/json-server-reset#readme
    });
  }

  beforeEach(() => {
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

  // Best practices
  // reset state before each test
  //   - in our [Best practices guide](https://on.cypress.io/best-practices)
  //  - use [`cy.request`](https://on.cypress.io/request), [`cy.exec`](https://on.cypress.io/exec), [`cy.task`](https://on.cypress.io/task)
});
