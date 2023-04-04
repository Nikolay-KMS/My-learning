"use strict"

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
for (let key of paragraphs) {
  key.style.backgroundColor="red"
};

const elem1 = document.querySelector("#optionsList");
console.log(elem1);

const porentOfelem1 = elem1.parentElement;
console.log(porentOfelem1);

let children;
if (elem1.hasChildNodes()) {
  children = elem1.childNodes;
  console.log(children);
}

for (let key of children) {
  console.log(key.nodeName);
  console.log(key.nodeType);
    break;                                // просто щоб не засоряти консоль))    
}

document.querySelector("#testParagraph").innerHTML = "This is a paragraph";

const elements = document.querySelector('.main-header').children;
console.log(elements);

for(let key of elements) {
  key.classList.add('nav-item');
}
console.log(elements);

const elements2 = document.querySelectorAll('.section-title');
console.log(elements2);

for(let key of elements2) {
  key.classList.remove('section-title');
}
console.log(elements2);

