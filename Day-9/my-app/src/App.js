import './App.css';
import Click from './Components/HOCwithHooks/Click';
import Hover from './Components/HOCwithHooks/Hover';

function App() {
  return (
    <div className='App'>
      <h2>Hello World!</h2>
      <Click />
      <Hover />
    </div>
  );
}

export default App;
