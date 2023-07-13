import React from "react";


export class Button extends React.Component {

  render() {

    return (
      <button 
        style={{
          backgroundColor: this.props.bgColor,
        }}
        onClick={() => {
          this.props.handleClick()
        }}
        className={this.props.className}
      >{this.props.text}</button>
    )
  }
}