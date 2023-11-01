import { Cards } from '../UI/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { SideBar } from '../components/SideBar';
import styled from '@emotion/styled';

export function MainPage() {
  const cards = useSelector(state => state.cards.cards);
  const idFavouriteCards = useSelector(state => state.fav.idFavouriteCards);
  const idCardsInBasket = useSelector(state => state.bask.idCardsInBasket);
  const dispatch = useDispatch();


  const [theme] = useContext(ThemeContext);
  const showCardsAsTable = theme === 'asCards' ? false : true;

  function handleClickStar(clickId) {
    dispatch({ type: 'TOGGLE_ID_FAVOURITE_CARDS', payload: { id: clickId } })
  }
  
  return (

    <StyletDivComponents >
      <SideBar />

      <div className='main'>
        <h2>Ласкаво просимо до інтернет магазину по продажу самих звичайних поштових марок!</h2>
        <Cards
          cards={cards}
          handleClickBtn={(id) => {
            dispatch({ type: 'PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE', payload: { id: id } })
          }}
          handleClickStar={(id) => handleClickStar(id)}
          idFavouriteCards={idFavouriteCards}
          isStar={true}
          isButton={true}
          showCardsAsTable={showCardsAsTable}
        />
      </div>
    </StyletDivComponents>
  )
}

const StyletDivComponents= styled('div')(()=> ({
  display: 'flex'
}))
