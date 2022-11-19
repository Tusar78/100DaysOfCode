import React from 'react';
import './App.css'
import Click from './Components/Click';
import Counter from './Components/Counter';
import Hover from './Components/Hover';

const App = () => {
  return (
    <div>
      <Counter render={(count, incrementCount) => <Click count={count} incrementCount={incrementCount}/>} />
      <Counter render={(count, incrementCount) => <Hover count={count} incrementCount={incrementCount} />} />
    </div>
  );
};

export default App;