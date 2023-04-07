"use strict"

let hiden = document.querySelectorAll('.tabs-content > li');
hiden.forEach(element => {
  element.style.display = "none";                    // скрили всі ДІВи
});

let nameClickButton;
let tabs = document.querySelector('.tabs');
tabs.addEventListener("click", function(event) {
  if( !event.target.closest('.li')) {
    return;                                               // берем тапки якщо клацнули на ДІВ (не на вкладку)
  };
  let element = document.querySelector(`.${event.target.innerText}`);       // конст(єлемент).=єлемент на якому клацнули

  if( nameClickButton && nameClickButton !== element) {                      // якщо клацнули на іншу кнопку
    document.querySelector(`.${nameClickButton}`).style.display = 'none';      // ховаємо раніше відкритий єлемент
  }
    nameClickButton = event.target.innerText;
    element.style.display = '';                                          // відкриваємо єлемент на якому клацнули
});

