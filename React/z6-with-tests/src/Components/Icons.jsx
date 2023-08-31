import { IconStar } from './svg/IconStar'
import { IconBasket } from './svg/IconBasket'
import { Button } from './Button'

export function Icons(props) {
  
  return (
    <div className='icons'>
      <div className='switchTheme'>
        <Button
          text={'Change theme'}
          handleClickBtn={props.switchTheme}
          className="switchBtn"
        />
      </div>
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
