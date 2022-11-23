import React from "react";

const Greeting = ({theme}) => {
  console.log(theme);
  const style =
    theme === "dark"
      ? {
          backgroundColor: "#0e1217",
          color: "#fff",
          borderRadius: "6px",
          width: "max-content",
          padding: "10px",
        }
      : null;
  return (
    <div>
      <h2 style={style}>Hello World!</h2>
    </div>
  );
};

export default Greeting;
