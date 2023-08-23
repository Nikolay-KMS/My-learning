
import { useMemo } from "react";
import { BuyForm } from "./BuyForm";

export function BasketFooter(props) {
  const cards= useMemo(()=> {props.cards}, []);

  return (
    <div className='basket-footer'>
      <h3>Please write your contact details</h3>
      <BuyForm cards={cards} />
    </div>
  )
}
