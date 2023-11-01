import { Cards } from '../UI/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { SideBar } from '../components/SideBar';
import styled from '@emotion/styled';

export function FavouritePage() {
  const cards = useSelector(state => state.cards.cards)
  const idFavouriteCards = useSelector(state => state.fav.idFavouriteCards)
  const dispatch = useDispatch();

  function handleClickStar(clickId) {
    dispatch({ type: 'TOGGLE_ID_FAVOURITE_CARDS', payload: { id: clickId } });
  }

  return (
    <StyletDivComponents>
      <SideBar />

      <div className='main'>
        <h2>Ваші бажані товари</h2>
        {
          (idFavouriteCards == false) && <h2>Зроби донат на ЗСУ, будуть тобі карточки!</h2>
        }
        <Cards
          cards={cards.filter(card => idFavouriteCards.includes(card.id))}
          handleClickStar={(id) => handleClickStar(id)}
          idFavouriteCards={idFavouriteCards}
          isStar={true}
          isButton={false}
        />
      </div>
    </StyletDivComponents>
  )
}

const StyletDivComponents= styled('div')(()=> ({
  display: 'flex',
}))