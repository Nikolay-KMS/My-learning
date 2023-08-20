import { ADD_CARD_TO_BUSKET_ACTION_TYPE, PUSH_CARD_TO_BUSKET_ACTION_TYPE, REMOVE_CARD_FROM_BUSKET_ACTION_TYPE } from "../actions";


 export const cardsInBusketReducer = (store = {}, action) => {
  switch (action.type) {
    case ADD_CARD_TO_BUSKET_ACTION_TYPE: 
      const id = action.payload.cardId
      return store[id] ? {...store, [id]: store[id] +1} : {...store, [id]: 1};

    case REMOVE_CARD_FROM_BUSKET_ACTION_TYPE: 
      const newStore = {...store}
      delete newStore[action.payload.cardId];
      return newStore;


    case PUSH_CARD_TO_BUSKET_ACTION_TYPE: 
      const cards = action.payload.cards;
      return cards ? cards : {};
  
    default:
      return store;
  }
}