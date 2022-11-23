import React, { Component } from "react";
import "./App.css";
import Click from "./Components/Click";
import Sections from "./Components/ContextAPI/Sections";
import Counter from "./Components/Counter";
import GreetingContext from "./Components/GreetingContext";
import Section from "./Components/Section";
import ThemeContext from "./Components/ThemeContext";

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
        <ThemeContext.Provider value={{theme}}>
          <Section/>
        </ThemeContext.Provider>

        <br />
        <br />
        <hr />
        <br />
        <br />

        <GreetingContext.Provider value={{theme}}>
          <Sections />
        </GreetingContext.Provider>    
      </div>
    );
  }
}

export default App;
