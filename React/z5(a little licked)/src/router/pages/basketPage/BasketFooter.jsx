
import { useMemo } from "react";
import { BuyForm } from "./BuyForm";

export function BasketFooter(props) {

  return (
    <div className='basket-footer'>
      <h3>Please write your contact details</h3>
      <BuyForm
        cards={props.cards}
      />
    </div>
  )
}
