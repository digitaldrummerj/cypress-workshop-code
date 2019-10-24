/// <reference types="cypress" />
describe('09-answer', () => {
  it('sets list of todos on the server', () => {
    // load fixture "two-items.json" from the fixtures folder
    cy.fixture('two-items').then(list => {
      expect(list).to.have.length(2);

      // then use it in the POST request
      cy.request('POST', '/reset', { todos: list });
    });
  });

  it('works if we change the order', function() {
    cy.fixture('two-items')
      .as('list')
      .then(() => {
        // by now the fixture has been saved into "this.list"
        expect(this.list).to.have.length(2);
        cy.request('POST', '/reset', { todos: this.list });
      });
  });
});
