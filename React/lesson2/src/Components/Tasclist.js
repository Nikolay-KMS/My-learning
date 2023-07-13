import { Task } from "./Task"  

export function Tasclist(props) {
  console.log(props);
  
  return (
    <ul>
      { 
        props.tasks.map((task)=>(
          <Task 
          task={task} 
          key={task}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
          ></Task>
      ))
      }
    </ul>
  )
}