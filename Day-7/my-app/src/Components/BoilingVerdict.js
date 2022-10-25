import React from 'react';

const BoilingVerdict = ({ temperature = 0 }) => {
  if (temperature >= 100) {
    return <p>The water would boil.</p>
  } else {
    return <p>The water wouldn't boil.</p>
  }
};

export default BoilingVerdict;