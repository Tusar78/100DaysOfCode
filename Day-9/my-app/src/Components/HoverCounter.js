import React from 'react';

const HoverCounter = ({click, handleClick}) => {
  return (
    <div>
      <h2 onMouseOver={handleClick}>Hover {click}</h2>
    </div>
  );
};

export default HoverCounter;