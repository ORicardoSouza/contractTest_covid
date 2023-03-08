/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
/**
 * @type {Cypress.PluginConfig}
 */
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// importa allureWriter de "@shelex/cypress-allure-plugin/writer";
module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};