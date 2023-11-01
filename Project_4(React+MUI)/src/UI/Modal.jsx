import React, { useEffect, useRef } from "react";
import { ButtonMUI } from "./ButtonMUI";
import PropTypes from 'prop-types';
import { ModalButtons } from "./ModalButtons";


export function Modal(props) {

  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.focus();
  }, [])

  function handleKeyUp(event) {
    if (event.code === 'Escape') { props.handleCloseModal() }
    if (event.code === 'Enter') {
      props.handleClickBtn(props.id);
    }
  }

  return (
    <div className={'modal'} >
      <div className="modalBackFond"
        onClick={props.handleCloseModal}
      ></div>
      <div className="modalWindow"
        onKeyUp={(event) => handleKeyUp(event)}
        ref={modalRef}
        tabIndex="0"
      >
        <div className="modalHeader">
          <h2>{props.headerText}</h2>
          {props.isCloseButton &&
            <ButtonMUI
              text="X"
              handleClickBtn={props.handleCloseModal}
              className="btnCloseModal"
            />
          }

        </div>
        <div className="modalBody">
          <ModalButtons
            handleClickBtn={() => props.handleClickBtn(props.id)}
            handleCloseModal={props.handleCloseModal}
          />
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  handleCloseModal: PropTypes.func,
  isCloseButton: PropTypes.bool,
  id: PropTypes.number,
  handleClickBtn: PropTypes.func
}
