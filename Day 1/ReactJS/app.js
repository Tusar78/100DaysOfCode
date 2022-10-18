const domContainer = document.getElementById("root");

const Increment = () => {
  return (
    <>
      <div class="container">
        <p id="display">0</p>
        <div>
          <button id="increment-btn">Increment +</button>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<Increment />, domContainer);
