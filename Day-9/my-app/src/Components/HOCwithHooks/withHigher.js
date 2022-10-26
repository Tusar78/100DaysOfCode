import React from 'react';
import { useState } from 'react';

const withHigher = (OriginalComponent) => {
  const NewComponent = () => {
    const [click, setClick] = useState(0);

    const handleClick = () => {
      setClick(click + 1);
    }

    return (
      <OriginalComponent handleClick={handleClick} click={click} />
    )
  }

  return NewComponent;
};

export default withHigher;