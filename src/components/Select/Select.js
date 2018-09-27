import React, { Component } from "react";
import "./Select.css";

export class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // filterOptions(options, property) {
  //   let filtered = [];
  //   options.map(
  //     item =>
  //       !filtered.includes(item[property]) && filtered.push(item[property])
  //   );
  //   console.log("filtered:", filtered);
  //   return filtered;
  // }

  handleChange(e) {
    // const { name, value } = e.target;
    // this.props.filter(name, value);
    this.props.onChange(e);
  }

  render() {
    const { label, name, hasDefault, options } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={name} className="Label">
          {label}
        </label>
        <select
          name={name}
          id={name}
          defaultValue=""
          onChange={this.handleChange}
          className="Select"
        >
          {hasDefault && (
            <option value="" disabled>
              Select any...
            </option>
          )}
          {options.length > 0 &&
            options.map(item => (
              <option value={item.replace(/[-]/g, "")} key={item}>
                {item !== "" ? item : "Other"}
              </option>
            ))}
        </select>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   tickets: state.onlyTickets.data,
//   filterTickets: state.filterTickets
// });

// const mapDispatchToProps = dispatch => ({
//   filter: (name, value) => dispatch(filterTickets(name, value))
// });

// export const Select = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SelectComponent);
