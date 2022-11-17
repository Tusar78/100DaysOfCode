import React from 'react';

const User = ({name}) => {
  return (
    <div>
      <h2>Hello, My name {name(false)}</h2>
    </div>
  );
};

export default User;