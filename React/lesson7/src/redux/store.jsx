import {combineReducers, createStore} from 'redux';
import { idFavouriteCardsReducer } from './reducers/favouriteReducer';
import { cardsInBusketReducer } from './reducers/basketReducer';
import { cardsReducer } from './reducers/cardsReduser';


const rootReducer = combineReducers({
  idFavouriteCards: idFavouriteCardsReducer,
  cardsInBusket: cardsInBusketReducer,
  cards: cardsReducer,
})

export const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);