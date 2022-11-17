import React from 'react';
import HoverCounter from './HoverCounter';

const Counter = ({theme}) => {
  return (
    <div>
      <h2>This is Counter.</h2>
      <HoverCounter theme={theme} />
    </div>
  );
};

export default Counter;