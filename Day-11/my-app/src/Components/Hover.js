import React from "react";

const Hover = ({ count, incrementCount, theme, themeSwitcher }) => {
  const style =
    theme === "dark"
      ? {
          backgroundColor: "#222",
          color: "#fff",
          padding: "10px",
          width: "max-content",
        }
      : null;
  return (
    <div>
      <button onClick={themeSwitcher} className="button">Change Theme</button>
      <h2 style={style} onMouseOver={incrementCount}>Hover At {count} times</h2>
    </div>
  );
};

export default Hover;
