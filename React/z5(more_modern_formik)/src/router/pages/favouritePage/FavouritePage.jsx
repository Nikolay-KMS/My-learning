import { Cards } from '../../../Components/Cards';
import { useDispatch, useSelector } from 'react-redux';

export  function FavouritePage() {
  const cards= useSelector(state => state.cards.cards)
  const idFavouriteCards = useSelector(state => state.fav.idFavouriteCards)
  const dispatch = useDispatch();

  function handleClickStar (clickId) {
    idFavouriteCards.includes(clickId) ? 
    dispatch({type: 'REMOVE_ID_FAVOURITE_CARDS', payload: {id: clickId}}) :
    dispatch({type: 'ADD_ID_FAVOURITE_CARDS', payload: {id: clickId}});
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
