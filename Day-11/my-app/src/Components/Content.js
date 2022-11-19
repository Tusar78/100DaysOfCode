import React from "react";
import ThemeContext from "../Context/ThemeContext";
import Counter from "./Counter";
import Hover from "./Hover";

const Content = () => {
  return (
    <div>
      <h2>This is Content section</h2>

      <Counter>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <Hover
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
};

export default Content;
