import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = ({ handleClick, click }) => {
  return (
    <>
      <h2 onMouseOver={handleClick}>Hover {click}</h2>
    </>
  );
};

export default withCounter(HoverCounter);
