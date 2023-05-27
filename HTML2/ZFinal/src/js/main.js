
const burger = document.querySelector('.navbar__burger');
const dropDown = document.querySelector('.navbar-links-wrap');

function showMenu() {
  // console.log(event.target.closest(navbar-links__item));
  // console.log(burger);  
  // console.log(event.target);

  if(burger.classList.contains('active')) {    
    // console.log(1);
    burger.classList.remove('active');
    dropDown.classList.remove('active');
  } else {
    // console.log(2);
    burger.classList.add('active');
    dropDown.classList.add('active');
  }
}

burger.addEventListener ('click', showMenu);

