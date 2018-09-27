import React, { Component } from "react";

export class ProgressDot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }

  render() {
    return (
      <div className={`dot ${this.props.active && `isActive`}`}>
        {this.props.active && <span>&#10004;</span>}
      </div>
    );
  }
}

ProgressDot.defaultProps = {
  active: false
};
