import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet} from 'react-router-dom'
import { getCardsThunk } from '../../../redux/thunk';

export function Layout() {
  const idFavouriteCards = useSelector(store => store.fav.idFavouriteCards);
  const idCardsInBasket = useSelector(store => store.bask.idCardsInBasket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsThunk())

    let favouriteCardsLocal = JSON.parse(localStorage.getItem('favour'));
    favouriteCardsLocal = favouriteCardsLocal ? favouriteCardsLocal : [];
    dispatch({type: 'GET_ID_FAVOURITE_CARDS', payload: {idFavouriteCards: favouriteCardsLocal}})

    let cardsInBasketLocal= JSON.parse(localStorage.getItem('basket'));
    cardsInBasketLocal= cardsInBasketLocal ? cardsInBasketLocal : {};
    dispatch({type: 'GET_ID_CARDS_IN_BASKET', payload: {idCardsInBasket: cardsInBasketLocal}})
  }, [])


  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(idCardsInBasket));
  }, [idCardsInBasket])

    useEffect(() => {
    localStorage.setItem('favour', JSON.stringify(idFavouriteCards)) 
  }, [idFavouriteCards])

  // console.count('Render Layout');

  return (
    <div>
      <div className='navbar'>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to="favourite">Favourite</NavLink>
        <NavLink to="basket">Your basket</NavLink>
      </div>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}
