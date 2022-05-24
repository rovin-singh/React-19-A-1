import React from "react";
import "./TodoList.css";
import Completed from "./Completed";
const TodoList = ({ todos,deleteData ,setTodos}) => {
  const [completed,setCompleted]=React.useState([]);
 const completedTask=(value)=>{
   setCompleted([...completed,value])
   setTodos(todos.filter((data)=>data!==value))
 }
  return (
      <div>
        <ul>
            {todos.map((data) =>
              (
               <li className="list" key={data}>
                <input type="checkbox" onClick={()=>completedTask(data)}/>
                <p>{data}</p>
                <button onClick={()=>deleteData(data)}>Delete</button>
              </li>            
              )
              )
            }
        </ul>
        {(completed.length>0) ? <Completed  completed={completed} /> : ""}

      </div>
    )
  };

export default TodoList;
