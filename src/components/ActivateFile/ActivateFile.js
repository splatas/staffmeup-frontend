import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOnlyTickets } from "../../state/actions/onlyTickets";
import { fetchOnlyCandidates } from "../../state/actions/onlyCandidates";
import { fetchTicketsHistory } from "../../state/actions/ticketsHistory";

import { fetchURL } from "../../fetchURL";
import { Button } from "../Button";

export class ActivateFileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.activateFile = this.activateFile.bind(this);
  }

  activateFile() {
    fetch(`${fetchURL}/import/sheetTicketCandidate`)
      .then(res => console.log("Load file status ->", res.status))
      .catch(err => console.log(err));
    this.props.fetchOnlyTickets();
    this.props.fetchOnlyCandidates();
    this.props.fetchTicketsHistory();
  }

  render() {
    return (
      <div onClick={this.activateFile}>
        <Button className="btn btnIcon btnOutline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
          </svg>
          <span>Request new tickets</span>
        </Button>
      </div>
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

export const ActivateFile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivateFileComponent);
