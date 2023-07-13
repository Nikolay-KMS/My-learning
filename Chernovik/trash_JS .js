"use strict";
//         console.log

const obj = {
  x: 5
  // ,
  // func() {
  //   setTimeout(function ()  {
  //     console.log(this.x);
  //   }, 500)
  // }
}

// this.x = 8

function func() {
  // let x = 11
  setTimeout(function ()  {
    // this.x = 7
    // let x = 7
    console.log(this);
  }, 500)
}

func()

// func.bind(obj)()
// let test = func.bind(obj)
// test()
// console.log(1);

