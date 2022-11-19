import React from 'react';

const Hover = ({count, incrementCount}) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hover At {count} times</h2>
    </div>
  );
};

export default Hover;