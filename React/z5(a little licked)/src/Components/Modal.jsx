import React, { useEffect, useRef } from "react";
import { Button } from "./Button";
import PropTypes from 'prop-types';

export function Modal(props) {

  const modalRef = useRef(null);
  
  useEffect(() => {
    modalRef.current.focus();
  }, [])

  function handleKeyUp () {
    if(event.code === 'Escape') {props.handleCloseModal()}
      if(event.code === 'Enter') {
        props.handleClickBtn(props.id);
        props.handleCloseModal();
      }
  }

  return (
    <div className={'modal'} >
      <div className="modalBackFond"
        onClick={props.handleCloseModal}
      ></div>
      <div className="modalWindow"
        onKeyUp={() => handleKeyUp()}
        ref={modalRef}
        tabIndex="0"
      > 
        <div className="modalHeader">
          <h2>{props.headerText}</h2>
          {props.isCloseButton &&
          <Button 
            text="X"
            handleClickBtn={props.handleCloseModal}
            className="btnClose"
          />}
        </div>
        <div className="modalBody">
          <p>{props.bodyText}</p>
            <>
              <Button
                text={"Ok"} 
                handleClickBtn={() => {
                props.handleClickBtn(props.id)
                // props.handleCloseModal()
                }}       
                className= "modalButton"             
              />
              <Button 
                text={"Cancel"}
                handleClickBtn={props.handleCloseModal}
                className= "modalButton"
              /> 
            </>                         
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  headerText: PropTypes.string,
  bodyText:PropTypes.string,
  handleCloseModal: PropTypes.func,
  isCloseButton:PropTypes.bool,
  id:PropTypes.number,
  handleClickBtn:PropTypes.func
}
