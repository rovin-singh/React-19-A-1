import React from "react";
import TodiInput from "./TodoInput";
import TodoList from "./TodoList";
function Todo() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const addTodo = () => {
    setTodos([...todos, value]);
    setValue("");
  };
  const deleteData=(value)=>{
    setTodos(todos.filter((todo)=>
      todo !==value
    ))
  }
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodiInput value={value} setValue={setValue} addTodo={addTodo} />
      <TodoList todos={todos} deleteData={deleteData} setTodos={setTodos}/>

    </div>
  );
}

export default Todo;
