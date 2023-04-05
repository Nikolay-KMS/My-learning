"use strict"

let arr = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];
let point = document.querySelector(".firstDiv");
function addElemetns(arr, point) {
  let ul = document.createElement('ul');
  ul.classList.add('list');
  point.append(ul);
  point = point.getElementsByClassName('list')[0];
  arr.map(elem => {
    if(Array.isArray(elem)) {
      addElemetns(elem, point);
    } else {
      let li = document.createElement('li');
      li.innerText = elem;
      li.classList.add('li');
      point.append(li)
    };
  });  
};

let i = 3;
document.body.insertAdjacentHTML("afterend", `  <p class="counter"> List will be removed in 3 sec </p>`);
let timer = setInterval(() => {
  i--
  document.querySelector(".counter").remove();
  document.body.insertAdjacentHTML("afterend", `  <p class="counter"> List will be removed in ${i} sec </p>`);
  if(i === 0) {
    document.querySelector('.list').remove();
    document.querySelector(".counter").remove();
    clearInterval(timer);
  };
}, 1000);

addElemetns(arr, point);
