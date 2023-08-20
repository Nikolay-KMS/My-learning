import React, { useEffect, useState } from 'react'
import { BasketCards } from './BasketCards';
import { Modal } from '../../Components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { busketCardsSelector, cardsSelector } from '../../redux/selectors';
import { removeCardFromBusket } from '../../redux/actions';

export  function BasketPage() {
  const [isModalActiveId, setIsModalActiveId]  = useState(false);

  const cards = useSelector(busketCardsSelector);
  const dispatch = useDispatch();


  function handleClickDelete(deletedId) {
    dispatch(removeCardFromBusket(deletedId));
  }

  function handleClickModal(id) {
    setIsModalActiveId(id)
  }

  return (
    <div className='main column'>
      <BasketCards 
        cards={cards}
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
