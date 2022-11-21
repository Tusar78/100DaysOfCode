import React, { useState } from "react";

const MyComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  const addClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <p>Time: {time.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>Click {count}</button>
      </p>
    </div>
  );
};

export default MyComponent;
