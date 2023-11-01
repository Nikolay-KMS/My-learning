import { favouriteReducer } from "./favouriteReducer"

describe('Test favourite Reducer', () => {
  const initialState = [];
  const finalState = { idFavouriteCards: [1, 2, 3, 4] };
  const GET_ID_FAVOURITE_CARDS_ACTION = {
    type: 'GET_ID_FAVOURITE_CARDS',
    payload: { idFavouriteCards: [1, 2, 3, 4] }
  }
  test('GET_ID_FAVOURITE_CARDS', () => {
    expect(favouriteReducer(initialState, GET_ID_FAVOURITE_CARDS_ACTION)).toEqual(finalState)
  })

  const initialState_2 = {idFavouriteCards: [1, 2]};
  const finalState_2 = {idFavouriteCards: [1, 2, 3]};
  const ADD_ID_TO_FAVOURITE_CARDS_ACTION = {
    type: 'TOGGLE_ID_FAVOURITE_CARDS',
    payload: { id: 3 }
  }
  test('ADD_ID_TO_FAVOURITE_CARDS', () => {
    expect(favouriteReducer(initialState_2, ADD_ID_TO_FAVOURITE_CARDS_ACTION)).toEqual(finalState_2)
  })

  const initialState_3 = {idFavouriteCards: [1, 2, 3]};
  const finalState_3 = {idFavouriteCards: [1, 2]};
  const REMOVE_ID_FROM_FAVOURITE_CARDS_ACTION = {
    type: 'TOGGLE_ID_FAVOURITE_CARDS',
    payload: { id: 3 }
  }
  test('REMOVE_ID_FROM_FAVOURITE_CARDS', () => {
    expect(favouriteReducer(initialState_3, REMOVE_ID_FROM_FAVOURITE_CARDS_ACTION)).toEqual(finalState_3)
  })
})