import { Dates } from "./Dates";
export class Tickets {
  static getTicket(tickets = [], ticketNumber = 0) {
    return tickets.find(
      ticket => Number(ticket.idTicket) === Number(ticketNumber)
    );
  }

  static getHistoryOfTicket(history, ticketNumber) {
    return history.filter(
      item => Number(item.idTicket) === Number(ticketNumber)
    );
  }

  static getHistoryDatesOfTicket(history, ticketNumber) {
    return this.getHistoryOfTicket(history, ticketNumber).map(item =>
      Dates.parseDate(item.updateDate)
    );
  }
}
