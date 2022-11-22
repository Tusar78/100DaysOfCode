import React, { memo } from 'react';

const ShowCount = ({title, count}) => {
  console.log(`Rendering ${title}`);
  return (
    <div>
      <p>{title} is {count}</p>
    </div>
  );
};

export default memo(ShowCount);