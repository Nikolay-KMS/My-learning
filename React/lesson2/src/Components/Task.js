
export function Task(props) {
  const task = props.task;

  return (
    <li>{task}
    <button
      onClick={props.onEdit}
    >Edit task</button>
    <button
      onClick={() => props.onDelete(task)}
    >Delete task</button>    
    </li>
  )
}