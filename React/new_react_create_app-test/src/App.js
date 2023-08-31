// import './App.css';
// import React from "react";
// export class App extends React.Component { 
//   render() {
//     return (
//     <h2>Hi</h2>
//     )
//   }
// }


// import React from "react";


import React, { useContext, useState } from "react";

export function App(props) {
  const [state, setState] = useState(false);

  const theme= useContext(ThemeContext)
  return (
    // <button
    //   onClick={() => {
    //     setState(previousState => !previousState);
    //     props.handle(!state);
    //   }}
    //   data-testid="toggle"
    // >
    //   {state === true ? "Turn off" : "Turn on"}
    // </button>
    <div>

      Hi!!!
    </div>
  );
}