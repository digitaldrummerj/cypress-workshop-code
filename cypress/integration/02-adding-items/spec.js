/// <reference types="cypress" />
// Note: the tests we are about to write are NOT resetting the previously added Todo items. Delete the Todo items before each test manually.  We will reset the previously saved Todo items in section "4 Reset State".
describe('02', () => {
  it('2. loads', () => {
    // application should be running at port 3000
    cy.visit('localhost:3000');
    cy.contains('h1', 'todos');
  });

  it('starts with zero items', () => {
    // check if the list is empty initially
    //   find the selector for the individual TODO items
    //   in the list
    //   use cy.get(...) and it should have length of 0
    //   https://on.cypress.io/get
  });

  it('adds two items', () => {
    // repeat twice
    //    get the input field
    //    type text and "enter"
    //    assert that the new Todo item has been added added to the list
  });

  it('can add many items', () => {
    const N = 5;
    for (let k = 0; k < N; k += 1) {
      // add an item
    }
    // check number of items
  });

  it('can mark items as completed', () => {
    // add a few items
    // mark items as completed
    // select completed items and confirm their number
  });

  // Refactor 1:  Add visit to before each test.  Make sure to avoid duplication
  // Hint:  before runs before the 1st test
  // Hint: beforeEach runs before each test

  // Refactor 2:  Move Url into cypress.json
  // Hint:  look at https://on.cypress.io/configuration

  // Refactor 3: Make Helper function to add todo item
  // Hint: It is just JavaScript

  // Bonus:
  // ***** Unit vs E2E
  // - if you are describing how code works: unit test
  // - if you are describing how code is used by the user: end-to-end test

  // ***** Core concepts
  // https://on.cypress.io/writing-and-organizing-tests

  // ***** Organize tests using folder structure and spec files
  // cypress/integration/
  //   featureA/
  //     first-spec.js
  //     second-spec.js
  //   featureB/
  //     another-spec.js
  //     errors-spec.js

  // ***** Organize tests inside a spec using Mocha functions
  // describe('Feature A', () => {
  //   beforeEach(() => {})

  //   it('works', () => {})

  //   it('handles error', () => {})

  //   // context is alias of describe
  //   context('in special case', () => {
  //     it('starts correctly', () => {})

  //     it('works', () => {})
  //   })
  // })

  // *****
});
