
const burger = document.querySelector('.navbar__burger');
const dropDown = document.querySelector('.navbar-links-wrap');

function showMenu() {
  if(burger.classList.contains('active')) {    
    burger.classList.remove('active');
    dropDown.classList.remove('active');
  } else {
    burger.classList.add('active');
    dropDown.classList.add('active');
  }
}

burger.addEventListener ('click', showMenu);

