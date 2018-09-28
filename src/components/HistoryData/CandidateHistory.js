import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOnlyTickets } from "../../state/actions/onlyTickets";
import { fetchOnlyCandidates } from "../../state/actions/onlyCandidates";
import { fetchCandidatesHistory } from "../../state/actions/candidatesHistory";

import { Aging } from "../../utilities/Aging";
import { Dates } from "../../utilities/Dates";

import { Row } from "../Row";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { BackButton } from "../BackButton";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { ProgressCandidate } from "../ProgressCandidate";

export class CandidateHistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.ticket = this.ticket.bind(this);
    this.candidate = this.candidate.bind(this);
    this.history = this.history.bind(this);
  }

  componentWillMount() {
    this.props.fetchOnlyTickets();
    this.props.fetchOnlyCandidates();
    this.props.fetchCandidatesHistory();
  }

  ticket() {
    return this.props.tickets.find(
      ticket => Number(ticket.idTicket) === Number(this.props.data.id)
    );
  }

  candidate() {
    return this.props.candidates
      .filter(
        candidate => Number(candidate.ticket) === Number(this.props.data.id)
      )
      .find(
        candidate =>
          Number(candidate.idCandidate) === Number(this.props.data.candidate)
      );
  }

  history() {
    return this.props.candidatesHistory.filter(
      candidate =>
        Number(candidate.idCandidate) === Number(this.props.data.candidate)
    );
  }

  render() {
    const ifCandidates = this.props.candidates.length > 0;

    console.log(this.history());
    console.log(this.history().map(candidate => candidate.realAttibute));

    return (
      <section>
        <TitlesContainer>
          <BackButton path={`/ticket/${this.props.data.id}`} />
          <Title>Candidate History</Title>
        </TitlesContainer>

        <TitlesContainer>
          <Subtitle>Status</Subtitle>
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
            {ifCandidates && (
              <Row className="row rowSolid" key={this.candidate().idCandidate}>
                <td>{this.candidate().name}</td>
                <td>{this.candidate().candidateStatus}</td>
                <td>{this.candidate().level}</td>
                <td>
                  <ProgressCandidate
                    data={{
                      interview: this.candidate().interview,
                      onboarding: this.candidate().onboarding,
                      real: this.candidate().realAttibute,
                      closed: this.candidate().candidateStatus
                    }}
                  />
                </td>
              </Row>
            )}
          </tbody>
        </table>

        <TitlesContainer>
          <Subtitle>Candidate History</Subtitle>
        </TitlesContainer>

        <table className="hasAging History">
          <thead>
            <Row className="row">
              <td>Updated</td>
              <td>Comments</td>
              <td>Interview</td>
              <td>Onboarding</td>
              <td>Priority</td>
              <td>Aging</td>
              <td>Real</td>
              <td>Status</td>
              <td>Area</td>
              <td>Project</td>
              <td>Lvl.</td>
            </Row>
          </thead>
          <tbody>
            {ifCandidates &&
              this.history().map(candidate => (
                <Row className="row rowOutline" key={candidate.updateDate}>
                  <td>
                    <i>{Dates.parseDate(candidate.updateDate)}</i>
                  </td>
                  <td>{candidate.comment}</td>
                  <td>{candidate.interview}</td>
                  <td>{candidate.onboarding}</td>
                  <td>{candidate.priority}</td>
                  <td
                    className={
                      Aging.validation(
                        Aging.calc(
                          candidate.updateDate,
                          this.ticket().startDate
                        )
                      )
                        ? "agingSuccess"
                        : "agingWarning"
                    }
                  >
                    {Aging.calc(candidate.updateDate, this.ticket().startDate)}
                  </td>

                  <td>{candidate.realAttibute}</td>
                  <td>{candidate.candidateStatus}</td>
                  <td>{candidate.mainArea}</td>
                  <td>{candidate.project}</td>
                  <td>{candidate.level}</td>
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
  candidates: state.onlyCandidates.data,
  candidatesHistory: state.candidatesHistory.data
});

const mapDispatchToProps = dispatch => ({
  fetchOnlyTickets: () => dispatch(fetchOnlyTickets()),
  fetchOnlyCandidates: () => dispatch(fetchOnlyCandidates()),
  fetchCandidatesHistory: () => dispatch(fetchCandidatesHistory())
});

export const CandidateHistory = connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateHistoryComponent);
