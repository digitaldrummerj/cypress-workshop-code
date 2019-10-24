// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// let percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  // on('task', percyHealthCheck);
  // code coverage tasks
  // @see https://on.cypress.io/code-coverage
  // on('task', require('@cypress/code-coverage/task'))
  // use .babelrc file if want to instrument unit tests
  // on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
};
