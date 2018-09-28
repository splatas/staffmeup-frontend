import React, { Component } from "react";

import { ProgressDot } from "./ProgressDot";
import { ProgressLine } from "./ProgressLine";
import "./ProgressCandidate.css";

export class ProgressCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interview: this.parseString(this.props.data.interview) === "yes",
      onboarding: this.parseString(this.props.data.onboarding) === "yes",
      real: this.parseString(this.props.data.real) === "yes",
      status:
        this.parseString(this.props.data.status) === "closed" ||
        this.parseString(this.props.data.status) === "confirmed"
    };
  }

  parseString(str) {
    return (
      str !== null &&
      str !== undefined &&
      str
        .toString()
        .toLocaleLowerCase()
        .replace(/ /g, "")
    );
  }

  render() {
    const { interview, onboarding, real, status } = this.state;

    const firstStep = interview && onboarding;
    const secondStep = firstStep && real;
    const thirdStep = secondStep && status;

    return (
      <div className="progress">
        <div className="box">
          <ProgressDot active={interview} />
          <ProgressDot active={onboarding} />
          <ProgressLine active={firstStep} />
        </div>
        <div className="box">
          <ProgressDot active={real} />
          <ProgressLine active={secondStep} />
        </div>
        <div className="box">
          <ProgressLine active={thirdStep} />
          <ProgressDot active={status && thirdStep} />
        </div>
      </div>
    );
  }
}
