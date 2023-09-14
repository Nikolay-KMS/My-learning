
import React from 'react';

// import { render, screen, cleanup } from "@testing-library/react";
// import renderer from 'react-test-renderer';
// import renderer from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';


import { BuyForm } from "./BuyForm";

test('matches snapshot card', ()=> {
  // const tree= renderer.create(<BuyForm />).toJSON()
  const testRenderer = TestRenderer.create(<BuyForm />).toJSON()

  console.log(tree);
})