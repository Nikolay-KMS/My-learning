import '../../css/main.css';
import { useState } from "react";
import { Modal } from "../../Components/Modal";
import { Cards } from '../../Components/Cards';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../Components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addCardToBusket, clickOnStar, pushCardsToBusket, pushCardsToFafourive } from '../../redux/actions';
import { busketCardsSelector, cardsSelector, favouriteSelector } from '../../redux/selectors';

export function MainPage() {
  const [isModalFirstActiveID, setIsModalFirstActiveID]  = useState(false);

  const cards = useSelector(cardsSelector)
  const cardsInBusket = useSelector(busketCardsSelector);
  const idFavouriteCards = useSelector(favouriteSelector);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClickStar (cardId) {
    dispatch(clickOnStar(cardId))
  }

  function handleAddCardToBusket(id) {
    dispatch(addCardToBusket(id))
  }

  return (
    <div>
      <Icons
        handleClickBasket={() => navigate('basket')}
        handleClickStar={() => navigate('favourite')}
        idFavouriteCards={idFavouriteCards}
        cardsInBusket={cardsInBusket}
      />
      <div className='main'>
        <h2>Ласкаво просимо до інтернет магазину по продажу самих звичайних поштових марок!</h2>
        <Cards 
          cards={cards}
          handleClickBtn={(id) => {
            setIsModalFirstActiveID(id)
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
            setIsModalFirstActiveID(false)
          }}
          isCloseButton={true}
          id={isModalFirstActiveID}
          handleClickBtn={(id) => handleAddCardToBusket(id)}
        />}
      </>
    </div>
  )
}


