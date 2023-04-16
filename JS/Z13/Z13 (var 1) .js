"use strict"

let arrImg = document.querySelectorAll('.image-to-show');

let showedImg = arrImg[0];
showedImg.classList.add('visible');

function run () {
  showedImg.classList.remove('visible');
      
  showedImg.nextElementSibling ? showedImg.nextElementSibling.classList.add('visible') : 
                        showedImg.parentElement.firstElementChild.classList.add('visible');
  
  showedImg = document.querySelector('.visible');
}

let timer;
document.querySelector('.run').addEventListener('click', () => {
  timer = setInterval( run, 1000); 
});

setTimeout(() => {
  clearInterval(timer); 
}, 10000 );

document.querySelector('.stop').addEventListener('click', () => {
  clearInterval(timer); 
});

timer = setInterval( run, 1000); 
