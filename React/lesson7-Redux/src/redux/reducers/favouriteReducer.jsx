import { CLICK_TO_STAR_ACTION_TYPE, PUSH_CARDS_TO_FAVOURITE_ACTION_TYPE } from "../actions";

const idFavouriteCards =[];
export function idFavouriteCardsReducer(state = idFavouriteCards, action ) {

  switch (action.type) {

    case CLICK_TO_STAR_ACTION_TYPE: 
    const cardId = action.payload.cardId; 
      return state.includes(cardId) ? 
        state.filter(id => id !== cardId) : 
        [...state, cardId];

    case PUSH_CARDS_TO_FAVOURITE_ACTION_TYPE: 
    // const cardId2 = action.payload.cardId; 
    // console.log(!!action.payload.cardId);
 
      return action.payload.cardId ? action.payload.cardId : [];

  
    default:
      return state;
  }
 }