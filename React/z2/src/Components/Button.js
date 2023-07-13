import React from "react";
import PropTypes from 'prop-types';


export class Button extends React.Component {

  render() {
    return (
      <button 
        onClick={this.props.handleClickBtn}
        className={this.props.className}
      >{this.props.text}</button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  handleClickBtn: PropTypes.func,
  className: PropTypes.string
}