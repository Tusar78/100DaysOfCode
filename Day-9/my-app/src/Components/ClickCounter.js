import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = ({ handleClick, click }) => {
  return <button onClick={handleClick}>click {click}</button>;
};

export default withCounter(ClickCounter);
