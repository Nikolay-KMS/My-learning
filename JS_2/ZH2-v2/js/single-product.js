'use strict'
import data from '../data/data.json' assert {type: 'json'};

const productId =  (window.location.search).slice((window.location.search).indexOf('id=') + 3);
const product = data.products.filter(el => el.id === productId)[0];
document.querySelector("h2").innerText = product.name;
document.querySelector('p:nth-child(2)').innerText = product.price
console.log(product)

