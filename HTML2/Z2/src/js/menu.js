"use strict"

const icon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__list');

icon.addEventListener('click', showMenu);
function showMenu() {
  if(icon.classList.contains('active')) {
    icon.classList.remove('active')
  } else {    
    icon.classList.add('active')
  };
};

menu.addEventListener('click', changeActive);
function changeActive() {
  if(!event.target.closest('.menu__item')) return;
  console.log(!event.target.classList.contains('active-item'));
    if(!event.target.classList.contains('active-item')) {
      document.querySelector('.menu__list .active-item').classList.remove('active-item');
      event.target.classList.add('active-item');
    };
};
