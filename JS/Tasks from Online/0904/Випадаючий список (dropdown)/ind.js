"use strict"


let buttonFallingList = document.querySelector('.dropdown a')
// console.log(buttonFallingList);
let fallingList = document.querySelector('.sublist');
// fallingList.style.display = 'none';
// let buttonFallingList = document.querySelector('.dropdown a');
// document.body.addEventListener('click', (event)=> {
//   if(event.target === buttonFallingList) {
//     console.log(235);
//     if( fallingList.style.display === 'none') {
//       console.log(9);
//       fallingList.style.display = 'inherit';
//     } else {
//       fallingList.style.display = 'none';
//     };
//   } else {
//     fallingList.style.display = 'none';
//   };
//   ;
// });
let headerList = Array.from( document.querySelectorAll('nav > a, .dropdown > a'));
document.querySelector('nav').addEventListener('click', event => {
  if(headerList.includes( event.target )) {
    if( document.querySelector('nav .active')) {
      document.querySelector('nav .active').classList.remove('active');
    };
    event.target.classList.add('active');
  };
});