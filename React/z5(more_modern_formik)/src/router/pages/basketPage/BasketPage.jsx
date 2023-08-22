import { BasketCards } from './BasketCards';
import { Modal } from '../../../Components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { BasketFooter } from './BasketFooter';

export  function BasketPage() {
  const cards = useSelector(state => state.cards.cards);
  const idCardsInBasket = useSelector(state => state.bask.idCardsInBasket);
  const isModalSecondActiveId = useSelector(state => state.modalsFlags.isModalSecondActiveId);
  const dispatch = useDispatch();

  function handleClickDelete(deletedId) {
    dispatch({type: 'REMOVE_CARD_IN_BASKET', payload: {id: deletedId}})
  }

  function handleClickModal(id) {
    dispatch({type: 'PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE', payload: {id: id}})
  }

  return (
    <div>
      <div className='main column'>
        <BasketCards 
          basketCards={cards.filter(card => Object.keys(idCardsInBasket).includes(`${card.id}`))}
          handleClickBtn={(id) => {
            handleClickModal(id)
          }}
          isStar={false}
          isButton={false}
          isCloseButton={true}
          idCardsInBasket= {idCardsInBasket}

        />
        {isModalSecondActiveId &&
          < Modal
            headerText={"Do you want to remove this item from your shopping cart?"}
            bodyText={"Do you really want to do it?"}
            handleCloseModal={() => {
              dispatch({type: 'PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE'})
            }}
            isCloseButton={true}
            id={isModalSecondActiveId}
            handleClickBtn={(id) => handleClickDelete(id)}
          />}
      </div>
      <BasketFooter 
        cards={cards.filter(card => Object.keys(idCardsInBasket).includes(`${card.id}`))}
      />
    </div>

  )
}
