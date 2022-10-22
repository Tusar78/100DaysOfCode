import './App.css';
import ClockList from './Components/ClockList';

function App() {
  const quantities = [1, 2, 3];
  return (
    <>
      <ClockList quantities={quantities} />
    </>
  );
}

export default App;
