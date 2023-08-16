import '../../../css/main.css';
import { Modal } from "../../../Components/Modal";
import { Cards } from '../../../Components/Cards';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../../Components/Icons';
import { useDispatch, useSelector } from 'react-redux';

export function MainPage() {
  const cards = useSelector(state => state.cards);
  const idFavouriteCards = useSelector(state => state.idFavouriteCards);
  const idCardsInBasket = useSelector(state => state.idCardsInBasket);
  const isModalFirstActiveID = useSelector(state => state.isModalFirstActiveID);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClickStar (clickId) {
    idFavouriteCards.includes(clickId) ? 
    dispatch({type: 'REMOVE_ID_FAVOURITE_CARDS', payload: {id: clickId}}) :
    dispatch({type: 'ADD_ID_FAVOURITE_CARDS', payload: {id: clickId}});
  }

  return (
    <div>
      <Icons
        handleClickBasket={() => navigate('basket')}
        handleClickStar={() => navigate('favourite')}
        idFavouriteCards={idFavouriteCards}
        idCardsInBasket={idCardsInBasket}
      />
      <div className='main'>
        <h2>Ласкаво просимо до інтернет магазину по продажу самих звичайних поштових марок!</h2>
        <Cards 
          cards={cards}
          handleClickBtn={(id) => {
            dispatch({type: 'PASS_ID_CARD_TO_IS_FIRST_MODAL_ACTIVE', payload: {id: id}})
          }}
          handleClickStar={(id) => handleClickStar(id)}
          idFavouriteCards={idFavouriteCards}
          isStar={true}
          isButton={true}
        />
      </div>
      <>
        {isModalFirstActiveID && 
        < Modal 
          headerText={"Do you want to add this good to the basket?"}
          bodyText={"Do you really want to do it?"}
          handleCloseModal={() => {
            dispatch({type: 'PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE', payload: {isModalFirstActiveID: false}})
          }}
          isCloseButton={true}
          id={isModalFirstActiveID}
          handleClickBtn={(id) => {
            if (idCardsInBasket?.[id]) {
              dispatch({type: 'INCREASE_QUANTITY_CARD_IN_BASKET', payload: {id: id}})
            } else {
              dispatch({type: 'ADD_ID_CARD_IN_BASKET', payload: {id: id}})
            }
          }}
        />}
      </>
    </div>
  )
}


