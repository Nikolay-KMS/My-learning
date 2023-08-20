import React from "react";
import { Card } from "./Card";
import PropTypes from 'prop-types';

export function Cards(props) {
  
  return (
    <div>
      <div className="cards">          
        {props.cards.map((card) => (
          <Card 
            card= {card} 
            key={card.id} 
            handleClickBtn= {props.handleClickBtn}
            handleClickStar= {props.handleClickStar}
            isFavouriteActive= {props.idFavouriteCards.includes(card.id) ? true : false}
            isStar={props.isStar}
            isButton={props.isButton}
          />
        ))}
      </div>
    </div>    
  )
}

  
Cards.propTypes = {
  cards: PropTypes.array,
  handleClickBtn: PropTypes.func,
  handleClickStar: PropTypes.func,
  idFavouriteCards: PropTypes.array
}