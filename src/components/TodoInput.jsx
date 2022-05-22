import React from "react";

const TodoInput = ({ value, setValue, addTodo }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Enter something"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
