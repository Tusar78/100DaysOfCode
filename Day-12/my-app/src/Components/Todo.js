import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updateWarning = inputValue.includes(".js")
      ? "You need javascript skill to complete the task. Do you have it?"
      : null;

    setTodo(inputValue);
    setWarning(updateWarning);
  };
  return (
    <>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput}></textarea>
      </p>
      <hr />
      <h2>{warning || 'Good choice'}</h2>
    </>
  );
};

export default Todo;
