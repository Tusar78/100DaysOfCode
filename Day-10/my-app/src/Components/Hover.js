import React from 'react';

const Hover = ({count, incrementCount, theme}) => {
  const style = theme === 'dark' ? {backgroundColor: '#0e1217', color: '#fff', borderRadius: '6px', width: 'max-content', padding: '10px'} : null;
  return (
    <div>
      <h2 style={style} onMouseOver={incrementCount}>Hover me at {count} Times</h2>
    </div>
  );
};

export default Hover;