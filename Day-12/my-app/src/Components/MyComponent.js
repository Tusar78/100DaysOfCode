import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const addClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("updating!");
  }, [count]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  const tick = () => {
    setTime(new Date());
  };
  return (
    <div>
      <p>Time: {time.toLocaleTimeString()}</p>
      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      <p>
        <button type="button" onClick={addClick}>
          Click {count}
        </button>
      </p>
    </div>
  );
};

export default MyComponent;
