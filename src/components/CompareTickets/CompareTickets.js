import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOnlyTickets } from "../../state/actions/onlyTickets";
import { fetchTicketsHistory } from "../../state/actions/ticketsHistory";

import { fetchURL } from "../../fetchURL";
import { Select } from "../Select";
import { Tickets } from "../../utilities/Tickets";

import { Aging } from "../../utilities/Aging";
import { Dates } from "../../utilities/Dates";
import { Row } from "../Row";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { BackButton } from "../BackButton";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { Button } from "../Button";

import "../../Form.css";

export class CompareTicketsComponent extends Component {
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
    fetch(
      `${fetchURL}/tickethistory/getatickettocompare/${ticketNumber}/${first}/${second}`
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));

    console.log(
      `${fetchURL}/tickethistory/getatickettocompare/${ticketNumber}/${first}/${second}`
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
    this.props.fetchOnlyTickets();
    this.props.fetchTicketsHistory();
  }

  render() {
    const history = this.props.ticketsHistory;
    const idTicket = this.props.match.params.idTicket;
    const ifHistory = this.state.data.length > 0;
    console.log("tickets", this.props.tickets);
    console.log("ticketsHistory", this.props.ticketsHistory);
    console.log(this.props.match.params.idTicket);
    console.log(
      "History Dates",
      Tickets.getHistoryDatesOfTicket(history, idTicket)
    );
    console.log("data =>", this.state.data);

    return (
      <section>
        <TitlesContainer>
          <BackButton path={`/history/${this.props.match.params.idTicket}`} />
          <Title>Compare ticket dates</Title>
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
              options={Tickets.getHistoryDatesOfTicket(history, idTicket)}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormControl">
            <Select
              name="second"
              label="Second Date"
              hasDefault={true}
              property="updateDate"
              options={Tickets.getHistoryDatesOfTicket(history, idTicket)}
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
          this.state.data.map(ticket => (
            <React.Fragment key={ticket.updateDate}>
              <h3>{Dates.parseDate(ticket.updateDate)}</h3>
              <table className="hasAging">
                <thead>
                  <Row className="row">
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
                  <Row className="row rowOutline" key={ticket.updateDate}>
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
                </tbody>
              </table>
            </React.Fragment>
          ))
        ) : (
          <p>Please, select at least two dates.</p>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.onlyTickets.data,
  ticketsHistory: state.ticketsHistory.data
});

const mapDispatchToProps = dispatch => ({
  fetchOnlyTickets: () => dispatch(fetchOnlyTickets()),
  fetchTicketsHistory: () => dispatch(fetchTicketsHistory())
});

export const CompareTickets = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareTicketsComponent);
