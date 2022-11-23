import React from "react";
import GreetingContext from "../GreetingContext";
import Hello from "./Hello";

const SectionTwo = () => {
  return (
    <div>
      <h2>This is section two</h2>
      <GreetingContext.Consumer>
        {({ theme }) => <Hello theme={theme} />}
      </GreetingContext.Consumer>
    </div>
  );
};

export default SectionTwo;
