
const initialState = {
  idCardsInBasket: {},
}

export const basketReducer= (state= initialState, action) => {

  switch (action.type) {

    case 'GET_ID_CARDS_IN_BASKET':
      return {...state, idCardsInBasket: action.payload.idCardsInBasket}

    case 'ADD_ID_CARD_IN_BASKET':
      const id= action.payload.id;
      return {...state, idCardsInBasket:{
        ...state.idCardsInBasket,  [id]: state.idCardsInBasket[id] ? state.idCardsInBasket[id] + 1 : 1
      }};
        
    case 'REMOVE_CARD_IN_BASKET':
      const {[action.payload.id]: deletedId, ...newIdCardsInBasket}= state.idCardsInBasket;
      return {...state, idCardsInBasket: newIdCardsInBasket}

    case 'REMOVE_ALL_CARDS_IN_BASKET':
      return {...state, idCardsInBasket: {}}
  
    default:
      return state;
  }
}