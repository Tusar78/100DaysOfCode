import React, { Component } from "react";
import "./App.css";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import Section from "./Components/Section";

export class App extends Component {
  state = {
    theme: 'dark'
  }

  render() {
    const { theme } = this.state;
    return (
      <div>
        <Counter>
          {(count, incrementCount) => (
            <Click count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Section theme={theme} />
      </div>
    );
  }
}

export default App;
