import React from 'react';
import withCounter from '../HOC/withCounter';

const ClickCounter = ({count, incrementCount}) => {
  console.log(count);
  return (
    <div>
      <button onClick={incrementCount}>Click {count} time</button>
    </div>
  );
};

export default withCounter(ClickCounter);