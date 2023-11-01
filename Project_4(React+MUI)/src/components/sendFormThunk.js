

export function sendFormThunk(values, basketCards) {
  return (dispatch, getState)=> {
    const state= getState();
    const idCardsInBasket= state.bask.idCardsInBasket;
    const cardsFull= basketCards.map(card=> { 
      return  {...card, quantity: idCardsInBasket[card.id]}
    })

    console.log('User information:', values);
    console.log('Purchased items:', cardsFull);
    localStorage.removeItem('basket');
    dispatch({type: 'REMOVE_ALL_CARDS_IN_BASKET'})
  }
}
