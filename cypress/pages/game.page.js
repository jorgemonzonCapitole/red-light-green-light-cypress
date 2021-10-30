import { CONFIG_CONST } from "../config/config";
require("cypress-xpath");

export class GamePage {
  getSelector() {
    return cy.get(CONFIG_CONST.game.selector);
  }
  getNavBarTitle() {
    return cy.get("ion-title");
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

  getHighScoreValue() {
    return cy.xpath(CONFIG_CONST.game.highScoreLocator);
  }

  getScoreValue() {
    return cy.xpath(CONFIG_CONST.game.scoreLocator);
  }

  clickLeftButton() {
    this.click(CONFIG_CONST.game.leftButtonLocator);
  }

  clickRigthButton() {
    this.click(CONFIG_CONST.game.rigthButtonLocator);
  }

  click(element) {
    const button = cy.xpath(element);
    if (button) {
      button.click();
    }
  }
}
