import React from 'react';
import withHigher from './withHigher';

const Hover = ({handleClick, click}) => {
  return (
    <>
      <h2 onMouseOver={handleClick}>Hover { click } </h2> 
    </>
  );
};

export default withHigher(Hover);