import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <Counter
        render={(click, handleClick) => (
          <ClickCounter click={click} handleClick={handleClick} />
        )}
      />
    </div>
  );
}

export default App;
