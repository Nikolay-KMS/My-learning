"use strict"

import data from '../data/data.json' assert {type: 'json'};
import Categories from "./categories.js";
// import ProductCard from "./productCard.js"; 
import filterProducts from "./filterProducts.js"; 
import productList from "./productList.js"; 

// for (const obj of data.categories) {
//   new Categories(obj.name, obj.link, obj.subcategories).renderHTML();  
// }

function createCat(obj, parentClass) {
  if(document.querySelector(parentClass)) { 
    obj.forEach(el => {
      new Categories(el.name, el.link, el.subcategories).renderHTML(parentClass);
      if (el.subcategories) {
        let subcatClass = '.parent-'+el.name
        createCat(el.subcategories, subcatClass)
      }
    });
  }  
}

createCat(data.categories, '.list-group');

if (document.querySelector('.products')) {
  productList(data.products);
}

if (document.querySelector('#discountFilter')) {
  document.querySelector('#discountFilter').addEventListener('change', (e) => {
    filterProducts({discount: e.target.checked})
  })
} 
