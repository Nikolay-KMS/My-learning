import React from 'react'
import { IconStar } from './svg/IconStar'
import { IconBasket } from './svg/IconBasket'

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
        <div >
          <IconBasket 
            handleClick={() => props.handleClickBasket()}
          />
        </div>
        <p 
          className='iconBasketText'
          onClick={() => props.handleClickBasket()}
        > 
          Cart ({props.idCardsInBasket.length})
        </p>
      </div>
    </div>
  )
}
