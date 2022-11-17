import React from 'react';
import Click from './Components/Click';
import User from './Components/User';
import Hover from './Components/Hover';
import './App.css'

const App = () => {
  return (
    <div>
      <Click />
      <Hover />
      <User name={(isLoggedIn) => isLoggedIn ? 'Tusar' : 'Guest'} />
    </div>
  );
};

export default App;