import React from "react";
import PropTypes from 'prop-types';
import { ButtonMUI } from "../UI/ButtonMUI";
import { Card } from "../UI/Card";

export function BasketCards(props) {

  return (
    <div>
      <h2>Ваша корзина з товарами</h2>
      {!props.basketCards.length && <h2>Нажаль тут ще нічого немає, дуже рекомендую зробити донат!</h2>}
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
              <ButtonMUI
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