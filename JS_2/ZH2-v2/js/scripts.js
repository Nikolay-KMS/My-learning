'use strict';
import data from '../data/data.json' assert {type: 'json'};
import productList from './productList.js';
import Category from "./categories.js";
import filterProducts from './filterProduct.js';




//now surprise me :)

if (document.querySelector('#categories-list')){
	for (let cat of data.categories) {
		new Category(cat.name, cat.link, cat.subcategories).render();
	}
}

if (document.querySelector("#productContainer")){
	productList(data.products);
}


if(document.querySelector('#discountFilter')){
	document.querySelector('#discountFilter').addEventListener('change', (e) => {
		filterProducts({discount: e.target.checked})
	})
}