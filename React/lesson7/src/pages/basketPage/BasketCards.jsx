import React from "react";
import { Card } from "../../Components/Card";
import PropTypes from 'prop-types';
import { Button } from "../../Components/Button";
import { useOutletContext } from "react-router-dom";

export function BasketCards(props) {

  return (
    <div>
      <h2>Ваша корзина з товарами</h2>
      {
        (props.cards == false) && <h2>Нажаль тут ще нічого немає, дуже рекомендую зробити донат!</h2>
      }
      <div className="cards">          
        {props.cards.map((card) => (
          <div className="row" key={card.id} >
            <Card
              card= {card}
              handleClickBtn= {props.handleClickBtn}
              handleClickStar= {props.handleClickStar}
              isStar={props.isStar}
              isButton={props.isButton}
              isCloseButton={props.isCloseButton}
            />
            {props.isCloseButton &&
              <Button 
                text="X"
                handleClickBtn={() => props.handleClickBtn(card.id)}
                className="btnClose"
            />}
          </div>
        ))}
      </div>
    </div>    
  )
}
  
BasketCards.propTypes = {
  cards: PropTypes.array,
  handleClickBtn: PropTypes.func,
  handleClickStar: PropTypes.func,
  favouriteCards: PropTypes.array
}