/// <reference types="cypress" />
// @ts-check
describe('01', () => {
  it('loads', () => {
    // application should be running at port 3000
    cy.visit('localhost:3000');

    // passing assertions
    // https://on.cypress.io/get
    cy.get('.new-todo').get('footer');

    // this assertion fails on purpose
    // can you fix it?
    // https://on.cypress.io/get
    cy.contains('h1', 'Todos App');

    // also good practice is to use data attributes specifically for testing
    // see https://on.cypress.io/best-practices#Selecting-Elements
    // which play well with "Selector Playground" tool
    // how would you do select this element?
  });
});
