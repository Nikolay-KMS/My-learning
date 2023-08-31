import { BasketCards } from './BasketCards';
import { useDispatch, useSelector } from 'react-redux';
import { BasketFooter } from './BasketFooter';

export function BasketPage() {
  const cards = useSelector(state => state.cards.cards);
  const idCardsInBasket = useSelector(state => state.bask.idCardsInBasket);
  const dispatch = useDispatch();

  function handleClickModal(id) {
    dispatch({ type: 'PASS_ID_CARD_TO_IS_SECOND_MODAL_ACTIVE', payload: { id: id } })
  }
  const basketCards= cards.filter(card => Object.keys(idCardsInBasket).includes(`${card.id}`))

  return (
    <div>
      <div className='main column'>
        <BasketCards
          basketCards={basketCards}
          handleClickBtn={(id) => {
            handleClickModal(id)
          }}
          isStar={false}
          isButton={false}
          isCloseButton={true}
          idCardsInBasket={idCardsInBasket}
        />
      </div>
      <BasketFooter
        cards={basketCards}
      />
    </div>

  )
}
