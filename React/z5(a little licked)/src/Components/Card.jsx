import React from "react";
import { Button } from "./Button";
import { IconStar } from "./svg/IconStar";
import PropTypes from "prop-types";
import { GoodColor } from "./GoodColor";

export function Card(props) {
  return (
    <div className="card" id={props.card.id}>
      <div className="content">
        <h3>{props.card.name}</h3>
        <img className="card-img" src={props.card.url} alt="pict" />
        <div className="goodsColor">
          {props.card.color.map((color) => (
            <GoodColor
              key={props.card.id + color}
              bgColor={color} />
          ))}
        </div>
      </div>
      <div className="card-footer">
        {props.isStar && <IconStar
          size={30}
          handleClick={() => {
            props.handleClickStar(props.card.id)
          }}
          isFavouriteActive={props.isFavouriteActive}
        />}
        {props.isButton && <Button
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