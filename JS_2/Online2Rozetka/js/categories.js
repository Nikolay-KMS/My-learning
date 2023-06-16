'use strict'

import filterProducts from "./filterProducts.js";

export default class Categories {
  constructor(name, link, subcategories) {
    this.name = name;
    this.link = link;
    this.subcategories = subcategories;
  }
  renderHTML(parentClass) {
    const parent = document.querySelector(parentClass);
    let div = document.createElement('div');
    let a = document.createElement('a');
    a.addEventListener('click', (e) => {
      e.preventDefault();
      filterProducts({category: this.name})});

    a.innerText = this.name;
    a.classList.add('list-group-item', 'list-group-item-action')
    a.setAttribute('href', this.link);
    div.append(a);
    parent.append(div);
    if (this.subcategories) {
      div.classList.add(`parent-${this.name}`)
    }
  }
}
