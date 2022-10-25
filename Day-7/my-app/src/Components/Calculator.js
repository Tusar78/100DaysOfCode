import React, { Component } from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export class Calculator extends Component {
  state = { temperature: "", scale: "c" };

  handleTemperature = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          temperature={fahrenheit}
          handleTemperature={this.handleTemperature}
          scale="f"
        />
        <TemperatureInput
          temperature={celsius}
          handleTemperature={this.handleTemperature}
          scale="c"
        />

        {temperature && <BoilingVerdict temperature={temperature} />}
      </>
    );
  }
}

export default Calculator;
