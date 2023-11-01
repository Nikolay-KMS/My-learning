import { modalsFlagReducer } from "./modalsFlagReducer"

describe('Test modals Flag Reducer', () => {
  const initialState = {};
  const finalState = { isModalFirstActiveID: 5 };
  const PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE_ACTION = {
    type: 'PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE', payload: { id: 5 }
  }
  test('PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE', () => {
    expect(modalsFlagReducer(initialState, PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE_ACTION)).toEqual(finalState)
  })

  const initialState_2 = { isModalFirstActiveID: 5 };
  const finalState_2 = { isModalFirstActiveID: false };
  const PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE_ACTION = { type: 'PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE' }
  test('PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE', () => {
    expect(modalsFlagReducer(initialState_2, PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE_ACTION)).toEqual(finalState_2)
  })

  const initialState_3 = {};
  const finalState_3 = { isModalSecondActiveId: 7 };
  const PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE_ACTION = {
    type: 'PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE', payload: { id: 7 }
  }
  test('PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE', () => {
    expect(modalsFlagReducer(initialState_3, PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE_ACTION)).toEqual(finalState_3)
  })

  const initialState_4 = {isModalSecondActiveId: 7};
  const finalState_4 = { isModalSecondActiveId: false };
  const PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE_ACTION = {type: 'PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE'}
  test('PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE', () => {
    expect(modalsFlagReducer(initialState_4, PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE_ACTION)).toEqual(finalState_4)
  })
})