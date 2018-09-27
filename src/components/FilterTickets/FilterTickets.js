import React, { Component } from "react";
import { connect } from "react-redux";

import { filteredTickets } from "../../state/actions/filterTickets";
import { Select } from "../Select";

export class FilterTickets extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.filterSearch = this.filterSearch.bind(this);
  // }

  // filterSearch() {
  //   const { project, profile, seniority } = this.props.filterTickets;

  //   const filtered = this.props.tickets
  //     .filter(ticket => ticket.project === project)
  //     .filter(ticket => ticket.profile === profile)
  //     .filter(ticket => ticket.seniority === seniority);

  //   console.log(filtered);
  //   this.props.filtered(filtered);
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("Submiting...");
  //   this.filterSearch();
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Select label="Project" name="project" defaultValue="Select any..." />
        <Select label="Profile" name="profile" defaultValue="Select any..." />
        <Select
          label="Seniority"
          name="seniority"
          defaultValue="Select any..."
        />
        <button>Apply filter</button>
      </form>
    );
  }
}

// const mapStateToProps = state => ({
//   tickets: state.onlyTickets.data,
//   filterTickets: state.filterTickets,
//   filteredTickets: state.filterTickets.filtered
// });

// const mapDispatchToProps = dispatch => ({
//   filter: (name, value) => dispatch(filterTickets(name, value)),
//   filtered: value => dispatch(filteredTickets(value))
// });

// export const FilterTickets = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FilterTicketsComponent);
