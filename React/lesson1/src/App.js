
import React, { useState } from 'react';
import { Counter } from './counter';
import { Button } from './Button';

export function App() {
  const [value2, setValue2]= useState(0)

  return (
    <div> 
      <Counter def={10}></Counter>
      <Button 
        text="Add 2" 
        value2={value2} 
        handleClick={() => {
          setValue2(value2 + 2)
        }} 
      />
      <br></br>
      <Button 
        text="Add 2" 
        value2={value2} 
        handleClick={() => {
          setValue2(value2 + 1)
        }} 
      />
    </div>
  )
} 