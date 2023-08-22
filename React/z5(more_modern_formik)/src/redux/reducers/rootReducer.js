import { combineReducers } from "redux";
import { favouriteReducer } from "./favouriteReducer";
import { cardsReducer } from "./cardsReducer";
import { basketReducer } from "./basketReducer";
import { modalsFlagReducer } from "./modalsFlagReducer";

export const rootReducer = combineReducers({
  fav: favouriteReducer,
  bask: basketReducer,
  cards: cardsReducer,
  modalsFlags: modalsFlagReducer
})

