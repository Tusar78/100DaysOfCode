import React, { useState } from 'react';
import MyComponent from './Components/MyComponent';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {
        show && <MyComponent />
      }

      <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
        {
          show ? 'Hide Post' : 'Show Post'
        }
      </button>
    </div>
  );
};

export default App;