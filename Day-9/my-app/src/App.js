import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <Counter
        render={(click, handleClick) => (
          <ClickCounter click={click} handleClick={handleClick} />
        )}
      />

      <Counter>
        {
          (click, handleClick) => <HoverCounter click={click} handleClick={handleClick} />
        }
      </Counter>
    </div>
  );
}

export default App;
