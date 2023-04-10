"use strict"

let form = document.querySelector('.password-form');
let signEnterEye = document.querySelector('.enter .fa-eye');
let signEnterEyeSlash = document.querySelector('.enter .fa-eye-slash');
let inputEnter = document.querySelector('.enter input');
signEnterEyeSlash.style.display = 'none';

let signConfirmEye = document.querySelector('.confirm .fa-eye');
let signConfirmEyeSlash = document.querySelector('.confirm .fa-eye-slash');
let inputConfirm = document.querySelector('.confirm input');
signConfirmEyeSlash.style.display = 'none';

let button = document.querySelector('button');

form.addEventListener('click', (event) => {            // встановлюємо прослуховування всієї форми
  if( event.target === signEnterEye) {            // якжо нажали на око в першому Инпуті
    signEnterEyeSlash.style.display = 'inherit';
    signEnterEye.style.display = 'none';
    inputEnter.type = 'text';
  };
  if( event.target === signEnterEyeSlash) {            // якжо нажали на вибите око в першому Инпуті
    signEnterEyeSlash.style.display = 'none';
    signEnterEye.style.display = 'inherit';
    inputEnter.type = 'password';
  };

  if( event.target === signConfirmEye) {            // якжо нажали на око в другому Инпуті
    signConfirmEyeSlash.style.display = 'inherit';
    signConfirmEye.style.display = 'none';
    inputConfirm.type = 'text';
  };
  if( event.target === signConfirmEyeSlash) {            // якжо нажали на вибите око в другому Инпуті
    signConfirmEyeSlash.style.display = 'none';
    signConfirmEye.style.display = 'inherit';
    inputConfirm.type = 'password';
  };
});

button.addEventListener('click', () => { 
  if(inputEnter.value === inputConfirm.value ) {
    document.querySelector('.error').innerText ='';
    console.log('You are welcome');
  } else {
    document.querySelector('.error').innerText ='You need to enter the same values!';
  }
});
