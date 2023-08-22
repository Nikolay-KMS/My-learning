
const initialState= {
  isModalFirstActiveID: false,
  isModalSecondActiveId: false
}

export const modalsFlagReducer= (state= initialState, action)=> {
  switch (action.type) {

    case 'PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE':
      return {...state, isModalFirstActiveID: action.payload.id}
    case 'PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE':
      return {...state, isModalFirstActiveID: false}
  
    case 'PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE':
      return {...state, isModalSecondActiveId: action.payload.id}
    case 'PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE':
      return {...state, isModalSecondActiveId: false}

    default:
      return state
  }
}