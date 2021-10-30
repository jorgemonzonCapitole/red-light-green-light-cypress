import { CONFIG_CONST } from "../config/config";
require("cypress-xpath");
export class HomePage {
  visit() {
    cy.visit(CONFIG_CONST.app.host);
  }
  getSelector() {
    return cy.get(CONFIG_CONST.home.selector);
  }

  getTitlePage() {
    return cy.title();
  }

  getUsernameInput() {
    return cy.xpath(CONFIG_CONST.home.usernameLocator);
  }

  getJoinButton() {
    return cy.xpath(CONFIG_CONST.home.joinButtonLocator);
  }

  writeUsername() {
    const input = cy.xpath(CONFIG_CONST.home.usernameLocator);
    if (input) {
      input.clear();
      input.type(CONFIG_CONST.home.usernameTest);
    }
  }

  clickJoinButton() {
    const button = cy.xpath(CONFIG_CONST.home.joinButtonLocator);
    if (button) {
      button.click();
    }
  }
}
