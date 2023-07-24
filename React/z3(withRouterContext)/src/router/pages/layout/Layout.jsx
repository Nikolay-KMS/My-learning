import { useEffect, useState } from 'react';
import { NavLink, Outlet} from 'react-router-dom'

export function Layout() {
  const [cards, setCards]  = useState([]);
  const [idFavouriteCards, setidFavouriteCards]  = useState([]);
  const [idCardsInBasket, setidCardsInBasket]  = useState([]);

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(res => {
      setCards(res)
      localStorage.setItem('allCards', JSON.stringify(res))    
    })

    const favouriteCardsLocal = JSON.parse(localStorage.getItem('favour'));
    setidFavouriteCards(favouriteCardsLocal ? favouriteCardsLocal : [])

    const cardsInBasketLocal= JSON.parse(localStorage.getItem('basket'));
    setidCardsInBasket(cardsInBasketLocal ? cardsInBasketLocal : [])
  }, [])


  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(idCardsInBasket));
  }, [idCardsInBasket])

    useEffect(() => {
    localStorage.setItem('favour', JSON.stringify(idFavouriteCards)) 
  }, [idFavouriteCards])

  return (
    <div>
      <div className='navbar'>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to="favourite">Favourite</NavLink>
        <NavLink to="basket">Your basket</NavLink>
      </div>
      <Outlet
        context={{cards, setCards, 
          idFavouriteCards, setidFavouriteCards, 
          idCardsInBasket, setidCardsInBasket}}
        />
    </div>
  )
}
