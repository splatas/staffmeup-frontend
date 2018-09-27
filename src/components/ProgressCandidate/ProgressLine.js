import React, { Component } from "react";

export class ProgressLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }

  render() {
    return (
      <div className={`line ${this.props.active && `isActive`}`}>
        {this.props.text}
      </div>
    );
  }
}

ProgressLine.defaultProps = {
  active: false
};
