import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet} from 'react-router-dom'
import { cardsSelector } from '../../redux/selectors';
import { pushCards } from '../../redux/actions';

export function Layout() {
  // const [cards, setCards]  = useState([]);
  // const [idFavouriteCards, setidFavouriteCards]  = useState([]);
  // const [idCardsInBasket, setidCardsInBasket]  = useState([]);
  const cards = useSelector(cardsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(res => {
      // setCards(res)
      // localStorage.setItem('allCards', JSON.stringify(res))  
      dispatch(pushCards(res))
      // console.log(res);
    })

    // const favouriteCardsLocal = JSON.parse(localStorage.getItem('favour'));
    // setidFavouriteCards(favouriteCardsLocal ? favouriteCardsLocal : [])

    // const cardsInBasketLocal= JSON.parse(localStorage.getItem('basket'));
    // setidCardsInBasket(cardsInBasketLocal ? cardsInBasketLocal : [])
  }, [])


  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify(idCardsInBasket));
  // }, [idCardsInBasket])

  //   useEffect(() => {
  //   localStorage.setItem('favour', JSON.stringify(idFavouriteCards)) 
  // }, [idFavouriteCards])

  return (
    <div>
      <div className='navbar'>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to="favourite">Favourite</NavLink>
        <NavLink to="basket">Your basket</NavLink>
      </div>
      <Outlet
        // context={{cards, setCards
        // }}
        />
    </div>
  )
}
