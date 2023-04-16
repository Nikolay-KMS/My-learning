"use strict"

let list = Array.from(document.querySelectorAll('body *'))
          .filter(elem => elem.className).map(elem => elem.className);
console.log(list);
let set = new Set(list);
console.log(set);
list = Array.from(set);
console.log(list);
