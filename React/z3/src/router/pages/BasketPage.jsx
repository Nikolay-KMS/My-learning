import React, { useEffect, useState } from 'react'
import { BasketCards } from '../../Components/BasketCards';
import { Modal } from '../../Components/Modal';

export  function BasketPage() {
  const [cardsInBasket, setCardsInBasket]  = useState([]);
  const [isModalActiveId, setisModalActiveId]  = useState(false);

  useEffect(() => {
    const idCardsInBasket = JSON.parse(localStorage.getItem('basket'));
    const cards = JSON.parse(localStorage.getItem('allCards'));
    setCardsInBasket(cards.filter(card => idCardsInBasket.includes(card.id)))
  }, [])

  function handleClickDelete(deletedId) {
    console.log(deletedId);
    const cards = (cardsInBasket.filter(card => card.id !== deletedId));
    setCardsInBasket(cards)
    const idList = cards.map(card => card.id);
    localStorage.setItem("basket", JSON.stringify(idList));
  }

  function handleClickModal(id) {
    setisModalActiveId(id)
  }


  return (
    <div className='main column'>
      <BasketCards 
        cards={cardsInBasket}
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
            setisModalActiveId(false)
          }}
          isCloseButton={true}
          id={isModalActiveId}
          handleClickBtn={(id) => handleClickDelete(id)}
        />}
    </div>
  )
}
