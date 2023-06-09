"use strict"

import ProductCard from "./productCard.js"; 

export default function productList (data) {
  document.querySelector('.products').innerHTML = '';
  data.forEach(obj => {
    new ProductCard(obj).render();
  }); 
};
