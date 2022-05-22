import "./styles.css";
import React from "react";
import Todo from "./components/Todo";
import TodiInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const addTodo = () => {
    setTodos([...todos, value]);
    setValue("");
  };
  return (
    <div className="App">
      <Todo />
      <TodiInput value={value} setValue={setValue} addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
