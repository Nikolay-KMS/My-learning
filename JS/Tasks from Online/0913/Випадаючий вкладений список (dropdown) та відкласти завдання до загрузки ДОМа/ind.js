"use strict"

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree > li ul').
          forEach(elem => elem.hidden = 'true');
  const nestedList = document.querySelector('.tree');
  nestedList.addEventListener('click', (event) => {
    event.target.querySelector('ul') ? 
          event.target.querySelector('ul').hidden = 
          !event.target.querySelector('ul').hidden : 
          false;
  });
});

