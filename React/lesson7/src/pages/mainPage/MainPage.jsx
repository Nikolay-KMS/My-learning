import '../../css/main.css';
import React, { useEffect, useState } from "react";
import { Modal } from "../../Components/Modal";
import { Cards } from '../../Components/Cards';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Icons } from '../../Components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addCardToBusket, clickOnStar } from '../../redux/actions';
import { busketSelector, cardsSelector, favouriteSelector } from '../../redux/selectors';

export function MainPage() {
  const [isModalFirstActiveID, setIsModalFirstActiveID]  = useState(false);
  // const {cards}  = useOutletContext();
  const cards = useSelector(cardsSelector)

  
  const idCardsInBasket = useSelector(busketSelector);
  const idFavouriteCards = useSelector(favouriteSelector);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClickStar (cardId) {
    dispatch(clickOnStar(cardId))
  }

  function handleAddCardToBusket(id) {
    // setidCardsInBasket([...new Set([id, ...idCardsInBasket])])
    dispatch(addCardToBusket(id))
  }

  // console.log(idCardsInBasket);
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


