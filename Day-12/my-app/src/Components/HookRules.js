import React, { useState } from "react";

const HookRules = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todo;

  return (
    <div>
      <p>{title}</p>
      <p>
        <input type="text" value={title} onChange={(e) => setTodo({
          ...todo,
          title: e.target.value
        })} />
      </p>
      <p>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setTodo({
            ...todo,
            description: e.target.value
          })}
        ></textarea>
      </p>
    </div>
  );
};

export default HookRules;
