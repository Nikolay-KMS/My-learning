
export function Button(props) {
  
  return(
    <>
      {props.value2} 
      <button 
        onClick={props.handleClick}
      >{props.text}</button>
    </>
  )
}