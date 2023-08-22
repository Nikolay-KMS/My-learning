
const initialState = {
  idFavouriteCards: [],
}

export const favouriteReducer= (state= initialState, action) => {
  switch (action.type) {

    case 'GET_ID_FAVOURITE_CARDS':
      return {...state, idFavouriteCards: action.payload.idFavouriteCards}

    case 'ADD_ID_FAVOURITE_CARDS':
      return {...state, idFavouriteCards: [...state.idFavouriteCards, action.payload.id]}

    case 'REMOVE_ID_FAVOURITE_CARDS':
      return {...state, idFavouriteCards: state.idFavouriteCards.filter(id => id !== action.payload.id)}
  
    default:
      return state;
  }
}