import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers/rootReducer";

// const initial = {
//   cards: [],
//   isCardsLoadind: false,
//   idFavouriteCards: [],
//   idCardsInBasket: {},
//   isModalFirstActiveID: false,
//   isModalSecondActiveId: false
// }

// const rootReducerOld = (state= initial, action) => {
//   switch (action.type) {
//     // case 'GET_ID_FAVOURITE_CARDS':
//     //   return {...state, idFavouriteCards: action.payload.idFavouriteCards}
//     // case 'ADD_ID_FAVOURITE_CARDS':
//     //   return {...state, idFavouriteCards: [...state.idFavouriteCards, action.payload.id]}
//     // case 'REMOVE_ID_FAVOURITE_CARDS':
//     //   return {...state, idFavouriteCards: state.idFavouriteCards.filter(id => id !== action.payload.id)}
      
//     case 'GET_ID_CARDS_IN_BASKET':
//       return {...state, idCardsInBasket: action.payload.idCardsInBasket}
//     case 'ADD_ID_CARD_IN_BASKET':
//       return {...state, idCardsInBasket: {...state.idCardsInBasket, [action.payload.id]: 1}}
//     case 'INCREASE_QUANTITY_CARD_IN_BASKET':
//       return {...state, idCardsInBasket: 
//         {...state.idCardsInBasket, [action.payload.id]: state.idCardsInBasket[action.payload.id] + 1}}
//     case 'REMOVE_CARD_IN_BASKET':
//       const newObj = {...state.idCardsInBasket};
//       delete newObj[action.payload.id];
//       return {...state, idCardsInBasket: newObj}
    
//     case 'GET_CARDS_REQUEST':
//       return {...state, isCardsLoadind: true}
//     case 'GET_CARDS_SUCCESSFULLY':
//       return {...state, cards: action.payload.cards, isCardsLoadind: false}
//     case 'GET_CARDS_ERROR':
//       return {...state, isCardsLoadind: false}

//     case 'PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE':
//       return {...state, isModalFirstActiveID: action.payload.id}
//     case 'PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE':
//       return {...state, isModalFirstActiveID: false}
  
//     case 'PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE':
//       return {...state, isModalSecondActiveId: action.payload.id}
//     case 'PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE':
//       return {...state, isModalSecondActiveId: false}

//     default:
//       return state
//   }
// }


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer, 
  composeEnchancers( 
    applyMiddleware(thunk)
  )  
);


// const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   rootReducer, 
//   composeEnchancers( 
//     applyMiddleware(thunk)
//   )  
// );

// export const store = createStore(
//   rootReducer,  
//   applyMiddleware(thunk)
// );