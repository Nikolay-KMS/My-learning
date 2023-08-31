
import { cardsReducer } from "./cardsReducer"

describe('Test cards reducer', () => {

  const initialState = {
    cards: [],
    isCardsLoadind: false,
  }  
  const finalState = {
    cards: [],
    isCardsLoadind: true
  };
  const GET_CARDS_REQUEST_ACTION = {
    type: 'GET_CARDS_REQUEST'
  };
  test('Test GET_CARDS_REQUEST', () => {
    expect(cardsReducer(initialState, GET_CARDS_REQUEST_ACTION)).toStrictEqual(finalState)
  })

  const initialState_2 = {
    cards: [],
    isCardsLoadind: false,
  }  
  const finalState_2 = {
    cards: [1, 2, 3, 4, 5, 6],
    isCardsLoadind: false
  };
  const GET_CARDS_SUCCESSFULLY_ACTION = {
    type: 'GET_CARDS_SUCCESSFULLY',
    payload: {cards: [1, 2, 3, 4, 5, 6]}
  };
  test('Test GET_CARDS_SUCCESSFULLY', () => {
    expect(cardsReducer(initialState_2, GET_CARDS_SUCCESSFULLY_ACTION))
    .toStrictEqual(finalState_2)
  })

  const initialState_3 = {
    cards: [],
    isCardsLoadind: false,
  }  
  const finalState_3 = {
    cards: [],
    isCardsLoadind: false
  };
  const GET_CARDS_ERROR_ACTION = {
    type: 'GET_CARDS_ERROR'
  };
  test('Test GET_CARDS_ERROR', () => {
    expect(cardsReducer(initialState_3, GET_CARDS_ERROR_ACTION))
    .toStrictEqual(finalState_3)
  })

})