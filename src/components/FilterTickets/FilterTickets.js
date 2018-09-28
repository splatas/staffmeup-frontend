import React, { Component } from "react";
import { connect } from "react-redux";

import { filteredTickets } from "../../state/actions/filterTickets";
import { Select } from "../Select";
import { Button } from "../Button";

import "./FilterTickets.css";

export class FilterTickets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      all: true,
      open: false,
      closed: false
    };

    this.handleClick = this.handleClick.bind(this);
    // this.filterSearch = this.filterSearch.bind(this);
  }

  // filterSearch() {
  //   const { project, profile, seniority } = this.props.filterTickets;

  //   const filtered = this.props.tickets
  //     .filter(ticket => ticket.project === project)
  //     .filter(ticket => ticket.profile === profile)
  //     .filter(ticket => ticket.seniority === seniority);

  //   console.log(filtered);
  //   this.props.filtered(filtered);
  // }

  handleClick(e) {
    const name = e.target.name;
    this.setState({
      all: false,
      open: false,
      closed: false
    });
    this.setState(prevState => ({ [name]: !prevState[name] }));
  }

  render() {
    return (
      <div className="FilterTickets by">
        <Button
          name="all"
          onClick={this.handleClick}
          className={`btn ${this.state.all && `btnSelected`}`}
        >
          All
        </Button>
        <Button
          name="open"
          onClick={this.handleClick}
          className={`btn ${this.state.open && `btnSelected`}`}
        >
          Not Closed
        </Button>
        <Button
          name="closed"
          onClick={this.handleClick}
          className={`btn ${this.state.closed && `btnSelected`}`}
        >
          Only Closed
        </Button>
      </div>
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
