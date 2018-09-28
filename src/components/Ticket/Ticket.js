import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchOnlyTickets } from "../../state/actions/onlyTickets";
import { fetchOnlyCandidates } from "../../state/actions/onlyCandidates";

import { Aging } from "../../utilities/Aging";
import { Dates } from "../../utilities/Dates";

import { Row } from "../Row";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { BackButton } from "../BackButton";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { Button } from "../Button";
import { ProgressCandidate } from "../ProgressCandidate";

import { Badge } from "../Badge";

class TicketComponent extends Component {
  componentDidMount() {
    this.props.fetchOnlyTickets();
    this.props.fetchOnlyCandidates();
  }

  render() {
    const { match, tickets, candidates } = this.props;
    const ifTickets = tickets.length > 0;
    const ifCandidates = candidates.length > 0;

    const ticket = tickets.find(
      ticket => Number(ticket.idTicket) === Number(match.params.idTicket)
    );
    const candidate = candidates.filter(
      candidate => Number(candidate.ticket) === Number(match.params.idTicket)
    );

    return (
      <section>
        <TitlesContainer>
          <BackButton path="/" />

          <Title>Ticket Details</Title>
        </TitlesContainer>

        <TitlesContainer>
          <Subtitle>Status</Subtitle>
          <Link to={`/history/${Number(match.params.idTicket)}`}>
            <Button className="btn btnIcon btnOutline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
              </svg>
              <span>View ticket history »</span>
            </Button>
          </Link>
        </TitlesContainer>

        {ifTickets && (
          <React.Fragment>
            <p>
              {ticket.project} ({ticket.description})
            </p>
            <p>
              {ticket.position !== "" && <strong>{ticket.position}</strong>}{" "}
              {ticket.location !== "" && `(${ticket.location})`}
            </p>
          </React.Fragment>
        )}

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
          <Subtitle>Candidates</Subtitle>
          <Link to={`/comparecandidate/${Number(match.params.idTicket)}`}>
            <Button className="btn btnIcon btnOutline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Compare Candidates »</span>
            </Button>
          </Link>
        </TitlesContainer>

        <table className="ProgressCandidate">
          <thead>
            <Row className="row">
              <td>Name</td>
              <td>Status</td>
              <td>Lvl.</td>
              <td>
                <div className="ProgressCandidateHead">
                  <span>Interview</span>
                  <span>Onboarding</span>
                  <span>Real</span>
                  <span>Closed</span>
                </div>
              </td>
            </Row>
          </thead>
          <tbody>
            {ifCandidates &&
              candidate.map(candidate => (
                <Row className="row rowSolid" key={candidate.idCandidate}>
                  <td>
                    <Link
                      to={`/history/${candidate.ticket}-${
                        candidate.idCandidate
                      }`}
                    >
                      {candidate.name}
                    </Link>
                  </td>
                  <td>{candidate.candidateStatus}</td>
                  <td>{candidate.level}</td>
                  <td>
                    <ProgressCandidate
                      data={{
                        interview: candidate.interview,
                        onboarding: candidate.onboarding,
                        real: candidate.realAttribute,
                        closed: candidate.candidateStatus
                      }}
                    />
                  </td>
                </Row>
              ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.onlyTickets.data,
  candidates: state.onlyCandidates.data
});

const mapDispatchToProps = dispatch => ({
  fetchOnlyTickets: () => dispatch(fetchOnlyTickets()),
  fetchOnlyCandidates: () => dispatch(fetchOnlyCandidates())
});

export const Ticket = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketComponent);
