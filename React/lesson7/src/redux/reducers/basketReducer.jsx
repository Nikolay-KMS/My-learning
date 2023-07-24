import { ADD_CART_TO_BUSKET_ACTION_TYPE, REMOVE_CART_FROM_BUSKET_ACTION_TYPE } from "../actions";


 export const idCardsInBasketReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_CART_TO_BUSKET_ACTION_TYPE: 
      return [...store, action.payload.cardId];

    case REMOVE_CART_FROM_BUSKET_ACTION_TYPE: 
      return store.filter(id => id !== action.payload.cardId);
  
    default:
      return store;
  }
}