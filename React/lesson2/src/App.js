import { useState } from "react";
import { Tasclist } from "./Components/Tasclist";

export function App() {
const [value, setValue] = useState('');
const [tasks, setTasks] = useState([]);

function onEditTask() {
  
}

function onDeleteTask(value) {
  const updatedTasks = tasks.filter(task => {
    return task !== value
  })
  setTasks(updatedTasks)
}


  return (
    <div className="">
      <input
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}      
      ></input>
      <button
        onClick={() => {
          // setTasks([...tasks, value])
          setTasks(tasks.concat(value))
          setValue('')
        }}
      >Add</button>
      <Tasclist 
        tasks={tasks}
        onDelete={onDeleteTask}
        onEdit={onEditTask}
      ></Tasclist>
    </div>
  );
}


