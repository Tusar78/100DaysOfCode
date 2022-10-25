import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";

export class Calculator extends Component {
  state = { temperature: "", scale: "" };

  handleTemperature = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature} = this.props;
    return (
      <>
        <TemperatureInput
          temperature={temperature}
          handleTemperature={this.handleTemperature}
          scale="f"
        />
        <TemperatureInput
          temperature={temperature}
          handleTemperature={this.handleTemperature}
          scale="c"
        />
      </>
    );
  }
}

export default Calculator;
