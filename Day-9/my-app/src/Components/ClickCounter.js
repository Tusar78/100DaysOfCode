import React from 'react';

const ClickCounter = ({click, handleClick}) => {
  return (
    <button onClick={handleClick}>Click {click}</button>
  );
};

export default ClickCounter;