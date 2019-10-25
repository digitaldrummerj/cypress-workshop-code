/// <reference types="cypress" />
// https://github.com/avanslaars/cypress-axe

// 1.
// npm i -D cypress-axe axe-core

// 2.
// At the top of cypress/support/commands.js
// import 'cypress-axe'

// 3.
// uncomment lines in test below

describe('A11y Eample', () => {
  it('Test HomePage', () => {
    cy.visit('/');
    // cy.injectAxe();
    // cy.checkA11y();
  });
});
