import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchOnlyTickets } from "../../state/actions/onlyTickets";
import { fetchOnlyCandidates } from "../../state/actions/onlyCandidates";

import { Aging } from "../../utilities/Aging";
import { Dates } from "../../utilities/Dates";

import { Row } from "../Row";
import { Title } from "../Title";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { Badge } from "../Badge";
import { FilterTickets } from "../FilterTickets";

class TicketsListComponent extends Component {
  componentWillMount() {
    this.props.fetchOnlyTickets();
    this.props.fetchOnlyCandidates();
  }

  render() {
    const { tickets } = this.props;
    return (
      <section>
        {tickets.length > 0 ? (
          <article>
            <TitlesContainer>
              <Title>Tickets</Title>
            </TitlesContainer>

            {/* <h4>Filter tickets</h4> */}
            {/* <FilterTickets /> */}

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
                {tickets.map(ticket => (
                  <Row className="row rowSolid" key={ticket.idTicket}>
                    <td>
                      <Link to={`ticket/${ticket.idTicket}`}>
                        {ticket.idTicket}
                      </Link>
                    </td>
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
                ))}
              </tbody>
            </table>
          </article>
        ) : (
          <p>
            There are no tickets. Upload a file to your server and click on
            "REQUEST NEW TICKETS".
          </p>
        )}
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

export const TicketsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsListComponent);
