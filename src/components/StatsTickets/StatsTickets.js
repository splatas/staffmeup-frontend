import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import { fetchURL } from "../../fetchURL";

export class StatsTickets extends Component {
  constructor(props) {
    super(props);

    this.formatTicketsStatsData = this.formatTicketsStatsData.bind(this);

    this.state = {
      colors: [
        "rgb(82,229,152)",
        "rgb(229,81,103)",
        "rgb(229,197,81)",
        "rgb(19,19,90)",
        "rgb(229,113,81)",
        "rgb(81,172,229)"
      ],
      data: ""
    };
  }

  componentDidMount() {
    fetch(`${fetchURL}/ticket/getticketreport`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  formatTicketsStatsData() {
    let labels = [];
    let data = [];

    for (let item in this.state.data) {
      data = [...data, this.state.data[item]];

      item = item
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, str => str.toUpperCase());

      labels = [...labels, item];
    }

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: this.state.colors,
          borderColor: "black",
          borderWidth: 1.2
        }
      ]
    };
  }

  render() {
    return this.state.data ? (
      <div className="chart">
        <Bar
          data={this.formatTicketsStatsData}
          options={{
            title: {
              display: false
            },
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ stacked: true }]
            },
            legend: {
              display: false
            }
          }}
        />
      </div>
    ) : (
      <p>Chart can't be loaded. Try refreshing the page</p>
    );
  }
}
