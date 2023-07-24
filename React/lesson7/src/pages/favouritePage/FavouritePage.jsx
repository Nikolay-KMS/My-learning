// import React from 'react'
import { Cards } from '../../Components/Cards';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cardsSelector, favouriteSelector } from '../../redux/selectors';
import { clickOnStar } from '../../redux/actions';

export  function FavouritePage() {
  // const {cards}  = useOutletContext();
  const cards = useSelector(cardsSelector)

  const idFavouriteCards = useSelector(favouriteSelector);
  const dispatch = useDispatch();

  function handleClickStar (clickId) {
    dispatch(clickOnStar(clickId))
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
