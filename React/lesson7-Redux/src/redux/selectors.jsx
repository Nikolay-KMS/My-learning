
export const favouriteSelector = state => state.idFavouriteCards;

export const idQuantityBusketSelector = state => state.cardsInBusket;
export const busketCardsSelector = state => {
    return !Object.keys(state.cards).length ? [] : Object.entries(state.cardsInBusket).map(([busketCardId, quantity]) => {
    const currentCard = state.cards.find(card => +busketCardId === card.id);
    return {
      ...currentCard,
      quantity
    }
  })
}

export const cardsSelector = state => state.cards;