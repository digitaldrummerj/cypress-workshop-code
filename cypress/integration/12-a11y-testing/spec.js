/// <reference types="cypress" />
describe('A11y Eample', () => {
  it('Test HomePage', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
