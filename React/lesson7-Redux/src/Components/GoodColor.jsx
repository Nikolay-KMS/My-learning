import React from 'react'

export function GoodColor(props) {
  // console.log(props);
  return (
    <div
      className='goodColor'
      style={{backgroundColor:props.bgColor}}
    ></div>
  )
}
