import { CLICK_TO_STAR_ACTION_TYPE } from "../actions";



const idFavouriteCards =[];

export function idFavouriteCardsReducer(state = idFavouriteCards, action ) {
  switch (action.type) {
    case CLICK_TO_STAR_ACTION_TYPE:  
      const cardId = action.payload.cardId;
      return state.includes(cardId) ? 
        state.filter(id => id !== cardId) : 
        [...state, cardId];
  
    default:
      return state;
  }
 }