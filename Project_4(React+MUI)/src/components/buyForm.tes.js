
import React from 'react';
import TestRenderer from 'react-test-renderer';


import { BuyForm } from "./BuyForm";

test('matches snapshot card', ()=> {
  // const tree= renderer.create(<BuyForm />).toJSON()
  const testRenderer = TestRenderer.create(<BuyForm />).toJSON()

  console.log(tree);
})