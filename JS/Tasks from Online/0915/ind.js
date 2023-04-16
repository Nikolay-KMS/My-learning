"use strict"

let wrapper = document.querySelector('.wrapper');
let points = 0;                                             // набрані очки
let champion;                                                 // рекорди
const animal = '<span id="symb" class="material-symbols-outlined">flutter_dash</span>';    // картинка звірюшки
let foundAnimal;

if(localStorage.getItem('champion')) {                           // перевірка наявності запису в Local Storage
  champion = localStorage.getItem('champion');                    // якщо запис є, то берем його
  document.querySelector('#champion').innerText = champion;
} else {
  champion = 0;
};

for (let i = 0; i < 25; i++) {                           // створюжмо порожні кружечки
  const div = document.createElement('div');
  div.id = `number-${i}`
  wrapper.append(div)  
}

function rand() {                                   // ф. додавання звірюшки в порожні кружечки
  let numb = Math.floor(Math.random() * 25);
  if(wrapper.querySelector('#symb')) {               // але спочатку видаляєм звірюшку, якщо вже є
    wrapper.querySelector('#symb').remove();
  }
  wrapper.querySelector(`#number-${numb}`).innerHTML = animal;
}

wrapper.addEventListener('click', (event) => {                // по кліку на звірюшку збільш. лічильник та видаляю звіра
  foundAnimal = wrapper.querySelector('#symb');                // перемінна зі звірюшкой для зручності
  if( event.target === foundAnimal ) {
    // points++;
    document.querySelector('#point').innerText = ++points;
    foundAnimal.remove();
  }
});

let interval;
let timer = false;

document.querySelector('#start').addEventListener('click', function () {
  !timer ? interval = setInterval(rand, 1000): false;                      // на кнопці запускаємо гру
  timer = true;                                                     // для перевірки, чи вже запущений процес
});

document.querySelector('#stop').addEventListener('click', function () {     // на кнопці зупиняємо гру
  foundAnimal = wrapper.querySelector('#symb');
  clearInterval(interval);                                          // зупиняємо таймер
  (foundAnimal) ? foundAnimal.remove() : false;                            // видаляю звіра
  (champion < points) ? setChampion(points) : false;                        // запис в Local Storage, якщо...
  timer = false;
});

document.querySelector('#reset').addEventListener('click', () => {        // очистка Local Storage
  setChampion(0);
  points = 0;
  document.querySelector('#point').innerText = 0;                       // та очистка Очків
});

function setChampion(value) {                               // окрема ф. для зручності, записує дані
  champion = value;
  localStorage.setItem('champion', value);
  document.querySelector('#champion').innerText = value;
}