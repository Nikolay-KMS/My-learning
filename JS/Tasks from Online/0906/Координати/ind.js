"use strict"

let box = document.querySelector('.box');
box.addEventListener('mousedown', movieMouse(event));

function movieMouse(event1) {
  document.body.addEventListener('mouseover', event => {
    if(event.buttons === 1) {
      box.style.cssText = `left: ${event.clientX-50}px; top: ${event.clientY-50}px`;
    };
  });
};