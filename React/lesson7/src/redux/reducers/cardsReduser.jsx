import { PUSH_CARDS_ACTION_TYPE } from "../actions";

export function cardsReducer (store = [], action) {
  switch (action.type) {
    case PUSH_CARDS_ACTION_TYPE:      
      return action.payload.cards;
  
    default:
      return store;
  }
}