"use strict"

document.querySelector('.our-services ul').addEventListener('click', (event) => {           // вішаю собитие на кнопки
  document.querySelector('.our-services .active').classList.remove('active');
  // console.log(  document.querySelector('.our-services .active').classList );
  event.target.classList.add('active');
  document.querySelectorAll('.content > div').forEach(elem => {                    // для всіх Дівів роблю:
    elem.hidden = true;                                                             // всі скриті
    if( elem.dataset.content === event.target.innerText ) {        // шукаю потрібний єлем. по збігу тексту Таба з Датасетом
      elem.hidden = false;                                            // та його відкриваю
    };
  });
});

let loadImgStart = 12;
let arrImg = document.querySelectorAll('.our-amazing-work .pictures > img');
document.querySelector('.our-amazing-work button')
.addEventListener('click', showImg);

arrImg.forEach((elem, index) => (index >= loadImgStart) ? elem.style.display = 'none': false);

function showImg() {
  setTimeout(showAmazingWorkImg, 2000);
  let div = document.createElement('div');
  div.classList.add('waiting');
  document.querySelector('.our-amazing-work button').after(div); 
  document.querySelector('.our-amazing-work button').style.display = 'none'; 
}

function showAmazingWorkImg() {
  document.querySelector('.our-amazing-work .waiting').remove();  
  arrImg.forEach((elem, index) => {
    if( index >= loadImgStart ) {
      elem.style.display = '';
    };
  });
};

document.querySelector('.our-amazing-work ul').addEventListener('click', filterImg );
function filterImg() {
  if( !event.target.closest('li')) return;                    // якщо жмакнули не Лі - на тапки
  if( event.target.innerText === "All" ) {                   // якщо жмакнули Олл, всі відкриваю
    arrImg.forEach( elem => elem.hidden = false);  
    } else {
      arrImg.forEach( elem => {
        elem.dataset.sort === event.target.innerText ? elem.hidden = false : elem.hidden = true;
      });                   // у кого Датасет співпадаю з текстом, відкриваю, інакше скриваю
    };
};

document.querySelector('.our-amazing-work ul').addEventListener('click', (event) => {           // вішаю собитие на кнопки
  document.querySelector('.our-amazing-work .active').classList.remove('active');
  event.target.classList.add('active');
});

let hiddenImg = false;                                                  // флаг
const cover = document.querySelector('.our-amazing-work .cover');
document.querySelector('.our-amazing-work .pictures').addEventListener('click', () => {                 // Івент
  let coord = event.target.getBoundingClientRect()                                         // тирим розміри
  cover.style.width = coord.width + 'px';
  cover.style.height = coord.height + 'px';
  if (hiddenImg){                                                        // якщо картинку вже скрита, то відкриваю її а Ковер удаляю 
    hiddenImg.hidden = !hiddenImg.hidden;
    hiddenImg = false;
    document.querySelector('.our-amazing-work .pictures .cover').remove()
    } else {                                                          // іначе клоную Ковер та ставлю замість картинки
      let c = cover.cloneNode(true);
      c.hidden = !c.hidden
      event.target.after(c)
      hiddenImg = event.target;
      event.target.hidden = !event.target.hidden
    }
})

let itemNews = document.querySelectorAll('.breakingNews img');
itemNews.forEach(elem => {
  let newDiv = document.createElement('div');
  elem.after(newDiv);
  newDiv.classList.add('legend');                // кожному фото добавляю клас, що описаний в CSS
  newDiv.classList.add('link');
  newDiv.innerHTML = elem.dataset.date;             // та вставляю текст
});

document.querySelector('.breakingNews .list').addEventListener('mouseover', () => {            // Івент на наведення миші для Ховеру 
  if (!event.target.classList.contains('link')) return;                                       // у кого нема класу Лінк - на вихід
  event.target.closest('.item').querySelector('.legend').style.background = '#18CFAB';          // колір фону для Лененди
  event.target.closest('.item').querySelector('.name').style.color = '#18CFAB';                // колір букв для тексту
})

document.querySelector('.breakingNews .list').addEventListener('mouseout', () => {            // вимикаємо ввімкнуте 
  if (!event.target.classList.contains('link')) return;
  event.target.closest('.item').querySelector('.legend').style.background = '#203E38';
  event.target.closest('.item').querySelector('.name').style.color = '#717171';

})

const thumbSwiper = new Swiper('.image-mini-slider', {                 // спочатку ініціюю слайдер-міні
  slidesPerView: 4,              // кільк картинок на екрані
  spaceBetween: 28,            // відстань між ними
})
const slider = new Swiper('.slider.swiper', {                //  ініціюю слайдер з великими картинками
  navigation: {
    nextEl: '.image-mini-slider_button.swiper-button-next',           // привязка стрілок керування
    prevEl: '.image-mini-slider_button.swiper-button-prev',
  },
  slideToClickedSlide: true,          // переключаяння кліком
  slidesPerView: 1,
  effect: 'fade',                 // еффект зміни через затемнення
  fadeEffect: {
    crossFade: true,             // так треба, щоб не глючило
  },
  thumbs: {                                  //  звязую основний слайдер з міні
    swiper:thumbSwiper
  }
});

let loadGalleryImgStart = 18;
let arrGalleryImg = document.querySelectorAll('.gallery-of-best-images .gallery-pictures .grid-item');
document.querySelector('.gallery-of-best-images button')
.addEventListener('click', showMoreGalleryImg);                       //  Івент на Батон

arrGalleryImg.forEach((elem, index) => (index >= loadGalleryImgStart) ? elem.style.display = 'none': false);     //  ховаю частину картинок

function showMoreGalleryImg() {
  setTimeout(showMoreGalleryImgTimer, 2000);                                      //  таймер щоб показати типо грузяться картинки
  document.querySelector('.gallery-of-best-images button').style.display = 'none';          //  удаляю Батон
  let div = document.createElement('div');
  div.classList.add('waiting');                                                   //  создаю знак загрузки
  document.querySelector('.gallery-of-best-images button').after(div);
};

function showMoreGalleryImgTimer() {
  arrGalleryImg.forEach((elem, index) => {
    if( index >= loadGalleryImgStart ) {
      elem.style.display = '';                                          //  відкриваю останні картинки
    };
  });
    document.querySelector('.gallery-of-best-images .waiting').remove();                               //  удаляю знак загрузки
  masonryGallery();                                                  //  перезапуск Масонри
};

