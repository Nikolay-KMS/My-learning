import React, { useEffect, useState } from 'react'
import { Cards } from '../../Components/Cards';

export  function FavouritePage() {
  const [allCards, setallCards]  = useState([]);
  const [idFavouriteCards, setidFavouriteCards]  = useState([]);

  useEffect(() => {
    setidFavouriteCards(JSON.parse(localStorage.getItem('favour')));
    setallCards(JSON.parse(localStorage.getItem('allCards')));
  }, [])

  useEffect(() => {
    localStorage.setItem('favour', JSON.stringify(idFavouriteCards)) 
  }, [idFavouriteCards])

  function handleClickStar (clickId) {
    idFavouriteCards.includes(clickId) ? 
    setidFavouriteCards(idFavouriteCards.filter(id => id !== clickId)) :
    setidFavouriteCards([...new Set([clickId, ...idFavouriteCards])])
  }

  return (
    <div className='main column'>
      <h2>Ваші бажані товари</h2>
      {
        (idFavouriteCards == false) && <h2>Зробити донат на ЗСУ, будуть тобі карточки!</h2>
      }
      <Cards 
        cards={allCards.filter(card => idFavouriteCards.includes(card.id))}
        handleClickStar={(id) => handleClickStar(id)}
        idFavouriteCards={idFavouriteCards}
        isStar={true}
        isButton={false}
      />
    </div>
  )
}
