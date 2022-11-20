import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <p>
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Increment
        </button>
      </p>
    </div>
  );
};

export default Count;
