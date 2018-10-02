import { internal, external } from "./url";

import { lens, path, lensProp } from "ramda";

export const getInternalURL = urlName => {
  const url = internal[urlName];

  const protocol = Cypress.env("PROTOCOL");
  const host = Cypress.env("HOST");
  const port = Cypress.env("PORT");
  const _port = port ? `:${port}` : "";

  const baseName = `${protocol}://${host}${_port}`;
  return new URL(url, baseName).href;
};

export const getExternalURL = urlName => {
  return external[urlName];
};

export const dataInsert = (formName, enterFormData) => {
  cy.get(`input[name="${formName}"]`)
    .click({ force: true })
    .type(enterFormData);
};

export const dataInsertError = (formName, enterFormData, errorSelector) => {
  const errorMessage = path(enterFormData);
  cy.get(`input[name="${formName}"]`)
    .focus()
    .type(enterFormData)
    .blur();
  cy.get(errorSelector)
    .should("be.visible")
    .contains(`${errorMessage}`);
};

export const validationErrors = (label, enterErrorData) => {
  cy.get(`${label}`)
    .contains(`${enterErrorData}`)
    .should("be.visible");
};

export const emailGenerator =
  Math.random()
    .toString(36)
    .substring(2, 15) + "@gmail.com";
