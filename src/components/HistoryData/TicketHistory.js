import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchOnlyTickets } from "../../state/actions/onlyTickets";
import { fetchOnlyCandidates } from "../../state/actions/onlyCandidates";
import { fetchTicketsHistory } from "../../state/actions/ticketsHistory";

import { Aging } from "../../utilities/Aging";
import { Dates } from "../../utilities/Dates";

import { Row } from "../Row";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { BackButton } from "../BackButton";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { Badge } from "../Badge";
import { Button } from "../Button";

export class TicketHistoryComponent extends Component {
  componentWillMount() {
    this.props.fetchOnlyTickets();
    this.props.fetchOnlyCandidates();
    this.props.fetchTicketsHistory();
  }

  render() {
    const { tickets, ticketsHistory, data } = this.props;
    const ifTickets = tickets.length > 0;

    const ticket = tickets.find(
      ticket => Number(ticket.idTicket) === Number(data)
    );

    const history = ticketsHistory.filter(
      ticket => Number(ticket.idTicket) === Number(data)
    );

    return (
      <section>
        <TitlesContainer>
          <BackButton path={`/ticket/${data}`} />
          <Title>Ticket History</Title>
        </TitlesContainer>
        <TitlesContainer>
          <Subtitle>Status</Subtitle>
        </TitlesContainer>
        <table className="TicketPreview hasAging">
          <thead>
            <Row className="row">
              <td>Ticket</td>
              <td>Profile</td>
              <td>Seniority</td>
              <td>Project</td>
              <td>SR Created On</td>
              <td>Start Date</td>
              <td>Aging</td>
              <td>Status</td>
            </Row>
          </thead>
          <tbody>
            {ifTickets && (
              <Row className="row rowSolid" key={ticket.idTicket}>
                <td>{ticket.idTicket}</td>
                <td>{ticket.profile}</td>
                <td>{ticket.seniority}</td>
                <td>{ticket.project}</td>
                <td>{Dates.parseDate(ticket.createdOn)}</td>
                <td>{Dates.parseDate(ticket.startDate)}</td>
                <td
                  className={
                    Aging.validation(
                      Aging.calc(ticket.updateDate, ticket.startDate)
                    )
                      ? "agingSuccess"
                      : "agingWarning"
                  }
                >
                  {Aging.calc(ticket.updateDate, ticket.startDate)}
                </td>
                <td>
                  <Badge status={ticket.status} />
                </td>
              </Row>
            )}
          </tbody>
        </table>
        <TitlesContainer>
          <Subtitle>Ticket History</Subtitle>
          <Link to={`/compareticket/${data}`}>
            <Button className="btn btnIcon btnOutline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Compare Dates »</span>
            </Button>
          </Link>
        </TitlesContainer>

        {ifTickets && (
          <table className="hasAging History">
            <thead>
              <Row className="row">
                <td>Updated</td>
                <td>Project</td>
                <td>Profile</td>
                <td>Seniority</td>
                <td>SR Created On</td>
                <td>Start Date</td>
                <td>Aging</td>
                <td>Position</td>
                <td>Location</td>
              </Row>
            </thead>
            <tbody>
              {history.map(ticket => (
                <Row className="row rowOutline" key={ticket.updateDate}>
                  <td>
                    <i>{Dates.parseDate(ticket.updateDate)}</i>
                  </td>
                  <td>{ticket.project}</td>
                  <td>{ticket.profile}</td>
                  <td>{ticket.seniority}</td>
                  <td>{Dates.parseDate(ticket.createdOn)}</td>
                  <td>{Dates.parseDate(ticket.startDate)}</td>
                  <td
                    className={
                      Aging.validation(
                        Aging.calc(ticket.updateDate, ticket.startDate)
                      )
                        ? "agingSuccess"
                        : "agingWarning"
                    }
                  >
                    {Aging.calc(ticket.updateDate, ticket.startDate)}
                  </td>
                  <td>{ticket.position}</td>
                  <td>{ticket.location}</td>
                </Row>
              ))}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.onlyTickets.data,
  candidates: state.onlyCandidates.data,
  ticketsHistory: state.ticketsHistory.data
});

const mapDispatchToProps = dispatch => ({
  fetchOnlyTickets: () => dispatch(fetchOnlyTickets()),
  fetchOnlyCandidates: () => dispatch(fetchOnlyCandidates()),
  fetchTicketsHistory: () => dispatch(fetchTicketsHistory())
});

export const TicketHistory = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketHistoryComponent);
