"use strict"

let count = 0;
let m = prompt('Write your smaller number');
let n = prompt('Write your bigger number');

while ( n % 1 || n === "" || n == null || m % 1 || m === "" || m == null) {
  m = prompt('Write your smaller Integer number');
  n = prompt('Write your bigger Integer number');
}
console.log(m, n);

for (let i = 5; i <= n; i+=5) {
  if (i < m) continue;
  if (i % 5 == 0) {
    count++   
    console.log(i)   
  }
}

if (count == 0) {
  alert('Sorry, no numbers')
}
