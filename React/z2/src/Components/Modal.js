import React from "react";
import { Button } from "./Button";
import PropTypes from 'prop-types';

export class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.modalRef= React.createRef();
  }

  componentDidMount() {
    if (this.modalRef.current) {
      this.modalRef.current.focus();
    }
  }

  render() {
    return (
      <div className={'modal'} >
        <div className="modalWrapper"
          onClick={this.props.handleCloseModal}
        ></div>
        <div className="modalWindow"
          onKeyUp={event => {
            if(event.code === 'Escape') {this.props.handleCloseModal()}
            if(event.code === 'Enter') {
              this.props.handleClickBtn(this.props.id);
              this.props.handleCloseModal();
            }
          }}
          ref={this.modalRef}
          tabIndex="0"
        >          

          <div className="modalHeader">
            <h2>{this.props.headerText}</h2>
            {this.props.isCloseButton &&
            <Button 
              text="X"
              handleClickBtn={this.props.handleCloseModal}
              className="btnClose"
            />}
          </div>
          <div className="modalBody">
            <p>{this.props.bodyText}</p>
              <>
                <Button
                  text={"Ok"} 
                  handleClickBtn={() => {
                  this.props.handleClickBtn(this.props.id)
                  this.props.handleCloseModal()
                  }}                    
                />
                <Button 
                  text={"Cancel"}
                  handleClickBtn={this.props.handleCloseModal}
                /> 
              </>                         
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  headerText: PropTypes.string,
  bodyText:PropTypes.string,
  handleCloseModal: PropTypes.func,
  isCloseButton:PropTypes.bool,
  id:PropTypes.number,
  handleClickBtn:PropTypes.func
}