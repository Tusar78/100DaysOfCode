import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureInput = ({ temperature, handleTemperature, scale }) => {
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
};

export default TemperatureInput;
