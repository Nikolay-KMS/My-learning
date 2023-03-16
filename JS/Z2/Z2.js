"use strict"

let userName = prompt('Write your name');
if ( !userName || !!+userName ) {                          // проверка правильности ввода имени (Null, empty, number)
  userName = prompt('Write your name correct', userName) 
}
let age = prompt('Write your age');
if (!age || !+age) {                                 // проверка правильности ввода возраста (Null, empty, string)
  age = prompt('Write your age correct', age) 
}

console.log(userName);
console.log(age);


if (age < 18 ) {                                        // если возраст до 18-ти лет
  alert('You are not allowed to visit this website')
} else if (age <= 22) {                                // если возраст до 22-ти лет
  let buttonSure = confirm ('Are you sure you want to continue?');
  if (buttonSure===true) {
    alert(`Welcome, ${userName}`)                           // если нажал ОК
  } else {                                              
    alert ('You are not allowed to visit this website')      // если нажал Отмена
  }
} else if (age > 22) {                                   // если возраст более 22-ти лет
  alert (`Welcome, ${userName}`) 
}