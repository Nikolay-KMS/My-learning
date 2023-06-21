"use strict"

import MakeTable from "./js/makeTable.js";
import ChangeColor from './js/changeColor.js'

let gameStarted = false;             
let countWell = 0;                    // лічильник для влучних попадань 
let countLose = 0;                    // лічильник для невлучних  

new MakeTable().render(10);                                   // стволюю таблицю для гри в ХТМЛ
document.querySelector('.startBtn').addEventListener('click', startGame);             // подія на кнопку Старт

let table = document.querySelector('.table');
table.addEventListener('click', clickTable);             // подія на таблицю для відстежування попадань

function startGame() {
  if(gameStarted) return;                                 // щоб ніхто розумний не поламав))
  if(event.target.classList.contains('retry')) cleenAll();                          // зачистити поле перед рестартом
  gameStarted = true;                                     // мітка що гра почалась
  let timer = document.querySelector('#diff').value;          // отримую значення таймеру з Селекту
  setTimeout(() => {                                   // затримка перед стартом
    newStep();                                           // онин крок гри
  }, timer);
}

function newStep() {
  if(countWell + countLose >= 5) {                         // гра йде до 5 комірок в суммі
    finishGame();
    return
  };
  let active = getRandomBox();                         // отримую випадкову комірку
  active.classList.add('active');
  let timer = document.querySelector('#diff').value;
  setTimeout(() => {                                // запуск нового кроку гри через таймер
    checkAfterTimer(active);                        // та перевірка результуту в кінці кроку
  }, timer);
}

function getRandomBox() {
  let number = Math.ceil(Math.random() * 100);
  let active = document.querySelector(`.box-${number}`);
  return active.classList.contains('played') ? getRandomBox() : active;        // якщо ця комірка вже була, то шукаю іншу
}

function checkAfterTimer(active) {
  if(!active.classList.contains('played')) {               // якщо в кінці кроку вона ще не "зелена", то 
    countLose++;                                              // лічильник в +
    new ChangeColor('red').changeColor(active);              // та робимо червоною 
  };
  newStep();                               // та в любому випадку йдемо на новий крок
}

function clickTable() {
  if (gameStarted = false) return;                           // не працюємо якщо гра ще не почалась
  if(!event.target.classList.contains('box')) return;         // нам потрібні тільки комірки
  if(event.target.classList.contains('active')) clickWell();       // дія якщо попали по Синьому
}

function clickWell() {
  countWell++;
  new ChangeColor('green').changeColor(event.target);
}

function finishGame() {
  document.querySelector('#diff').insertAdjacentHTML('afterend', `<p class="score">Total score: User ${countWell} points, No-spirit mashinen ${countLose} points</p>`);    // вивід результату
  gameStarted = false;                                                        // прапорець
  document.querySelector('.startBtn').innerHTML = 'Try again, loser';                  // так смішніше
  document.querySelector('.startBtn').classList.add('retry');                // мітка що це буде рестарт
}

function cleenAll() {                                     // зачистка перед рестартом
  countWell = 0;
  countLose = 0;
  let played = document.querySelectorAll('.played');
  played.forEach(elem => {
    elem.classList.remove('played');
    elem.style.backgroundColor = "#fff";
  });
  document.querySelector('.score').innerHTML = '';
}
