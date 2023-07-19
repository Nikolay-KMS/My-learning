import './App.scss';

import React from "react";
import { Modal } from "./Components/Modal";
import { IconBasket } from './Components/svg/IconBasket.jsx';
import { IconStar } from './Components/svg/IconStar.jsx';
import { Cards } from './Components/Cards';

export class App extends React.Component {

  state={ 
    isModalFirstActiveID: false, 
    cards: [],
    favouriteCards: [],
    cardsInBasket: [],
  }

  componentDidMount() {
    fetch("./data.json")
    .then(res => res.json())
    .then(res => this.setState({cards: res}))

    let favouriteCards = localStorage.getItem('favour');
    favouriteCards= favouriteCards ? favouriteCards.split(',').map(elem => +elem) : [];
    this.setState({favouriteCards: [...favouriteCards, ...this.state.favouriteCards]})

    let cardsInBasket = localStorage.getItem('bask');
    cardsInBasket= cardsInBasket ? cardsInBasket.split(',').map(elem => +elem) : [];
    this.setState({cardsInBasket: [...cardsInBasket, ...this.state.cardsInBasket]})
  }

  componentDidUpdate() {
    localStorage.setItem('favour', this.state.favouriteCards)
    localStorage.setItem('bask', this.state.cardsInBasket)
  }

  render() {
    return (
      <>
        <div className='nav'>
          <div className='icons'>
            <div className='icon'>
              <IconStar 
                size={40}
                handleClickStar={() => {
                  this.setState({favouriteCards: []})
                }}
              />                
              <p 
                onClick={() => this.setState({favouriteCards: []})}              
                className='iconStarText'> 
                  Favourite ({this.state.favouriteCards.length})
              </p>
            </div>
            <div className='icon'>
              <div 
                onClick= {() => this.setState({cardsInBasket: []})} 
                style={{height: 'fitContent'}}
                >
                <IconBasket />
              </div>
              <p 
                onClick= {() => this.setState({cardsInBasket: []})}
                className='iconBasketText'> 
                  Cart ({this.state.cardsInBasket.length})
              </p>
            </div>
          </div>
        </div>
        <div className='main'>
          <Cards 
            cards={this.state.cards}
            handleClickBtn={(id) => {
              this.setState({isModalFirstActiveID: id})
            }}
            handleClickStar={(id) => {
              this.setState({favouriteCards: 
                [...new Set([id, ...this.state.favouriteCards])]})                
            }}
            favouriteCards={this.state.favouriteCards}
          />
        </div>
        <>
          {this.state.isModalFirstActiveID && 
          < Modal 
            headerText={"Do you want to add this good to the basket?"}
            bodyText={"Do you really want to do it?"}
            handleCloseModal={() => {
              this.setState({isModalFirstActiveID: false})
            }}
            isCloseButton={true}
            id={this.state.isModalFirstActiveID}
            handleClickBtn={(id) => {
              this.setState({cardsInBasket: 
                [...new Set([id, ...this.state.cardsInBasket])]})
            }}
          />}
        </>
      </>
    )
  }
}