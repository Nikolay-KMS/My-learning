"use strict"

function factorial(m) {
  let pow = 1;
  for (let i = 1; i <= m; i++) {
    pow *= i;    
  }
  return pow;
}
let n;
while (isNaN(n) || !null) {
  n = prompt ('Write number', n);
}
alert (factorial(n))
