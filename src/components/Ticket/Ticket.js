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

            <Link
              to={`/history/${Number(match.params.idTicket)}`}
              style={{ color: "#51e598", textDecoration: "none" }}
            >
              View ticket history »
            </Link>
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
          <Button>
            <Link to={`/comparecandidate/${Number(match.params.idTicket)}`}>
              Compare Candidates
            </Link>
          </Button>
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
