/// <reference types="cypress" />
describe('09', () => {
  it('sets list of todos on the server', () => {
    // load fixture "two-items.json" from the fixtures folder
    cy.fixture('two-items');
    // check that the list has 2 items
    // then use it to make POST request to the "/reset" endpoint
    // just like we did to reset the server state
  });

  it('works if we change the order', function() {
    cy.fixture('two-items')
      .as('list')
      .then(() => {
        // by now the fixture has been saved into "this.list"
        // check that "this.list" has 2 items
        // use it to post to the server
      });
  });
});
