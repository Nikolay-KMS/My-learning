import React from "react";
import Button from '@mui/material/Button'
// import { ThemeProvider } from "@emotion/react";
// import { themeMUI } from "../utilities/themeMUI";

export function ButtonMUI(props) {
  // console.log(props);
  return (
    // <ThemeProvider theme={themeMUI}>
      <Button variant="outlined" disableRipple
        onClick={props.handleClickBtn}
        className={props.className}
      >{props.text}</Button>
    //  </ThemeProvider> 
  )
}