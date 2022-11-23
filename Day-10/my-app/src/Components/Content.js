import React from "react";
import Counter from "./Counter";
import Hover from "./Hover";
import ThemeContext from "./ThemeContext";

const Content = () => {
  return (
    <div>
      <h2>This is Content Component</h2>

      <Counter>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {
                ({theme}) => (
                  <Hover
                    count={count}
                    incrementCount={incrementCount}
                    theme={theme}
                  />
                )
              } 
            </ThemeContext.Consumer>
          )
        }}
      </Counter>
    </div>
  );
};

export default Content;
