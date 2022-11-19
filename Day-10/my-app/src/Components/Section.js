import React from 'react';
import Content from './Content';

const Section = ({theme}) => {
  return (
    <div>
      <h2>This is Section</h2>

      <Content theme={theme} />
    </div>
  );
};

export default Section;