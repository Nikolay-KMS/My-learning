"use strict"

document.querySelector('.our-services ul').addEventListener('click', (event) => {           // вішаю собитие на кнопки
  document.querySelectorAll('.content > div').forEach(elem => {                    // для всіх Дівів роблю:
    elem.hidden = true;                                                             // всі скриті
    if( elem.dataset.content === event.target.innerText ) {        // шукаю потрібний єлем. по збігу тексту Таба з Датасетом
      elem.hidden = false;                                            // та його відкриваю
    };
  });
});