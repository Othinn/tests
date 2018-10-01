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
import { range } from "ramda";

import { formErrors } from "../../data/errors";

import { formData } from "../../data/form_data";

import {
  getInternalURL,
  getExternalURL,
  dataInsert,
  validationErrors
} from "../../helper";

const DEFAULT_URL = getInternalURL("DEFAULT_URL");

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

  context("Short form", () => {
    beforeEach(() => {
      cy.contains(openFormButtons[1].innerHTML).click();
    });
    it("Fill with valid data", () => {
      dataInsert("listingForm.name", formData.validString);
      dataInsert("listingForm.email", formData.validEmail);
      dataInsert("listingForm.phone", formData.phoneNumber);
      dataInsert("listingForm.company", formData.validString);
      cy.contains("Contact me").click();
    });
    it("Fill with invalid data", () => {
      dataInsert("listingForm.name", formData.tooShortString);
      dataInsert("listingForm.email", formData.invalidEmail);
      dataInsert("listingForm.company", formData.tooShortString);
      cy.contains("Contact me").click();
      validationErrors(
        "label:nth-child(3) > div > div > div",
        formErrors.tooShortString
      );
      validationErrors(
        "label:nth-child(4) > div > div > div",
        formErrors.invalidEmail
      );
      validationErrors(
        "label:nth-child(6) > div > div",
        formErrors.tooShortString
      );
    });
  });
  context("Long form", () => {
    beforeEach(() => {
      cy.contains(openFormButtons[1].innerHTML).click();
      cy.get("label:nth-child(2) > svg").click();
    });
    it("Long form required fields", () => {
      cy.server();
      cy.route("POST", "/form/complex").as("getReq");
      dataInsert("listingForm.name", formData.validString);
      dataInsert("listingForm.email", formData.validEmail);
      dataInsert("listingForm.company", formData.validString);
      dataInsert("listingForm.position", formData.validString);
      cy.contains("Add file").click();
      cy.contains("Next").click();
      dataInsert("summaryForm.tokenName", formData.validString);
      dataInsert("summaryForm.tokenSymbol", formData.validString);
      dataInsert("summaryForm.website", formData.validURL);
      dataInsert("summaryForm.whitepaper", formData.validURL);
      cy.get("label:nth-child(1) > svg").click();
      cy.contains("Next").click();
      cy.contains("Next").click();
      dataInsert("productForm.developmentProgress", formData.validString);
      cy.get("label:nth-child(2) > svg").click();
      range(1, 5).forEach(() => {
        cy.contains("Next").click();
      });
      cy.get(
        "div:nth-child(1) > div > div > div > div > label:nth-child(2) > svg"
      ).click();
      cy.contains("Next").click();
      dataInsert("promotionsForm.feeProposal", formData.validString);
      dataInsert("promotionsForm.proposalPrice", formData.validNumber);
      cy.contains("Apply").click();
      cy.wait("@getReq").then(response => {
        expect(response.status).to.eq(200);
      });
      cy.get(
        "body > div.ReactModalPortal > div > div > div > div > img"
      ).should("be.visible");
    });
  });
});
