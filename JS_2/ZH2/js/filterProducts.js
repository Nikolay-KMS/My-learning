"use ctrict"

import data from '../data/data.json' assert {type: 'json'};
import productList from "./productList.js"; 

let filterProducts = filterProductsClosure();
export default  filterProducts;


function filterProductsClosure() {
  let currentSettings = {};
  // let filteredProducts = data.products;
  // const {category, discount};
  // let category;
  // let discount;

  return function (args) {
    let filteredProducts = data.products;
    let {category, discount} = args;
    //  args.category ? category = args.category : false;
    //  args.discount ? discount = args.discount : false;

    console.log(args);
    if (discount !== undefined) {
      currentSettings.discount = discount;
    }
    if (category !== undefined) {
      currentSettings.category = category;
    }
    if (currentSettings.discount) {
      filteredProducts = filteredProducts.filter(elem => elem.discount);
      console.log(1);
      console.log(filteredProducts);
    } 
    if (currentSettings.category) {
      filteredProducts = filteredProducts.filter(elem => {
        // return elem.category===category
        return currentSettings.category===elem.category

      });    
      console.log(2);
      console.log(filteredProducts);
    }
    productList(filteredProducts);

  }
  // console.log(1);
  // console.log(filteredProducts);
}
// console.log(filteredProducts);
