import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers/rootReducer";

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