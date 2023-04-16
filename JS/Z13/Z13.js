"use strict"

document.querySelectorAll('.image-to-show')[0].classList.add('visible');
        // першу картинку робимо видимою, через клас
let timeChange = 3000;                      // час зміни картинок
let i = timeChange/1000;                     // мусор, початковий час зміни секунд
let timerBox = document.querySelector('.timerBox');      // мусор, для зручності

function slides () {                 // ф. що міняє картинки
  let showedImg = document.querySelector('.visible');  
  showedImg.classList.remove('visible');          // видаляю видиму
  showedImg.nextElementSibling ? showedImg.nextElementSibling.classList.add('visible') : 
                        showedImg.parentElement.firstElementChild.classList.add('visible');
              // сусіда зправа роблю видимим якщо він є, якщо нема, то першого в родині
  restSecPrepare();
  intervalTime = setInterval(restSec, 1000);   // запуск ф. секундоміра
};

function restSec() {                     //  ф. секундоміра
  i--;                                    //  лічильник
  timerBox.innerText = `Time to change: ${i}s`;
};
function restSecPrepare() {        // додаткова ф. для секундоміра
  clearInterval(intervalTime); 
  i = timeChange/1000;
  timerBox.innerText = `Time to change: ${i}s`;
};

document.querySelector('.start').addEventListener('click', () => {   // події на кнопку старт
  intervalImg = setInterval( slides, timeChange);      // запуск таймера для катринок
  intervalTime = setInterval(restSec, 1000);    // запуск таймера для секундоміра
});

document.querySelector('.stop').addEventListener('click', () => { // події на кнопку стоп
  clearInterval(intervalImg); 
  restSecPrepare(); 
});

let intervalImg = setInterval( slides, timeChange);     // запуск таймера для катринок
timerBox.innerText = `Time to change: ${i}s`;
let intervalTime = setInterval(restSec, 1000);     // запуск таймера для секундоміра

// setTimeout(() => {
//   clearInterval(timer); 
// }, 10000 );
