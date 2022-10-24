import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";

export class Calculator extends Component {
  render() {
    return (
      <>
        <TemperatureInput scale="f" />
        <TemperatureInput scale="c" />
      </>
    );
  }
}

export default Calculator;
