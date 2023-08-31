
import { basketReducer } from "./basketReducer";

describe('Test basket Reducer', () => {

  const initialState= {
    idCardsInBasket: {},  
   }
  const stateFinal= {
    idCardsInBasket: {'1': 1, 2: 1},  
  }
  const GET_ID_CARDS_IN_BASKET_ACTION= {
    type: 'GET_ID_CARDS_IN_BASKET', payload:{ idCardsInBasket: {1: 1, 2: 1}}
  };

  test('Test GET_ID_CARDS_IN_BASKET', () => {
    expect(basketReducer(initialState, GET_ID_CARDS_IN_BASKET_ACTION)).toEqual(stateFinal);
  });
  
  const initialState_2= {
    idCardsInBasket: {},  
   }
  const stateFinal_2= {
    idCardsInBasket: {'1': 1},  
  }
  const ADD_ID_CARD_IN_BASKET_ACTION_2= {
    type: 'ADD_ID_CARD_IN_BASKET', payload: {id: 1}
  };

  test('Test 1 ADD_ID_CARD_IN_BASKET', () => {
    expect(basketReducer(initialState_2, ADD_ID_CARD_IN_BASKET_ACTION_2)).toEqual(stateFinal_2);
  });


  const initialState_3= {
    idCardsInBasket: {'1': 1},  
   }
  const stateFinal_3= {
    idCardsInBasket: {'1': 2},  
  }
  const ADD_ID_CARD_IN_BASKET_ACTION_3= {
    type: 'ADD_ID_CARD_IN_BASKET', payload: {id: 1}
  };

  test('Test 2 ADD_ID_CARD_IN_BASKET', () => {
    expect(basketReducer(initialState_3, ADD_ID_CARD_IN_BASKET_ACTION_3)).toEqual(stateFinal_3);
  });

  const initialState_4= {
    idCardsInBasket: {1: 1, 2: 1, 3: 1}, 
   }
  const stateFinal_4= {
    idCardsInBasket: {2: 1, 3: 1},  
  }
  const REMOVE_CARD_IN_BASKET_ACTION= {
    type: 'REMOVE_CARD_IN_BASKET', payload: {id: 1}
  };
  test('Test REMOVE_CARD_IN_BASKET', ()=> {
    expect(basketReducer(initialState_4, REMOVE_CARD_IN_BASKET_ACTION)).toEqual(stateFinal_4)
  })
  const initialState_5= {
    idCardsInBasket: {1: 1, 2: 1, 3: 1}, 
   }
  const stateFinal_5= {
    idCardsInBasket: {},  
  }
  const REMOVE_ALL_CARDS_IN_BASKET_ACTION= {
    type: 'REMOVE_ALL_CARDS_IN_BASKET'};
  test('Test REMOVE_ALL_CARDS_IN_BASKET', ()=> {
    expect(basketReducer(initialState_5, REMOVE_ALL_CARDS_IN_BASKET_ACTION)).toEqual(stateFinal_5)
  })
})