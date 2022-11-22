import React, { memo } from 'react';

const Button = ({increment, children}) => {
  console.log(`Rendering button ${children}`);
  return (
    <div>
      <button type='button' onClick={increment}>
        {children}
      </button>
    </div>
  );
};

export default memo(Button);