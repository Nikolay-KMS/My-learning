"use strict"
let div = document.createElement('div');
document.body.append(div)
div.outerHTML = '<div><label for="">Напиши сюди повідомлення для мене!!! </label></div>'
document.body.append(div)
div.outerHTML = '<div><input name="name2"  class="input" size="35px"></div>'

let input = document.querySelector('.input');
const a = {
  1: 'G',
  2: 'o',
  3: 'F',
  4: 'u',
  5: 'c',
  6: 'k',
  7: ' ',
  8: 'y',
  9: 'o',
  10: 'u',
  11: 'r',
  12: 's',
  13: 'e',
  14: 'l',
  15: 'f',
  16: ' ',
  17: 'y',
  18: 'o',
  19: 'u',
  20: ' ',
  21: 'f',
  22: 'u',
  23: 'c',
  24: 'k',
  25: 'e',
  26: 'n',
  27: ' ',
  28: 'b',
  29: 'i',
  30: 't',
  31: 'c',
  32: 'h',
}
let count = 0;
input.onkeypress = function (event) {
  count++;
  if( count < 33 ) {
    input.value += a[count];
  };
  return false;
};