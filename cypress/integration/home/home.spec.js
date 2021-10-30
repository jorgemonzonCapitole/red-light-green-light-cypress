/// <reference types="cypress" />
import { CONFIG_CONST } from "../../config/config";
import { HomePage } from "../../pages/home.page";
import { GamePage } from "../../pages/game.page";

describe("Home page", () => {
  const home = new HomePage();
  const game = new GamePage();
  beforeEach(() => {});

  describe("Happy path", () => {
    it("displays home page", () => {
      home.visit();
      home.getTitlePage().should("eq", CONFIG_CONST.home.titlePage);
      home.getSelector().should("be.visible");
    });

    it("should be show input text", () => {
      home.getUsernameInput().should("be.visible");
    });

    it("should be wirte username", () => {
      home.writeUsername();
      home
        .getUsernameInput()
        .should("have.value", CONFIG_CONST.home.usernameTest);
    });

    it("should be show button JOIN", () => {
      home.getJoinButton().should("be.visible");
    });

    it("should be navigate to Game page", () => {
      home.clickJoinButton();
      game
        .getNavBarTitle()
        .should("include.text", CONFIG_CONST.home.usernameTest);
    });
  });

  describe("Errors", () => {
    it("should be stay in home page", () => {
      home.visit();
      home.clickJoinButton();
      game
        .getNavBarTitle()
        .should("not.include.text", '');
    });
  });
});
