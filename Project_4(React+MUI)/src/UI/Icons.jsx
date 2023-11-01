import { IconBasket } from './svg/IconBasket'
import { IconStar } from './svg/IconStar'
import { ButtonMUI } from './ButtonMUI'

export function Icons(props) {

  return (
    <div className='icons'>
      <div className='icon'>
        <IconStar
          size={40}
          handleClick={() => props.handleClickStar()}
        />
        <p
          className='iconStarText'
          onClick={() => props.handleClickStar()}
        >
          Favourite ({props.idFavouriteCards.length})
        </p>
      </div>
      <div className='icon'>
        <IconBasket
          handleClick={() => props.handleClickBasket()}
        />
        <p
          className='iconBasketText'
          onClick={() => props.handleClickBasket()}
        >
          Cart ({Object.keys(props.idCardsInBasket).length})
        </p>
      </div>
    </div>
  )
}
