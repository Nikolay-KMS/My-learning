import React, { useEffect, useState } from 'react'
import { Cards } from '../../../Components/Cards';
import { useOutletContext } from 'react-router-dom';

export  function FavouritePage() {
  const {idFavouriteCards, setidFavouriteCards}  = useOutletContext();
  const {cards}  = useOutletContext();

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
        cards={cards.filter(card => idFavouriteCards.includes(card.id))}
        handleClickStar={(id) => handleClickStar(id)}
        idFavouriteCards={idFavouriteCards}
        isStar={true}
        isButton={false}
      />
    </div>
  )
}
