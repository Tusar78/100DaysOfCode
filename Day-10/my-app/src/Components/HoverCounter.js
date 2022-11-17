import React from "react";

const HoverCounter = ({ theme }) => {
  const style =
    theme === "dark" ? { backgroundColor: "#333", color: "#fff" } : null;
  return (
    <div>
      <h2 style={style}>Hover Me</h2>
    </div>
  );
};

export default HoverCounter;
