import React from 'react';

const Hover = ({count, incrementCount}) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hover me at {count} Times</h2>
    </div>
  );
};

export default Hover;