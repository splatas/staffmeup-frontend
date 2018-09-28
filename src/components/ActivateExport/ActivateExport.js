import React, { Component } from "react";

import { Button } from "../Button";

import { fetchURL } from "../../fetchURL";

export class ActivateExport extends Component {
  constructor(props) {
    super(props);
    this.downloadFile = this.downloadFile.bind(this);
  }

  downloadFile() {
    window.open(`${fetchURL}${this.props.route}`);
  }

  render() {
    return (
      <div onClick={this.downloadFile}>
        <Button className="btn btnIcon btnOutline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          <span>Download Report</span>
        </Button>
      </div>
    );
  }
}
