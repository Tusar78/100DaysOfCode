import React, { memo } from 'react';

const Title = () => {
  console.log('Title Rendering!');
  return (
    <div>
      <h2>useCallBack Hook Tutorial</h2>
    </div>
  );
};

export default memo(Title);