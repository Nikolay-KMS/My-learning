"use strict"

// let changeColor;

document.querySelectorAll('p').forEach(el => el.addEventListener('click', changeColor()));

let color = ['red', 'green', 'blue', 'grey', 'purple', 'yellow'];

function changeColor() {
  let count = -1;
  return function (event) {
    //  count++;
    // if(count === color.length) count = 0;
    event.target.style.color = color[++count === color.length ? count = 0: false];
    console.log(count);
  }
}

// console.log(color.length);