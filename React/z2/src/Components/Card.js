import React from "react";
import { Button } from "./Button";
import { IconStar } from "./svg/IconStar";
import PropTypes from "prop-types";

export class Card extends React.Component {
  // constructor(props) {
  //   super(props)

  // }

  render() {
    // console.log(this.props);
    return (
      <div className="card" id={this.props.card.id}>
        <div className="content">
          <h3>{this.props.card.name}</h3>
          <img className="card-img" src={this.props.card.url} alt="pict"/>
        </div>
        <div className="card-footer">
          <IconStar 
            size={30} 
            handleClickStar= {() => {
              this.props.handleClickStar(this.props.card.id)
            }}
            colorFill={this.props.colorFill}

          />
          <Button 
            text="Add to basket"
            handleClickBtn={() => {
              this.props.handleClickBtn(this.props.card.id)
            }}
           />
        </div>
      </div>
    )
  }

}

Card.propTypes = {
  card: PropTypes.object,
  handleClickBtn: PropTypes.func,
  colorFill: PropTypes.string
}