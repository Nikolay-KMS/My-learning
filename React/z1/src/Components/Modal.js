import React from "react";
import { Button } from "./Button";


export class Modal extends React.Component {

  render() {
    const className= this.props.className || ""

    return (
      // <div className={this.props.className +" modal"}>
      <div 
        className={className+" "+"modal"}
      >
        <div className="modalWrapper"
          onClick={() => {
            this.props.handleCloseModal()
          }}
        ></div>
        <div className="modalWindow">          
          <div className="modalHeader">
            <h2>{this.props.headerText}</h2>
            {this.props.isCloseButton &&
            <Button 
              text="X"
              bgColor="inherit"
              handleCloseModal={this.props.handleCloseModal}   
              className="btnClose"
            />}
          </div>
          <div className="modalBody">
            <p>{this.props.bodyText}</p>
            {this.props.actions} 
          </div>
        </div>
      </div>
    )
  }
}