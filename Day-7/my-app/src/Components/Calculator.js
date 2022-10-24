import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";

export class Calculator extends Component {
  state = {temperature: ''}

  handleTemperature = e => {
    this.setState({
      temperature: e.target.value
    })
  }
  render() {
    const {temperature} = this.state;
    return (
      <div>
        <fieldset>
          <legend>Enter Temperature in celsius.</legend>

          <input
            type="text"
            name="text"
            placeholder="Enter celsius"
            value={temperature}
            onChange={this.handleTemperature}
          />
        </fieldset>

        { temperature && <BoilingVerdict celsius={parseFloat(temperature)} /> }
      </div>
    );
  }
}

export default Calculator;
