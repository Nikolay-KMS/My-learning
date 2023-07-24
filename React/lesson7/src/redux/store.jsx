import {combineReducers, createStore} from 'redux';
import { idFavouriteCardsReducer } from './reducers/favouriteReducer';
import { idCardsInBasketReducer } from './reducers/basketReducer';
import { cardsReducer } from './reducers/cardsReduser';


const rootReducer = combineReducers({
  idFavouriteCards: idFavouriteCardsReducer,
  idCardsInBusket: idCardsInBasketReducer,
  cards: cardsReducer,
})

export const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);