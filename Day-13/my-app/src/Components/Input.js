import React, { forwardRef } from 'react';

const Input = ({type, placeholder}, ref) => {
  return (
    <input ref={ref} type={type} placeholder={placeholder} />
  );
};

const forwarded = forwardRef(Input);

export default forwarded;