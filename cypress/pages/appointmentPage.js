require("cypress-xpath");
class appointmentPage {
  elements = {
    patientIdField: () => cy.get("#appointment_patient_id"),
    DoctorIdField: () => cy.get("#appointment_doctor_id"),
    appTypeIdField: () => cy.get("#appointment_appointment_type_id"),
    dateStartField: () => cy.get("#appointment_start_time"),
    dateEndField: () => cy.get("#appointment_end_time"),

    appDescriptionField: () => cy.get("#appointment_description"),
    msgConfirmationField: () => cy.get("#appointment_confirmation_message"),

    DoctorReferenceIdField: () => cy.get("#appointment_referencer_doctor_id"),

    createAppButton: () => cy.get('input[value="Guardar"]'),
  };

  createNewAppointment() {
    // this.elements.patientIdField().click();
    this.elements.patientIdField().select("179980", { force: true });
    // this.elements.DoctorIdField().select("9");
    // this.elements.appTypeIdField().select("2136");
    // this.elements.dateStartField().type("17/11/2022 5:00 PM");
    // this.elements.dateEndField().type("17/11/2022 5:00 PM");
    // this.elements.appDescriptionField().type("QA TESTING CONSULTA OFTALMOLOGICA");
    // this.elements.msgConfirmationField().type("QA MENSAJE DE CONFIRMACION ");

    // this.elements.DoctorReferenceIdField().select("1453");
  }
}

module.exports = new appointmentPage();
