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

import {
  formErrors,
  data,
  stepOne,
  stepTwo,
  stepFour,
  stepNine,
  shortForm
} from "../../data/form_data";

import {
  getInternalURL,
  getExternalURL,
  dataInsert,
  validationErrors,
  dataInsertError
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
      cy.server();
      cy.route("POST", "/form/simple").as("getReq");
      shortForm.forEach(element => {
        element.validEmail != undefined
          ? dataInsert(`${element.form}`, element.validEmail)
          : dataInsert(`${element.form}`, element.validString);
      });
      cy.contains("Contact me").click();
      cy.wait("@getReq").then(response => {
        expect(response.status).to.eq(200);
      });
    });
    it("Fill with invalid data", () => {
      // dataInsertError("listingForm.name", data.tooShortString)
      dataInsert("listingForm.name", data.tooShortString);
      dataInsert("listingForm.email", data.invalidEmail);
      dataInsert("listingForm.company", data.tooShortString);
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
      stepOne.forEach(element => {
        element.validEmail != undefined
          ? dataInsert(`${element.form}`, element.validEmail)
          : dataInsert(`${element.form}`, element.validString);
      });
      cy.contains("Next").click();
      stepTwo.forEach(element => {
        element.validURL != undefined
          ? dataInsert(`${element.form}`, element.validURL)
          : dataInsert(`${element.form}`, element.validString);
      });
      cy.get("label:nth-child(1) > svg").click();
      cy.contains("Next").click();
      cy.contains("Next").click();
      stepFour.forEach(element => {
        element.validURL != undefined
          ? dataInsert(`${element.form}`, element.validURL)
          : dataInsert(`${element.form}`, element.validString);
      });
      cy.get("label:nth-child(2) > svg").click();
      range(1, 5).forEach(() => {
        cy.contains("Next").click();
      });
      cy.get(
        "div:nth-child(1) > div > div > div > div > label:nth-child(2) > svg"
      ).click();
      cy.contains("Next").click();
      stepNine.forEach(element => {
        element.validNumber != undefined
          ? dataInsert(`${element.form}`, element.validNumber)
          : dataInsert(`${element.form}`, element.validString);
      });
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
