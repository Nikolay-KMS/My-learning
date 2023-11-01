

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Button } from "./Button";

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container);
  container = null;
})

it('Test Button', () => {
  const onChange = jest.fn();

  act(() => {
    render(<Button
      handleClickBtn= {onChange}
      text="Add to basket"
    />, container)
  });
  const button = document.querySelector('button');
  expect(button.innerHTML).toBe("Add to basket");

  act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe("Add to basket");

  act(() => {
    for (let i = 0; i < 2; i++) {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });
  expect(onChange).toHaveBeenCalledTimes(3);
  expect(button.innerHTML).toBe("Add to basket");

})