import React from 'react';
import Click from './Components/Click';
import Counter from './Components/Counter';
import './App.css'

const App = () => {
  return (
    <div>
      <Counter render={(count, incrementCount) => <Click count={count} incrementCount={incrementCount}/>} />
    </div>
  );
};

export default App;