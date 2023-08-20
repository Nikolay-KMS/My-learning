import React from "react";
import PropTypes from 'prop-types';

export function Button(props) {
  return (
    <button 
      onClick={props.handleClickBtn}
      className={props.className}
    >{props.text}</button>
  )
}


Button.propTypes = {
  text: PropTypes.string,
  handleClickBtn: PropTypes.func,
  className: PropTypes.string
}

