
const burger = document.querySelector('.navbar__burger');
const dropDown = document.querySelector('.navbar-links-wrap');

function closeMenu() {
  burger.classList.remove('active');
  dropDown.classList.remove('active');
}

function openMenu() {
  burger.classList.add('active');
  dropDown.classList.add('active');
}

function burgerMenu() {
  (burger.classList.contains('active')) ? closeMenu() : openMenu();

}

function clickBody() {
  (event.target.closest('.navbar__burger')) ? burgerMenu() : 
        (event.target.closest('.navbar-links-wrap')) ? false : closeMenu(); 
}

document.body.addEventListener('click', clickBody);

