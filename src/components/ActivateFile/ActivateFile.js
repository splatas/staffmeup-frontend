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
    console.log("lalalal");
    fetch(`${fetchURL}/import/sheetTicketCandidate`).then(res =>
      console.log("Load file status ->", res.status)
    );
    this.props.fetchOnlyTickets();
    this.props.fetchOnlyCandidates();
    this.props.fetchTicketsHistory();
  }

  render() {
    return (
      <div onClick={this.activateFile}>
        <Button>Request new tickets</Button>
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
