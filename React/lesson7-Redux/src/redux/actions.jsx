
export const CLICK_TO_STAR_ACTION_TYPE = 'idFavouriteCards/click';
export const PUSH_CARDS_TO_FAVOURITE_ACTION_TYPE = 'idFavouriteCards/push'

export const PUSH_CARD_TO_BUSKET_ACTION_TYPE = 'idCardsInBasket/push';
export const ADD_CARD_TO_BUSKET_ACTION_TYPE = 'idCardsInBasket/addCard';
export const REMOVE_CARD_FROM_BUSKET_ACTION_TYPE = 'idCardsInBasket/removeCard';

export const PUSH_CARDS_ACTION_TYPE = 'cards/push';


export const clickOnStar = (cardId) => ({ 
  type: CLICK_TO_STAR_ACTION_TYPE, payload: {cardId}
});
export const pushCardsToFafourive = (cardId) => ({ 
  type: PUSH_CARDS_TO_FAVOURITE_ACTION_TYPE, payload: {cardId}
});

export const addCardToBusket = (cardId) => ({ 
  type: ADD_CARD_TO_BUSKET_ACTION_TYPE, payload: {cardId}
});
export const removeCardFromBusket = (cardId) => ({ 
  type: REMOVE_CARD_FROM_BUSKET_ACTION_TYPE, payload: {cardId}
});
export const pushCardsToBusket = (cards) => ({
  type:PUSH_CARD_TO_BUSKET_ACTION_TYPE, payload: {cards}
})

export const pushCards = (cards) => ({
  type: PUSH_CARDS_ACTION_TYPE, payload: {cards}
})