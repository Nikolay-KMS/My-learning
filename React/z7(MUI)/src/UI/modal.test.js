

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Modal } from "./Modal";

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container);
  container = null;
})

it('Test Modal', () => {
  const onChange = jest.fn();
  const onChange_2 = jest.fn();

  act(() => {
    render(<Modal
      headerText={"Do you want to add this good to the basket?"}
      bodyText={"Do you really want to do it?"}
      handleCloseModal={onChange}
      isCloseButton={true}
      id={1}
      handleClickBtn={onChange_2}

    />, container)
  });
  const modalBackFond = container.querySelector('.modalBackFond');

  act(() => {
    modalBackFond.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(1);  

  expect(
    container.querySelector('.modalWindow').getAttribute("tabindex")
  ).toEqual('0');

  expect(container.querySelector('.modalHeader h2').innerHTML).toEqual("Do you want to add this good to the basket?");

  const button = container.querySelector('.btnClose');
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(2);  
  expect(button.innerHTML).toBe("X");

  expect(container.querySelector('.modalBody p').innerHTML).toEqual("Do you really want to do it?");

  const button_2 = container.querySelector('.modalButton');
  act(() => {
    button_2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange_2).toHaveBeenCalledTimes(1);  
  expect(button_2.innerHTML).toBe("Ok");

  const button_3 = container.querySelector('.modalBody button:last-child');
  act(() => {
    button_3.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(3);  
  expect(button_3.innerHTML).toBe("Cancel");
})