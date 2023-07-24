import React, { useEffect, useState } from 'react'
import { BasketCards } from './BasketCards';
import { Modal } from '../../../Components/Modal';
import { useOutletContext } from 'react-router-dom';

export  function BasketPage() {
  const [isModalActiveId, setIsModalActiveId]  = useState(false);

  const {idCardsInBasket, setidCardsInBasket}  = useOutletContext();
  const {cards}  = useOutletContext();

  function handleClickDelete(deletedId) {
    setidCardsInBasket(idCardsInBasket.filter(id => id !== deletedId))
  }

  function handleClickModal(id) {
    setIsModalActiveId(id)
  }

  return (
    <div className='main column'>
      <BasketCards 
        cards={cards.filter(card => idCardsInBasket.includes(card.id))}
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
