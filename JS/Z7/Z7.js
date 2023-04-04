"use strict"

const filterBy = (arr, typeData) =>
  arr.filter( elem => typeof(elem) !== typeData);

const array = ['hello', 'world', 23, '23', null];
console.log(filterBy(array, "string"));