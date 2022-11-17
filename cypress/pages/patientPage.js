require("cypress-xpath");
class adminPage {
  elements = {
    agendaCalendarEvent: () => cy.get(".fc-widget-content"),
  };

  openAgenda() {
    this.elements.agendaCalendarEvent().eq(0).click();
  }
}

module.exports = new adminPage();
