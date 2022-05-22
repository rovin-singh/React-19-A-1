import React from "react";

const TodoList = ({ todos }) => (
  todos.map((data) => <p>{data}</p>)
);

export default TodoList;
