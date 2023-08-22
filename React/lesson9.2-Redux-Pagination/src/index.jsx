import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk";
import { Provider } from 'react-redux'

const defaultState= {
  beers: {},
  isLoading: false,
  page: 1,
  perPage: 10,
  beersPagination: [],
}

const rootReducer= (state= defaultState, action)=> {
  switch (action.type) {

    case 'GET_BEERS_REQUEST':      
      return {...state, isLoading: true};
    case 'GET_BEERS_SUCCESS':      
      return {
        ...state, 
        beers:{...state.beers, ...action.payload.beers.reduce((acc, beer)=> {
          acc[beer.id]= beer;
          return acc
        }, {})}, 
        isLoading: false, 
        beersPagination:[...new Set([
          ...state.beersPagination, 
          ...action.payload.beers.map(beer=> beer.id)
        ])]};
    case 'GET_BEERS_ERROR':      
      return {...state, isLoading: false};

    case 'CHANGE_PER_PAGE':      
      return {...state, perPage: action.payload.perPage};

    case 'CHANGE_PAGE':      
      return {...state, page: action.payload.page};
  
    default:
      return state;
  }
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer, 
  composeEnchancers( 
    applyMiddleware(thunk)
  )  
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>
)
