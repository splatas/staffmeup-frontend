import { Dates } from "./Dates";

export class Candidates {
  static getCandidatesByTicket(candidates = [], ticketNumber = 0) {
    return candidates.filter(
      candidate => Number(candidate.ticket) === Number(ticketNumber)
    );
  }

  static getCandidatesDates(history = [], candidates, ticketNumber) {
    let dates = [];
    this.getCandidatesByTicket(candidates, ticketNumber).map(candidate =>
      history.map(
        item =>
          Number(candidate.idCandidate) === Number(item.idCandidate) &&
          dates.push(Dates.parseDate(item.updateDate))
      )
    );

    return dates;
  }

  // static getHistoryByTicket(history = [], ticketNumber) {
  //   return history.filter(
  //     item => Number(item.idCandidate) === Number(ticketNumber)
  //   );
  // }
}
