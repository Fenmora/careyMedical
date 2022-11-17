const loginPage = require("../pages/loginPage");
const adminPage = require("../pages/adminPage");

describe("my login application", () => {
  it("should login to carey medical app", () => {
    loginPage.open();
    loginPage.login();
    loginPage.messageLogged.should("have.text", "Sesión iniciada con éxito.");
  });
});

describe("my agenda application", () => {
  it("should select date from agenda", () => {
    adminPage.openAgenda();
  });
});
