class loginPage {
  elements = {
    user: () => cy.get("#user_email"),
    password: () => cy.get("#user_password"),
    loginInBtn: () => cy.get('input[value="Ingresar"]'),
    messageAlert: () => cy.get(".messenger-message-inner"),
  };

  open() {
    cy.visit("https://app.careymedical.com/users/sign_in");
  }
  get messageLogged() {
    return this.elements.messageAlert();
  }

  login() {
    this.elements.user().type("admin@careymedical.com");
    this.elements.password().type("b.bcZ*WrEhJY83>r>z");
    this.elements.loginInBtn().click();
  }
}

module.exports = new loginPage();
