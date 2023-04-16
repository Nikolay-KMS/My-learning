"use strict"

document.querySelector('.enter .fa-eye-slash').hidden = 'true';         // для початку скриємо підбиті глазики
document.querySelector('.confirm .fa-eye-slash').hidden = 'true';

document.querySelector('form').addEventListener('click', (event) => {  
  if(!event.target.className.includes('fas')) return;           // якщо нажали не на око - берем тапки
  event.target.parentElement.querySelectorAll('i')              // міняємо Хідден на НЕ для обох єлементів 
  .forEach(element => element.hidden = !element.hidden);
  let input = event.target.parentElement.querySelector('input');
  input.type === 'password' ? input.type = 'text' : input.type = 'password';     // міняємо видимость Инпута 
});

document.querySelector('button').addEventListener('click', () => { 
  if( document.querySelector('form .enter input').value === document.querySelector('form .confirm input').value ) {
    document.querySelector('.error').innerText ='';
    console.log('You are welcome');
  } else {
    document.querySelector('.error').innerText ='You need to enter the same values!';
  }
});
