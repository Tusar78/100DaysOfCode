import './App.css';
import ClockList from './Components/ClockList';
import FormGroup from './Components/FormGroup';

function App() {
  const quantities = [1, 2, 3];
  return (
    <div className='container'>
      <FormGroup />
      <ClockList quantities={quantities} />
    </div>
  );
}

export default App;
