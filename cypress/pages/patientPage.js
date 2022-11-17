require("cypress-xpath");
class patientPage {
  elements = {
    pageTitle: () => cy.xpath('//*[@id="main-content"]/div[1]/div/h1'),
    patientCreationLink: () => cy.get("#new-patient-link"),
    modalPatientOpen: () => cy.get(".modal-dialog"),
    uniqueCodeGeneratorlink: () => cy.get(".link-to-generate-uniq-government-id col-xs-12 col-sm-10 no-padding"),
    idField: () => cy.get("#patient_government_id"),
    PatientNameField: () => cy.get("#patient_name"),
    lastNameField: () => cy.get("#patient_last_name"),
    phoneField: () => cy.get("#patient_phone"),
    emailField: () => cy.get("#patient_email"),
    occupationField: () => cy.get("#patient_occupation"),
    patientGenderSelect: () => cy.get("#patient_gender"),
    patientAddressField: () => cy.get("#patient_address"),
    dateOfBirthSelect: () => cy.get("#patient_date_of_birth_3i"),
    monthOfBirthSelect: () => cy.get("#patient_date_of_birth_2i"),
    yearOfBirth: () => cy.get("#patient_date_of_birth_1i"),
    createPatientButton: () => cy.get("#new-patient-btn"),
  };

  get pagePatientTitle() {
    return this.elements.pageTitle();
  }

  openModal() {
    this.elements.patientCreationLink().click();
  }

  isModalPatientVisible() {
    this.elements.modalPatientOpen().should("be.visible");
  }

  createNewClient() {
    // this.elements.uniqueCodeGeneratorlink().click();
    // this.elements.idField().type("001MM");
    this.elements.PatientNameField().type("Fender Josue");
    this.elements.lastNameField().type("Mora Calero");
    this.elements.phoneField().type("78900824");
    this.elements.emailField().type("mimail@gmail.com");
    this.elements.occupationField().type("Ingeniero en computacion");
    this.elements.patientAddressField().type("Escalante");
    this.elements.patientGenderSelect().select("Femenino");
    this.elements.dateOfBirthSelect().select("23");
    this.elements.monthOfBirthSelect().select("8");
    this.elements.yearOfBirth().select("1997");
    // this.elements.createPatientButton().click();
  }
}

module.exports = new patientPage();
