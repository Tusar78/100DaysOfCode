import React, { useEffect, useRef } from "react";

const Form = () => {
  const inputRef = useRef(null);
  
  useEffect(() => {
    console.log(inputRef.current);
  }, []);
  return (
    <div>
      <p>
        <input ref={inputRef} type="text" placeholder="Enter your name" />
      </p>
    </div>
  );
};

export default Form;
