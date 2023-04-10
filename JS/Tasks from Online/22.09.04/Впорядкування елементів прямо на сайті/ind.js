"use strict"

const arr = [
          'apple',
          'orange',
          'banana',
          'grape',
          'mango',
          'kivi',
];

let ul = document.createElement('ul');
let div = document.querySelector('#wrapper')
div.append(ul);
let point = document.querySelector('ul');

arr.forEach(elem => {
  let li = document.createElement('li');
  li.classList.add('list');
  point.append(li);
  li.append(elem);
});

div.addEventListener('click', (event) => {
    ul.append(event.target)
  // ul.insertAdjacentHTML("beforeend", event.target.outerHTML);
  // event.target.remove();
});