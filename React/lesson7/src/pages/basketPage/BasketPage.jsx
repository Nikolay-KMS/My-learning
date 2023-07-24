import React, { useEffect, useState } from 'react'
import { BasketCards } from './BasketCards';
import { Modal } from '../../Components/Modal';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { busketSelector, cardsSelector } from '../../redux/selectors';
import { REMOVE_CART_FROM_BUSKET_ACTION_TYPE, removeCardFromBusket } from '../../redux/actions';

export  function BasketPage() {
  const [isModalActiveId, setIsModalActiveId]  = useState(false);

  // const {idCardsInBusket, setidCardsInBasket}  = useOutletContext();

  const idCardsInBusket = useSelector(busketSelector);
  const dispatch = useDispatch();

  // const {cards}  = useOutletContext();
  const cards = useSelector(cardsSelector);

  function handleClickDelete(deletedId) {
    // setidCardsInBasket(idCardsInBusket.filter(id => id !== deletedId))
    dispatch(removeCardFromBusket(deletedId));
  }

  function handleClickModal(id) {
    setIsModalActiveId(id)
  }

  return (
    <div className='main column'>
      <BasketCards 
        cards={cards.filter(card => idCardsInBusket.includes(card.id))}
        handleClickBtn={(id) => {
          handleClickModal(id)
        }}
        isStar={false}
        isButton={false}
        isCloseButton={true}
      />
      {isModalActiveId && 
        < Modal
          headerText={"Do you want to remove this item from your shopping cart?"}
          bodyText={"Do you really want to do it?"}
          handleCloseModal={() => {
            setIsModalActiveId(false)
          }}
          isCloseButton={true}
          id={isModalActiveId}
          handleClickBtn={(id) => handleClickDelete(id)}
        />}
    </div>
  )
}
