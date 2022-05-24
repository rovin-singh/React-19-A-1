import React from "react"
import "./Completed.css"
const Completed =({completed})=>{
  return(    
   <div>
     <button>Show Completed Todos</button>
     <ul>
     {completed.map((data)=>(
        <li className="completed-list" key={data}>
         <input type="checkbox" checked/>
         <p><del>{data}</del></p>
       </li>            
      ))
      }
     </ul>
   </div>
  )
}

export default Completed