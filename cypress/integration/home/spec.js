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
  footerButtons,
  pricingButtons
} from "../../data/home";

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
      links.forEach(link => {
        cy.contains(link.innerHTML)
          .click()
          .then(() => {
            // cy.get(`${link.selector}`)
            //   .first()
            //   .scrollIntoView()
            //   .should("be.visible");
            cy.url().should("contain", link.href);
          });
      });
    });

    it("Homepage external links", () => {
      partnersLinks.forEach(link => {
        cy.get(`${link.selector}`).should("have.attr", "href", link.href);
      });
    });
  });
});
