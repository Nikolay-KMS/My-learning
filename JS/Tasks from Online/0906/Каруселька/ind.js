"use strict"

let width = document.querySelector('.wrapper').offsetWidth;
// console.log(width);
let img = document.querySelectorAll('.wrapper img');
img.forEach(element => {
  element.style.width = `${width}px`;
})

document.querySelector('.arrowLeft')
.addEventListener('click', () => slide('left'));
document.querySelector('.arrowRight')
.addEventListener('click', () => slide('right'));

let count = 0;
function slide(direction) {
  if(direction === 'left') {
    (--count === -1) ? count = 4 : true;
    document.querySelector('.img').style.transform = `translateX(${width*-count}px)`;
  }

  if(direction === 'right') {
      ( ++count === 5 ) ? count = 0 : true;
      document.querySelector('.img').style.transform = `translateX(${width*-count}px)`;
  };

  
};

document.querySelector('.wrapperSmall').style.width = `${width}px`;


