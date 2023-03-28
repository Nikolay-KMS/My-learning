"use strict"

function filterBy(arr, typeData) {
  let newArray = arr.filter(function(elem) {
    return typeof(elem) !== typeData;
  });
  return newArray;
};

const array = ['hello', 'world', 23, '23', null];
console.log(filterBy(array, "string"));
