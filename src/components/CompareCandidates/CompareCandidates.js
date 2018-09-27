import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchOnlyCandidates } from "../../state/actions/onlyCandidates";
import { fetchCandidatesHistory } from "../../state/actions/candidatesHistory";

import { fetchURL } from "../../fetchURL";
import { Select } from "../Select";
import { Candidates } from "../../utilities/Candidates";
import { Row } from "../Row";
import { Aging } from "../../utilities/Aging";
import { Dates } from "../../utilities/Dates";

import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { BackButton } from "../BackButton";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { Button } from "../Button";
import { ProgressCandidate } from "../ProgressCandidate";

import "../../Form.css";

const obj = [
  [
    { updateDate: "20180912", name: "lucas", project: "JPM A" },
    { updateDate: "20180931", name: "luc", project: "JPM" }
  ],
  [
    { updateDate: "20180912", name: "gonzalo caba", project: "GTI M" },
    { updateDate: "20180931", name: "gonza", project: "JP" }
  ]
];

export class CompareCandidatesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
      second: "",
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchHistory = this.fetchHistory.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  fetchHistory(ticketNumber, first, second) {
    // `${fetchURL}/tickethistory/getticketstocompare/${ticketNumber}/${first}/${second}`

    fetch(
      `${fetchURL}/candidatehistory/getcandidatetocomparebyticket/${ticketNumber}/${first}/${second}`
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));

    console.log(
      `${fetchURL}/candidatehistory/getcandidatetocomparebyticket/${ticketNumber}/${first}/${second}`
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchHistory(
      this.props.match.params.idTicket,
      this.state.first,
      this.state.second
    );
  }

  componentWillMount() {
    this.props.fetchOnlyCandidates();
    this.props.fetchCandidatesHistory();
  }

  render() {
    const candidates = this.props.candidates;
    const history = this.props.candidatesHistory;
    const idTicket = this.props.match.params.idTicket;
    const ifHistory = this.state.data.length > 0;
    console.log("candidates", this.props.candidates);
    console.log("candidatesHistory", this.props.candidatesHistory);
    console.log(this.props.match.params.idTicket);
    console.log(
      "History Dates",
      Candidates.getCandidatesDates(history, candidates, idTicket)
    );
    console.log("data =>", this.state.data);

    return (
      <section>
        <TitlesContainer>
          <BackButton path={`/ticket/${this.props.match.params.idTicket}`} />
          <Title>Compare candidates</Title>
        </TitlesContainer>

        <TitlesContainer>
          <Subtitle>Filter by dates</Subtitle>
        </TitlesContainer>
        <form onSubmit={this.handleSubmit} className="Form">
          <div className="FormControl">
            <Select
              name="first"
              label="First Date"
              hasDefault={true}
              property="updateDate"
              options={Candidates.getCandidatesDates(
                history,
                candidates,
                idTicket
              )}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormControl">
            <Select
              name="second"
              label="Second Date"
              hasDefault={true}
              property="updateDate"
              options={Candidates.getCandidatesDates(
                history,
                candidates,
                idTicket
              )}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormControl">
            <div>
              <Button>Apply</Button>
            </div>
          </div>
        </form>

        {ifHistory ? (
          <React.Fragment>
            <h3>{this.state.first}</h3>
            <table className="hasAging ProgressCandidate Compare">
              <thead>
                <Row className="row">
                  <td>Name</td>
                  <td>Comment</td>
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
                {this.state.data.map(candidate => (
                  <Row className="row rowSolid" key={candidate[0].idCandidate}>
                    <td>
                      <Link
                        to={`/history/${candidate[0].ticket}-${
                          candidate[0].idCandidate
                        }`}
                      >
                        {candidate[0].nombre}
                      </Link>
                    </td>
                    <td>{candidate[0].comment}</td>
                    <td>{candidate[0].candidateStatus}</td>
                    <td>{candidate[0].level}</td>
                    <td>
                      <ProgressCandidate
                        data={{
                          interview: candidate[0].interview,
                          onboarding: candidate[0].onboarding,
                          real: candidate[0].realAttribute,
                          closed: candidate[0].candidateStatus
                        }}
                      />
                    </td>
                  </Row>
                ))}
              </tbody>
            </table>

            <h3>{this.state.second}</h3>
            <table className="hasAging ProgressCandidate Compare">
              <thead>
                <Row className="row">
                  <td>Name</td>
                  <td>Comment</td>
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
                {this.state.data.map(candidate => (
                  <Row className="row rowSolid" key={candidate[1].idCandidate}>
                    <td>
                      <Link
                        to={`/history/${candidate[1].ticket}-${
                          candidate[1].idCandidate
                        }`}
                      >
                        {candidate[1].nombre}
                      </Link>
                    </td>
                    <td>{candidate[1].comment}</td>
                    <td>{candidate[1].candidateStatus}</td>
                    <td>{candidate[1].level}</td>
                    <td>
                      <ProgressCandidate
                        data={{
                          interview: candidate[1].interview,
                          onboarding: candidate[1].onboarding,
                          real: candidate[1].realAttribute,
                          closed: candidate[1].candidateStatus
                        }}
                      />
                    </td>
                  </Row>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        ) : (
          <p>Please, select at least two dates.</p>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  candidates: state.onlyCandidates.data,
  candidatesHistory: state.candidatesHistory.data
});

const mapDispatchToProps = dispatch => ({
  fetchOnlyTickets: () => dispatch(fetchOnlyTickets()),
  fetchOnlyCandidates: () => dispatch(fetchOnlyCandidates()),
  fetchCandidatesHistory: () => dispatch(fetchCandidatesHistory())
});

export const CompareCandidates = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareCandidatesComponent);
