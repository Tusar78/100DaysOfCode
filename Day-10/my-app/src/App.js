import React, { Component } from "react";
import "./App.css";
import Section from "./Components/Section";

export class App extends Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <>
        <Section theme={theme} />
      </>
    );
  }
}

export default App;
