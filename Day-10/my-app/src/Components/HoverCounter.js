import React from 'react';
import withCounter from '../HOC/withCounter';

const HoverCounter = ({count, incrementCount}) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>{count} Times Hovered</h2>
    </div>
  );
};

export default withCounter(HoverCounter);