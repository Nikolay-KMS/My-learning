"use strict"

// let list = document.querySelectorAll('.btn');
// document.body.addEventListener('keydown', event => {               // навішуємо Івент на весь html
//   let key;                                                // дістаю значення нажатої кнопки з "code"( тут завжди Англ.)
//   if( event.code.includes('Key')) {                         // фільтр спец. кнопок                
//     key = event.code.slice(3);
//   } else {
//     key = event.key;
//   };
//   list.forEach((element) => {                     // перебираю масив кнопок з сторінки html, якщо така є, то їй присвоюю клас "Актів"
//     element.classList.remove('active');            // але спочатку видаляю клас, якщо раніше вже була нажата кнопка
//     if( element.innerText.toUpperCase() === key.toUpperCase()) {
//       element.classList.add('active');
//     };
//   });  
// });


let list = document.querySelectorAll('.btn');
document.body.addEventListener('keydown', event => {
  // console.log(event.key);
  list.forEach(elem => {

    if(event.key.toUpperCase() === elem.innerText.toUpperCase()){
      // console.log(event.key.toLocaleUpperCase === elem.innerText);
      elem.classList.add('active');
    } else {
      elem.classList.remove('active')
    }
  })
})
  
  // навішуємо Івент на весь html
//   let key;                                                // дістаю значення нажатої кнопки з "code"( тут завжди Англ.)
//   if( event.code.includes('Key')) {                         // фільтр спец. кнопок                
//     key = event.code.slice(3);
//   } else {
//     key = event.key;
//   };
//   list.forEach((element) => {                     // перебираю масив кнопок з сторінки html, якщо така є, то їй присвоюю клас "Актів"
//     element.classList.remove('active');            // але спочатку видаляю клас, якщо раніше вже була нажата кнопка
//     if( element.innerText.toUpperCase() === key.toUpperCase()) {
//       element.classList.add('active');
//     };
//   });  
// });