import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet} from 'react-router-dom'
import { cardsSelector, favouriteSelector, idQuantityBusketSelector } from '../../redux/selectors';
import { pushCards, pushCardsToBusket, pushCardsToFafourive } from '../../redux/actions';

export function Layout() {
  const cards = useSelector(cardsSelector);
  const dispatch = useDispatch();
  const idFavouriteCards = useSelector(favouriteSelector);
  const idQuantityBusket = useSelector(idQuantityBusketSelector)

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(res => {
      dispatch(pushCards(res))
    })

    const favouriteCardsLocal = JSON.parse(localStorage.getItem('favour'));
    dispatch(pushCardsToFafourive(favouriteCardsLocal));

    const cardsInBasketLocal= JSON.parse(localStorage.getItem('basket'));
    dispatch(pushCardsToBusket(cardsInBasketLocal))
  }, [])

  useEffect(() => {
    localStorage.setItem('favour', JSON.stringify(idFavouriteCards));
  },[idFavouriteCards])

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(idQuantityBusket));
  },[idQuantityBusket])


  return (
    <div>
      <div className='navbar'>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to="favourite">Favourite</NavLink>
        <NavLink to="basket">Your basket</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
