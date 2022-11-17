import React from "react";

const Click = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} Times </button>
    </div>
  );
};

export default Click;
