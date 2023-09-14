import styled from "@emotion/styled";
import { ButtonMUI } from "./ButtonMUI";




const ModalButtonsStyled = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;
`

export function ModalButtons(props) {
  return (
    <ModalButtonsStyled>
      <ButtonMUI
        text={"Ok"}
        handleClickBtn={() => props.handleClickBtn(props.id)}
        className="modalButton"
      />
      <ButtonMUI
        text={"Cancel"}
        handleClickBtn={props.handleCloseModal}
        className="modalButton"
      />
    </ModalButtonsStyled>
  )
}




// export function ModalButtons(props) {
//   return (
//     <div className="modalButtons">
//       <ButtonMUI
//         text={"Ok"}
//         handleClickBtn={() => props.handleClickBtn(props.id)}
//         className="modalButton"
//       />
//       <ButtonMUI
//         text={"Cancel"}
//         handleClickBtn={props.handleCloseModal}
//         className="modalButton"
//       />
//     </div>
//   )
// }



