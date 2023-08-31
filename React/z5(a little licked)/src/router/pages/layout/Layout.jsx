import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom'
import { getCardsThunk } from './getCardsThunk';
import { Modal } from '../../../Components/Modal';

export function Layout() {
  const isCardsLoadind = useSelector(state => state.cards.isCardsLoadind)

  const idFavouriteCards = useSelector(store => store.fav.idFavouriteCards);
  const idCardsInBasket = useSelector(store => store.bask.idCardsInBasket);
  const isModalFirstActiveID = useSelector(state => state.modalsFlags.isModalFirstActiveID);
  const isModalSecondActiveId = useSelector(state => state.modalsFlags.isModalSecondActiveId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [])

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(idCardsInBasket));
  }, [idCardsInBasket])

  useEffect(() => {
    localStorage.setItem('favour', JSON.stringify(idFavouriteCards))
  }, [idFavouriteCards])

  function handleClickDelete(deletedId) {
    dispatch({ type: 'REMOVE_CARD_IN_BASKET', payload: { id: deletedId } })
  }

  return (
    <div>
      <div className='navbar'>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to="favourite">Favourite</NavLink>
        <NavLink to="basket">Your basket</NavLink>
      </div>
      <div className='container'>
        {isCardsLoadind ?
          <p className='flag-loading'>Loading</p> :
          <Outlet />}
      </div>
      {isModalFirstActiveID &&
        < Modal
          headerText={"Do you want to add this good to the basket?"}
          bodyText={"Do you really want to do it?"}
          handleCloseModal={() => {
            dispatch({ type: 'PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE' })
          }}
          isCloseButton={true}
          id={isModalFirstActiveID}
          handleClickBtn={(id) => {
            dispatch({ type: 'ADD_ID_CARD_IN_BASKET', payload: { id: id } })
          }}
        />}

      {isModalSecondActiveId &&
        < Modal
          headerText={"Do you want to remove this item from your shopping cart?"}
          bodyText={"Do you really want to do it?"}
          handleCloseModal={() => {
            dispatch({ type: 'PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE' })
          }}
          isCloseButton={true}
          id={isModalSecondActiveId}
          handleClickBtn={(id) => handleClickDelete(id)}
        />}

    </div>
  )
}
