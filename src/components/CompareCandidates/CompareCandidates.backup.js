import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOnlyTickets } from "../../state/actions/onlyTickets";
import { fetchOnlyCandidates } from "../../state/actions/onlyCandidates";
import { fetchCandidatesHistory } from "../../state/actions/candidatesHistory";

import { Dates } from "../../utilities/Dates";
import { Candidates } from "../../utilities/Candidates";

import { fetchURL } from "../../fetchURL";

export class CompareCandidatesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getBetween: []
    };
    this.fetchBetween = this.fetchBetween.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchBetween(this.state.from, this.state.to);
  }

  fetchBetween(from, to) {
    console.log(`${fetchURL}/tickethistory/getbetween/${from}/${to}`);

    fetch(`${fetchURL}/tickethistory/getbetween/${from}/${to}`)
      .then(res => res.json())
      .then(data => {
        const filtered = Candidates.getHistoryByTicket(
          data,
          this.props.match.params.idTicket
        );
        return this.setState({ getBetween: filtered });
      });
  }

  componentWillMount() {
    this.props.fetchOnlyTickets();
    this.props.fetchOnlyCandidates();
    this.props.fetchCandidatesHistory();
  }

  componentDidUpdate() {
    console.log(this.props.candidatesHistory);
    console.log(this.props.candidates);
    console.log(this.props.match.params.idTicket);
    console.log();
  }

  render() {
    const dates = Candidates.getCandidatesDates(
      this.props.candidatesHistory,
      this.props.candidates,
      this.props.match.params.idTicket
    );

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <select
            name="from"
            id="from"
            defaultValue=""
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Select any...
            </option>
            {dates.map((item, i) => (
              <option value={Dates.parseDate(item).replace(/[-]/g, "")} key={i}>
                {Dates.parseDate(item).replace(/[-]/g, "")}
              </option>
            ))}
          </select>

          <select
            name="to"
            id="to"
            defaultValue=""
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Select any...
            </option>
            {dates.map((item, i) => (
              <option value={Dates.parseDate(item).replace(/[-]/g, "")} key={i}>
                {Dates.parseDate(item).replace(/[-]/g, "")}
              </option>
            ))}
          </select>

          <button>Compare now!</button>
        </form>
        <ul>
          {this.state.getBetween.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </React.Fragment>
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

export const CompareCandidates = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareCandidatesComponent);
