const loginPage = require("../pages/loginPage");
const adminPage = require("../pages/adminPage");
const patientPage = require("../pages/patientPage");
const appointmentPage = require("../pages/appointmentPage");

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
    patientPage.pagePatientTitle.should("have.text", "Crear Cita");
  });

  it("validate if modal create new patient works", () => {
    patientPage.openModal();
    patientPage.isModalPatientVisible();
  });

  // ? This test is not working issues with conection
  it("should allow to create a new patient", () => {
    patientPage.createNewClient();
  });

  // it("should allow to create a new medical appointment ", () => {
  //   appointmentPage.createNewAppointment();
  // });
});
