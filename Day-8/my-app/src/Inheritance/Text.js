import React from 'react';

const Text = ({addEmoji}) => {
  const text = "I Love JavaScript";

  
  return (
    <>
      {
        addEmoji ? addEmoji(text, '💎') : text
      }
    </>
  );
};

export default Text;