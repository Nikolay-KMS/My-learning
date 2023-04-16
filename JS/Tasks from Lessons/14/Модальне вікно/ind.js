"use strict"

function showPrompt(html, callback) {
  let divForm = document.querySelector('#prompt-form-container');
  divForm.style.display = 'flex';                                                 // робимо видимим модальне вікно
  document.body.style.backgroundColor = 'rgba(233, 233, 233, 0.856)';
  let input = document.getElementById('input');
  input.focus();                                                                       // примусовий фокус
  let form = document.querySelector('#prompt-form');
  form.addEventListener('submit', event => {                                         // навішуємо функцію на кнопку Ок 
    event.preventDefault();
    callback (input.value);
  });
  let buttonCancel = document.querySelector('input[name="cancel"]');
  buttonCancel.addEventListener('click', event => {                                        // навішуємо функцію на кнопку Відміна 
    callback ('null');
  });
  form.addEventListener('keydown', event => {
    if(event.key === "Escape") {                                                 // навішуємо функцію на кнопку Escape 
      callback ('null');
    }
  });
};

showPrompt( "Введіть щось<br>...розумне :)", callback);

function callback(value) {
  console.log(value);                                                                       // виводимо в консоль результат вводу в Инпут
  document.querySelector('#prompt-form-container').style.display = 'none';                        // робимо невидимим модальне вікно після виконання всього
  document.body.style.backgroundColor = '';
};