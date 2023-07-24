import '../../../css/main.css';
import React, { useEffect, useState } from "react";
import { Modal } from "../../../Components/Modal";
import { Cards } from '../../../Components/Cards';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Icons } from '../../../Components/Icons';

export function MainPage() {
  const [isModalFirstActiveID, setIsModalFirstActiveID]  = useState(false);

  const {cards}  = useOutletContext();
  const {idFavouriteCards, setidFavouriteCards}  = useOutletContext();
  const {idCardsInBasket, setidCardsInBasket}  = useOutletContext();

  const navigate = useNavigate();

  function handleClickStar (clickId) {
    idFavouriteCards.includes(clickId) ? 
    setidFavouriteCards(idFavouriteCards.filter(id => id !== clickId)) :
    setidFavouriteCards([...new Set([clickId, ...idFavouriteCards])])
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
          handleClickBtn={(id) => setidCardsInBasket([...new Set([id, ...idCardsInBasket])])}
        />}
      </>
    </div>
  )
}


