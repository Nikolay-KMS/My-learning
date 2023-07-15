// import './App.css';
import React from "react";
import { useState } from "react";


export function App({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Скинути</button>
      {/* <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </>
  );
}