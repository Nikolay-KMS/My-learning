'use strict'

import data from '../data/data.json' assert {type: 'json'};

let id = window.location.href.split('id=')[1];
console.log(id);

let product = data.products.filter(el => el.id===id)[0];
console.log(product);

document.querySelector('.name').innerText = product.name;
document.querySelector('.card-img-top'). setAttribute('src', product.img_url); 
