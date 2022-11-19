import React from "react";
import Counter from "./Counter";
import Hover from "./Hover";

const Content = () => {
  return (
    <div>
      <h2>This is Content section</h2>

      <Counter>
        {(count, incrementCount) => (
          <Hover count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
};

export default Content;
