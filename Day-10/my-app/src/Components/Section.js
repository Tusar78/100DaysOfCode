import React from 'react';
import Counter from './Counter';

const Section = ({theme}) => {
  return (
    <div>
      <h2>This is section.</h2>
      <Counter theme={theme} />
    </div>
  );
};

export default Section;