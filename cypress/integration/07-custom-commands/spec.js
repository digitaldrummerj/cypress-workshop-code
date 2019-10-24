/// <reference types="cypress" />
/// <reference path="./custom-commands.d.ts" />
describe('07', () => {
  // 1. create a reusable function for resetting the database
  // 2. create a reusable function for visiting the site
  // 3. create a cypress command (hint:  Cypress.Command.add('', () => {}))
  beforeEach(() => {
    cy.request('POST', '/reset', {
      todos: [],
    });
    console.log('visit this =', this);
    cy.server();
    cy.route('/todos').as('initialTodos');
    cy.visit('/');
    console.log('cy.visit /');
    console.log('waiting for initial todos');
    cy.wait('@initialTodos');
  });

  it('enters 10 todos', function() {
    cy.get('.new-todo')
      .type('todo 0{enter}')
      .type('todo 1{enter}')
      .type('todo 2{enter}')
      .type('todo 3{enter}')
      .type('todo 4{enter}')
      .type('todo 5{enter}')
      .type('todo 6{enter}')
      .type('todo 7{enter}')
      .type('todo 8{enter}')
      .type('todo 9{enter}');
    cy.get('.todo').should('have.length', 10);
  });
});
