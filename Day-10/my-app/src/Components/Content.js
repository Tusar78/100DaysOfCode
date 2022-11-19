import React from "react";
import Counter from "./Counter";
import Hover from "./Hover";

const Content = ({theme}) => {
  return (
    <div>
      <h2>This is Content Component</h2>

      <Counter>
        {(count, incrementCount) => (
          <Hover count={count} incrementCount={incrementCount} theme={theme} />
        )}
      </Counter>
    </div>
  );
};

export default Content;
