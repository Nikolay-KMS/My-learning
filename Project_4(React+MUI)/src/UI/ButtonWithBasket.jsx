import React from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'
// import { ThemeProvider } from "@emotion/react";
// import { themeMUI } from "../utilities/themeMUI";

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styled from "@emotion/styled";

const ButtonStyled= styled(Button)(()=> ({
  // width: '200px',
  // height: '200px',
  // color: '#4db6ac',
  // borderColor: '#4db6ac'
}))

export function ButtonWithBasket(props) {
  return (
    // <ThemeProvider theme={themeMUI}>
      <ButtonStyled variant="outlined" color="primary" endIcon={<ShoppingBasketIcon />}
        onClick={props.handleClickBtn}
        className={props.className}
      >{props.text}</ButtonStyled>
    // </ThemeProvider>
  )
}


Button.propTypes = {
  text: PropTypes.string,
  handleClickBtn: PropTypes.func,
  className: PropTypes.string
}

