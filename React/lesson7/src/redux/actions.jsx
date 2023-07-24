
export const CLICK_TO_STAR_ACTION_TYPE = 'idFavouriteCards/click';

export const ADD_CART_TO_BUSKET_ACTION_TYPE = 'idCardsInBasket/addCard';
export const REMOVE_CART_FROM_BUSKET_ACTION_TYPE = 'idCardsInBasket/removeCard';

export const PUSH_CARDS_ACTION_TYPE = 'cards/push';


export const clickOnStar = (cardId) => ({ 
  type: CLICK_TO_STAR_ACTION_TYPE, payload: {cardId}
});

export const addCardToBusket = (cardId) => ({ 
  type: ADD_CART_TO_BUSKET_ACTION_TYPE, payload: {cardId}
});

export const removeCardFromBusket = (cardId) => ({ 
  type: REMOVE_CART_FROM_BUSKET_ACTION_TYPE, payload: {cardId}
});

export const pushCards = (cards) => ({
  type: PUSH_CARDS_ACTION_TYPE, payload: {cards}
})