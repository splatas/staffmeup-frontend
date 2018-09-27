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
        <Button>Download Report</Button>
      </div>
    );
  }
}
