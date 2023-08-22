import React from "react";
import { Card } from "../../../Components/Card";
import PropTypes from 'prop-types';
import { Button } from "../../../Components/Button";
import { useSelector } from "react-redux";

export function BasketCards(props) {

  return (
    <div>
      <h2>Ваша корзина з товарами</h2>
      {
        (props.basketCards == false) && <h2>Нажаль тут ще нічого немає, дуже рекомендую зробити донат!</h2>
      }
      <div className="cards">    
        {props.basketCards.map((card) => (
          <div className="row" key={card.id} >
            <Card 
              card= {card}
              handleClickBtn= {props.handleClickBtn}
              handleClickStar= {props.handleClickStar}
              isStar={props.isStar}
              isButton={props.isButton}
              isCloseButton={props.isCloseButton}
            />
            <p className="card-quantity">&nbsp;  x {props.idCardsInBasket[card.id]} шт.</p>
            {props.isCloseButton &&
              <Button 
                text="X"
                handleClickBtn={() => props.handleClickBtn(card.id)}
                className="button btnClose"
            />}
          </div>
        ))}
      </div>
    </div>    
  )
}
  
BasketCards.propTypes = {
  basketCards: PropTypes.array,
  handleClickBtn: PropTypes.func,
  handleClickStar: PropTypes.func,
  favouriteCards: PropTypes.array
}