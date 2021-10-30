/// <reference types="cypress" />
import { CONFIG_CONST } from "../../config/config";
import { HomePage } from "../../pages/home.page";
import { GamePage } from "../../pages/game.page";

describe("Home page", () => {
  const home = new HomePage();
  const game = new GamePage();

  beforeEach(() => {
    home.visit();
    home.writeUsername();
    home.clickJoinButton();
  });

  it("displays game page", () => {
    game
      .getNavBarTitle()
      .should("include.text", CONFIG_CONST.home.usernameTest);
  });

  it("should be show increase score and high score", () => {
    game.clickLeftButton();
    game.clickRigthButton();
    game.clickLeftButton();
    game.clickRigthButton();
    game.getHighScoreValue().should("include.text", 4);
    game.getScoreValue().should("include.text", 4);
  });

  it("should be show decrease score and keep high score", () => {
    game.clickLeftButton();
    game.clickRigthButton();
    game.clickLeftButton();
    game.clickRigthButton();
    game.clickRigthButton();
    game.getHighScoreValue().should("include.text", 4);
    game.getScoreValue().should("include.text", 3);
  });

  it("should be show 0 in high score and score", () => {
    game.clickLeftButton();
    game.clickRigthButton();
    cy.wait(11500); // wait ten seconds
    game.clickLeftButton();
    game.getHighScoreValue().should("include.text", 0);
    game.getScoreValue().should("include.text", 0);
  });
});
