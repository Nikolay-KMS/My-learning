import { Cards } from '../UI/Cards';
// import { useNavigate } from 'react-router-dom';
// import { Icons } from '../UI/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { SideBar } from '../components/SideBar';
import styled from '@emotion/styled';
// import { makeStyles } from '@mui/material';

export function MainPage() {
  const cards = useSelector(state => state.cards.cards);
  const idFavouriteCards = useSelector(state => state.fav.idFavouriteCards);
  const idCardsInBasket = useSelector(state => state.bask.idCardsInBasket);
  const dispatch = useDispatch();

  // const navigate = useNavigate();

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

// const StyledList= styled(List)(()=> ({
//   // border: '5px solid red',
//   // borderRadius: '100px',
//   // width: 'max-content',
//   backgroundColor: '#412e2e',
//   height: '100%'
// }));