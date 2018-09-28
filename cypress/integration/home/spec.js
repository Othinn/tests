import {
  solutions,
  services,
  services2,
  marketing,
  icoToken,
  legalAndAudit,
  investments,
  quantitative,
  portfolio,
  links,
  partnersLinks,
  openFormButtons,
  openPrivacyPolicy,
  selectors
} from "../../data/home";

import { formErrors } from "../../data/errors";

import { formData } from "../../data/form_data";

import { getInternalURL, getExternalURL } from "../../helper";

const DEFAULT_URL = getInternalURL("DEFAULT_URL");

function dataInsert(formName, enterFormData) {
  cy.get(`input[name="listingForm.${formName}"]`)
    .click({ force: true })
    .type(formData.enterFormData);
}

describe("homepage", () => {
  beforeEach(() => cy.visit(DEFAULT_URL));

  context("Clickable elements", () => {
    it("Homepage navigation", () => {
      cy.get(selectors.footerSelector).within(() => {
        links.forEach(link => {
          cy.contains(link.innerHTML)
            .click()
            .then(() => {
              cy.url().should("contain", link.href);
            });
        });
      });
    });

    it("Homepage external links", () => {
      partnersLinks.forEach(link => {
        cy.get(`${link.selector}`).should("have.attr", "href", link.href);
      });
    });

    it("Opening and closing contact form", () => {
      openFormButtons.forEach(link => {
        cy.contains(link.innerHTML)
          .click()
          .then(() => {
            cy.get("body > div.ReactModalPortal")
              .should("exist")
              .then(() => {
                cy.contains("Close").click();
              });
          });
      });
    });
    it("Open and close Privacy Policy", () => {
      cy.contains(openPrivacyPolicy.innerHTML)
        .click()
        .then(() => {
          cy.get("body > div.ReactModalPortal")
            .should("exist")
            .then(() => {
              cy.contains("Close").click();
            });
        });
    });
  });

  context("Filling short form", () => {
    it("Fill with valid data", () => {
      cy.contains(openFormButtons[1].innerHTML)
        .click()
        .then(() => {
          dataInsert(name, validString)          
          cy.get(`input[name="listingForm.email"]`)
            .click()
            .type(formData.validEmail);
          cy.get(`input[name="listingForm.phone"]`)
            .click()
            .type(formData.phoneNumber);
          cy.get(`input[name="listingForm.company"]`)
            .click()
            .type(formData.validString);
          cy.contains("Contact me").click();
        });
    });
    it("Fill with invalid data", () => {
      cy.contains(openFormButtons[1].innerHTML)
        .click()
        .then(() => {
          dataInsert(name, tooShortString)           
          cy.get(`input[name="listingForm.email"]`)
            .click({ force: true })
            .type(formData.invalidEmail);
          cy.get(`input[name="listingForm.company"]`)
            .click({ force: true })
            .type(formData.tooShortString);
          cy.contains("Contact me").click();
          cy.get(`input[name="listingForm.email"]`).click({ force: true });
          cy.get("form")
            .find()
            .contains(formErrors.tooShortString)
            .should("exist");
          // .should("contain", formErrors.tooShortString)
          // .and("contain", formErrors.invalidEmail);
        });
    });
  });
});
