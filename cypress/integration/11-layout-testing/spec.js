/// <reference types="cypress" />
// https://docs.percy.io/docs/cypress

// 1.
// npm install --save-dev @percy/cypress

// 2.
// At the top of cypress/support/commands.js
// import '@percy/cypress';

// 3.
// In cypress/plugins/index.js
// let percyHealthCheck = require('@percy/cypress/task')

// module.exports = (on, config) => {
//   on("task", percyHealthCheck);
// };

// 4.
// # Windows
// $ set PERCY_TOKEN=<your token here>

// # Unix
// $ export PERCY_TOKEN=<your token here>

// 5.
// add to cypress.json
// "testFiles": "**/11*/spec.js",

// 6.
// npx percy exec -- cypress run

describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('/');

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });
});
