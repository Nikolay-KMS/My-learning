

export const getCardsThunk = () => {
  return (dispatch) => {

    let favouriteCardsLocal = JSON.parse(localStorage.getItem('favour'));
    favouriteCardsLocal = favouriteCardsLocal ? favouriteCardsLocal : [];
    dispatch({ type: 'GET_ID_FAVOURITE_CARDS', payload: { idFavouriteCards: favouriteCardsLocal } })

    let cardsInBasketLocal = JSON.parse(localStorage.getItem('basket'));
    cardsInBasketLocal = cardsInBasketLocal ? cardsInBasketLocal : {};
    dispatch({ type: 'GET_ID_CARDS_IN_BASKET', payload: { idCardsInBasket: cardsInBasketLocal } })

    dispatch({ type: 'GET_CARDS_REQUEST' })
    setTimeout(() => {
      fetch("./data.json")
        .then(res => res.json())
        // Promise.reject(new Error('Something go wrong'))
        .then(res => {
          // localStorage.setItem('allCards', JSON.stringify(res))   
          dispatch({ type: 'GET_CARDS_SUCCESSFULLY', payload: { cards: res } })
        })
        .catch(e => { console.log(e); })
    }, 500);
  }
}