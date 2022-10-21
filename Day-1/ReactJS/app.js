const domContainer = document.getElementById("root");

const Increment = () => {
  const [increment, setIncrement] = React.useState(0);
  return (
    <>
      <div className="container">
        <p id="display"> {increment} </p>
        <div>
          <button id="increment-btn" onClick={() => setIncrement(increment + 1)}>Increment +</button>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(
  <>
  <Increment />
  <Increment />
  <Increment />
  </>
, domContainer);
