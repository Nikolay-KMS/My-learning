import React, {useState} from "react";

export function Counter(props) {

  const [value, setState] = useState(props.def);
  // console.log(props);
  function fButt () {
    setState(value + 1)
  }
  
  return (
    <div> 
      <span>{value}</span>
      <button onClick={fButt}>Add 1</button>
    </div>
  )
} 