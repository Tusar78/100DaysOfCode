import React, { useCallback, useState } from "react";
import Button from "./Components/Button";
import ShowCount from "./Components/ShowCount";
import Title from "./Components/Title";
import "./App.css";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count5, setCount5] = useState(0);

  const isEvenOrOdd = () => {
    return count1 % 2 === 0;
  }

  const incrementOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementFive = useCallback(
    () => setCount5((prevCount) => prevCount + 5),
    []
  );
  return (
    <>
      <Title />
      <ShowCount count={count1} title="Counter one" />
      <p>{isEvenOrOdd() ? 'Even' : 'Odd'}</p>
      <Button increment={incrementOne}>Increment by One</Button>
      <hr />
      <ShowCount count={count5} title="Counter two" />
      <Button increment={incrementFive}>Increment by Five</Button>
    </>
  );
};

export default App;
