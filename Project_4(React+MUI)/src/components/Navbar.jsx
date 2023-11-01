
import { NavLink } from "react-router-dom";
import { ButtonMUI } from "../UI/ButtonMUI";
import { Icons } from "../UI/Icons";


export function Navbar(props) {
  return (
    <div className='navbar'>
      <div className='switchTheme'>
        <ButtonMUI
          text={'Change theme'}
          handleClickBtn={props.switchTheme}
        />
      </div>
      <div className='tabs'>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to="favourite">Favourite</NavLink>
        <NavLink to="basket">Your basket</NavLink>
      </div>
      <Icons
        handleClickBasket={props.handleClickBasket}
        handleClickStar={props.handleClickStar}
        idFavouriteCards={props.idFavouriteCards}
        idCardsInBasket={props.idCardsInBasket}
      />
    </div>
  )
}
