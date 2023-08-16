import { useDispatch } from "react-redux";

export const getCardsThunk = () => {
  return (dispatch) => {
  dispatch({type: 'GET_CARDS_REQUEST'})
  setTimeout(() => {
    fetch("./data.json")
    .then(res => res.json())
    // Promise.reject(new Error('Something go wrong'))
    .then(res => {
      // localStorage.setItem('allCards', JSON.stringify(res))   
      dispatch({type: 'GET_CARDS_SUCCESSFULLY', payload: {cards: res}}) 
    })
    .catch(e => {console.log(e);})
  }, 500);
}}