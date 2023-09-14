import React from "react";
import { ButtonWithBasket } from "./ButtonWithBasket";
import { IconStar } from "./svg/IconStar";
import PropTypes from "prop-types";
import { GoodColor } from "./GoodColor";

export function Card(props) {
  const cardClassName= props.showCardsAsTable ? 'card-table' : 'card'
  return (
    <div className={cardClassName} id={props.card.id}>
      <div className="content">        
        <h3>{props.card.name}</h3>
        {props.showCardsAsTable || <img className="card-img" src={props.card.url} alt="pict" />}
        {props.showCardsAsTable || <div className="goodsColor">
          {props.card.color.map((color) => (
            <GoodColor
              key={props.card.id + color}
              bgColor={color} />
          ))}
        </div>}
      </div>
      <div className="card-footer">
        {props.isStar && <IconStar
          size={30}
          handleClick={() => {
            props.handleClickStar(props.card.id)
          }}
          isFavouriteActive={props.isFavouriteActive}
        />}
        {props.isButton && <ButtonWithBasket
          text="Add to basket"
          handleClickBtn={() => {
            props.handleClickBtn(props.card.id)
          }}
        />}
      </div>
    </div>
  )
}


Card.propTypes = {
  card: PropTypes.object,
  handleClickBtn: PropTypes.func,
  colorFill: PropTypes.string
}