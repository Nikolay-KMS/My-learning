
const initialState = {
  idFavouriteCards: [],
}

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_ID_FAVOURITE_CARDS':
      return { ...state, idFavouriteCards: action.payload.idFavouriteCards }

    case 'TOGGLE_ID_FAVOURITE_CARDS':
      const id = action.payload.id;
      return {
        ...state, idFavouriteCards: state.idFavouriteCards.includes(id) ?
          state.idFavouriteCards.filter(cardId => cardId !== id) :
          [...state.idFavouriteCards, id]
      }

    default:
      return state;
  }
}