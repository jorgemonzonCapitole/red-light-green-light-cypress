export const CONFIG_CONST = {
  app: {
    host: "https://game-ionic-pwa.valdepeace.com",
  },
  home: {
    path: "/create-user",
    selector: "app-home",
    titlePage: "Ionic App",
    usernameLocator:
      "//*[@id='main-content']/app-home/ion-content/form/ion-col/ion-row[3]/ion-input/input",
    usernameTest: "usernameTest",
    joinButtonLocator:
      "//*[@id='main-content']/app-home/ion-content/form/ion-col/ion-row[4]/ion-button",
  },
  game: {
    path: "/play-screen",
    selector: "app-play-screen",
    titlePageLocator:
      "//*[@id='main-content']/app-play-screen/ion-header/ion-item/ion-title",
    highScoreLocator:
      "//*[@id='main-content']/app-play-screen/ion-content/ion-col[1]/ion-row/ion-label",
    scoreLocator:
      "//*[@id='main-content']/app-play-screen/ion-content/ion-col[3]/ion-row/ion-label",
    leftButtonLocator:
      "//*[@id='main-content']/app-play-screen/ion-content/ion-col[4]/ion-row/ion-button[1]",
    rigthButtonLocator:
      "//*[@id='main-content']/app-play-screen/ion-content/ion-col[4]/ion-row/ion-button[2]",
  },
};
