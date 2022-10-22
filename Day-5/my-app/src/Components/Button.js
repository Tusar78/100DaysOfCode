import React from 'react';

const Button = ({change, locale}) => {
  return (
    <button onClick={() => change(locale)}>Click Here!</button>
  );
};

export default Button;