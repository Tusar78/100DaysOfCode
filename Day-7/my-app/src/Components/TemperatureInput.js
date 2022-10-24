import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export class TemperatureInput extends Component {
  state = { temperature: "" };

  handleTemperature = e => {
    this.setState({
      temperature: e.target.value
    })
  }

  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}</legend>
        <input
          type="text"
          name="temperature"
          placeholder="Enter temperature"
          value={temperature}
          onChange={this.handleTemperature}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
