import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import { getCardsThunk } from '../components/getCardsThunk';
import { Modal } from '../UI/Modal';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Navbar } from '../components/Navbar';

export function Layout() {
  const isCardsLoadind = useSelector(state => state.cards.isCardsLoadind)
  const idFavouriteCards = useSelector(store => store.fav.idFavouriteCards);
  const idCardsInBasket = useSelector(store => store.bask.idCardsInBasket);
  const isModalFirstActiveID = useSelector(state => state.modalsFlags.isModalFirstActiveID);
  const isModalSecondActiveId = useSelector(state => state.modalsFlags.isModalSecondActiveId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(idCardsInBasket));
  }, [idCardsInBasket])

  useEffect(() => {
    localStorage.setItem('favour', JSON.stringify(idFavouriteCards))
  }, [idFavouriteCards])

  const handleClickBtnOk = (id) => {
    dispatch({ type: 'ADD_ID_CARD_IN_BASKET', payload: { id: id } });
    dispatch({ type: 'PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE' });
  }

  const handleCloseFirstModal = () => {
    dispatch({ type: 'PASS_FALSE_TO_IS_FIRST_MODAL_ACTIVE' });
  }

  function handleClickDelete(deletedId) {
    dispatch({ type: 'REMOVE_CARD_IN_BASKET', payload: { id: deletedId } });
    dispatch({ type: 'PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE' });
  }

  const handleCloseSecondModal = () => {
    dispatch({ type: 'PASS_FALSE_TO_IS_SECOND_MODAL_ACTIVE' });
  }

  const switchTheme = () => {
    setTheme(theme === 'asCards' ? 'asTable' : 'asCards');
  }

  return (
    <div>
      <div className='container'>
        <Navbar
          switchTheme={() => switchTheme()}
          handleClickBasket={() => navigate('basket')}
          handleClickStar={() => navigate('favourite')}
          idFavouriteCards={idFavouriteCards}
          idCardsInBasket={idCardsInBasket}
        />
        {isCardsLoadind ?
          <p className='flag-loading'>Loading</p> :
          <Outlet />}
      </div>
      {isModalFirstActiveID &&
        < Modal
          headerText={"Do you want to add this good to the basket?"}
          handleCloseModal={handleCloseFirstModal}
          isCloseButton={true}
          id={isModalFirstActiveID}
          handleClickBtn={(id) => handleClickBtnOk(id)}
        />}

      {isModalSecondActiveId &&
        < Modal
          headerText={"Do you want to remove this item from your shopping cart?"}
          handleCloseModal={handleCloseSecondModal}
          isCloseButton={true}
          id={isModalSecondActiveId}
          handleClickBtn={(id) => handleClickDelete(id)}
        />}

    </div>
  )
}
