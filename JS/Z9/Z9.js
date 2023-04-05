"use strict"

let arr = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];

function addElemetns(arr) {
  let new1 = arr.map(elem => {
    if(!Array.isArray(elem)){
      return `<li>${elem}</li>`;
    } else {
      return `<ul>${addElemetns(elem)}</ul>`;
    };
  })
  .join("");
  console.log(new1);
  return new1;
};

let ul = document.createElement('ul');
ul.innerHTML = addElemetns(arr);
document.body.append(ul);

let i = 3;
document.body.insertAdjacentHTML("afterend", `  <p class="counter"> List will be removed in 3 sec </p>`);
let timer = setInterval(() => {
  i--
  document.querySelector(".counter").remove();
  document.body.insertAdjacentHTML("afterend", `  <p class="counter"> List will be removed in ${i} sec </p>`);
  if(i === 0) {
    document.querySelector('ul').remove();
    document.querySelector(".counter").remove();
    clearInterval(timer);
  };
}, 1000);


