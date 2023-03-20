"use strict"

let count = 0;
let m = prompt('Write your first number');
let n = prompt('Write your second number');
let d = prompt('Write your math function (+, -, *, /) ');


while ( isNaN (n)  || n === "" || n == null || isNaN (m) || m === "" || m == null) {
  m = prompt('Write your smaller Integer number', m);
  n = prompt('Write your bigger Integer number', n);
}
console.log(m, n, d);


function f (a, b, c) {
  if (c == '+') {
    return a + b;
  } else if (c == '-') {
    return a - b
  } else if (c == '*') {
    return a * b
  } else if (c == '/') {
    return a / b
  } else alert ('You write wrong math function, not: (+, -, *, /) ');
}
let k = f (+m, +n, d)
console.log(k); 
