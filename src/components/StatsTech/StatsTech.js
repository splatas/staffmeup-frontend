import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { fetchURL } from "../../fetchURL";

export class StatsTech extends Component {
  constructor(props) {
    super(props);

    this.formatTechnologyStatsData = this.formatTechnologyStatsData.bind(this);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    fetch(`${fetchURL}/tickethistory/gettecnologyreport`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  formatTechnologyStatsData() {
    const data = this.state.data;
    let labels = [];
    let maxArray = [];
    let minArray = [];
    let avgArray = [];

    for (let stat of data) {
      labels = [...labels, stat.tecnologyName];
      maxArray = [...maxArray, stat.max.toFixed(2)];
      minArray = [...minArray, stat.min.toFixed(2)];
      avgArray = [
        ...avgArray,
        stat.avarage == "NaN" ? 0 : stat.avarage.toFixed(2)
      ];
    }

    console.log(minArray, avgArray, maxArray);

    const chartData = {
      labels,
      datasets: [
        {
          label: "Min",
          data: minArray,
          backgroundColor: new Array(minArray.length).fill("rgb(231,100,120)"),
          borderColor: "black",
          borderWidth: 1.2
        },
        {
          label: "Avg",
          data: avgArray,
          backgroundColor: new Array(avgArray.length).fill("rgb(219,219,219)"),
          borderColor: "black",
          borderWidth: 1.2
        },
        {
          label: "Max",
          data: maxArray,
          backgroundColor: new Array(maxArray.length).fill("rgb(81,172,229)"),
          borderColor: "black",
          borderWidth: 1.2
        }
      ]
    };

    return chartData;
  }

  render() {
    return this.state.data ? (
      <div className="chart">
        <Bar
          data={this.formatTechnologyStatsData}
          options={{
            title: {
              display: false
            },
            scales: {
              xAxes: [{ stacked: false }],
              yAxes: [{ stacked: false }]
            }
          }}
        />
      </div>
    ) : (
      <p>Chart can't be loaded. Try refreshing the page</p>
    );
  }
}
