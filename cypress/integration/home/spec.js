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

import { formData } from "../../data/form_data";

import { getInternalURL, getExternalURL } from "../../helper";

const DEFAULT_URL = getInternalURL("DEFAULT_URL");
const HOME_URL = getInternalURL("HOME_URL");
const SERVICES_URL = getInternalURL("SERVICES_URL");
const PARTNERS_URL = getInternalURL("PARTNERS_URL");
const TEAM_URL = getInternalURL("TEAM_URL");
const PRICING_URL = getInternalURL("PRICING_URL");

const BITBAY_URL = getExternalURL("BITBAY_URL");
const BITBAYPAY_URL = getExternalURL("BITBAYPAY_URL");

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

  // context("Filling forms", () => {
  //   it("Fill short form with valid data", () => {
  //     cy.contains(openFormButtons[1].innerHTML)
  //       .click()
  //       .then(() => {
  //         cy.contains("listingForm.name")
  //           .click()
  //           .type(formData.string);
  //         cy.get("email").type(formData.validEmail);
  //       });
  //   });
  // });
});
