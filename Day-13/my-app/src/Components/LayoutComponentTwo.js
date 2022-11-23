import React from "react";
import useResize from "../hook/useResize";

const LayoutComponentTwo = () => {
  const onScreenSmall = useResize(576);
  return (
    <div>
      <h2 className={onScreenSmall ? 'small' : 'large'}>I Love React.JS</h2>
    </div>
  );
};

export default LayoutComponentTwo;
