import React from 'react';
import withHigher from './withHigher';

const Click = ({handleClick, click}) => {
  return (
    <>
      <button onClick={handleClick}>Click { click } </button> 
    </>
  );
};

export default withHigher(Click);