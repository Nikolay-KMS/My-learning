import React from "react";
import { Card } from "./Card";
import PropTypes from 'prop-types';


export class Cards extends React.Component {

  render () {
    return(
      <>
        <h2>Ласкаво просимо до інтернет магазину по продажу самих звичайних поштових марок!</h2>
        <div className="cards">          
          { this.props.cards.map((card) => (
            <Card 
              card= {card} 
              key={card.id} 
              handleClickBtn= {this.props.handleClickBtn}
              handleClickStar= {this.props.handleClickStar}
              colorFill= {this.props.favouriteCards.includes(card.id) ? "#c41120" : "transparent"}
            />
            ))}
      </div>
    </>
    )
  }
}
  
Cards.propTypes = {
  cards: PropTypes.array,
  handleClickBtn: PropTypes.func,
  handleClickStar: PropTypes.func,
  favouriteCards: PropTypes.array
}