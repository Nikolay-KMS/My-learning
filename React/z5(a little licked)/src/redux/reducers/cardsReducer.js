
const initialState = {
  cards: [],
  isCardsLoadind: false,
}

export const cardsReducer= (state= initialState, action) => {
  switch(action.type) {

    case 'GET_CARDS_REQUEST':
      return {...state, isCardsLoadind: true}

    case 'GET_CARDS_SUCCESSFULLY':
      return {...state, cards: action.payload.cards, isCardsLoadind: false}

    case 'GET_CARDS_ERROR':
      return {...state, isCardsLoadind: false}
      
    default: 
      return state;
  }
}