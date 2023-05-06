"use strict"

document.querySelector('.our-services ul').addEventListener('click', (event) => {           // вішаю собитие на кнопки
  document.querySelectorAll('.content > div').forEach(elem => {                    // для всіх Дівів роблю:
    elem.hidden = true;                                                             // всі скриті
    if( elem.dataset.content === event.target.innerText ) {        // шукаю потрібний єлем. по збігу тексту Таба з Датасетом
      elem.hidden = false;                                            // та його відкриваю
    };
  });
});

let loadImgStart = 12;
let arrImg = document.querySelectorAll('.our-amazing-work img');
document.querySelector('.our-amazing-work button')
.addEventListener('click', showImg);

arrImg.forEach((elem, index) => (index >= loadImgStart) ? elem.style.display = 'none': false);

function showImg() {
  arrImg.forEach((elem, index) => {
    if( index >= loadImgStart ) {
      elem.style.display = '';
      document.querySelector('.our-amazing-work button').style.display = 'none';
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

let itemNews = document.querySelectorAll('.breakingNews img');
itemNews.forEach(elem => {
  let newDiv = document.createElement('div');
  elem.after(newDiv);
  elem.parentElement.style.position = 'relative';
  newDiv.classList.add('legend');                // кожному фото добавляю клас, що описаний в CSS
  newDiv.innerHTML = elem.dataset.date;             // та вставляю текст
});

// проба вручну ... 

// let currentIndex = 1;                       // лічильник для всіх картинок
// let newCurrentIndex;
// let currentActive = 1;                     // лічильник для активної картинки
// let currentIndexMax = document.querySelectorAll('.carousel .item').length;     // кількість картинок
// let carousel = document.querySelector('.testimonial .carousel .slider-wrap');
// carousel.style.transform = 'translateX(-166px)'; // початкове розположення каруселі

// document.querySelector('.carousel .arrow-right').addEventListener("click", ()=> {
//   let act = document.querySelector('.active');         // спочатку працюю з малими картинками (thumbs)
//   act.nextElementSibling.classList.add('active');     // роблю активною наступну картинку через клас Актив
//   act.classList.remove('active');     // забираю клас Актив в попередньої
//   currentIndex++;                      // лічильник в +
//   let leftArrow = document.querySelector('.carousel .box-arrow-left').firstElementChild;          // повертаю видимість для лівої стрілки, якщо її ще небуло до цього
//   leftArrow.classList.contains('arrow-left') ? false : leftArrow.classList.add('arrow-left');

//   if(currentActive === 2 && currentIndex != currentIndexMax - 1) {        // якщо активне вікно 3-е та ще не дійшли до кінця списку
//     let transformHoriz = getComputedStyle(document.querySelector(".carousel .pictures")).transform.split(',')[4];       // отримую поточне значення зміщення по горизонталі
//     if(isNaN(transformHoriz)) {
//       transformHoriz = 0;                        // якщо значення == Нул, то присвоюю 0
//     };
//     document.querySelector(".carousel .pictures").style.transform = `translateX(${transformHoriz - 108}px)`;  //  роблю зміщення по горизонталі
//   } else {
//     currentActive++;                   // якщо ні, то лічильник в +
//   };
//   if(currentIndex === currentIndexMax - 1) {          // якщо дійшли до кінця списку, то роблю стрілку невидимою, забираючи клас
//     document.querySelector('.carousel .arrow-right').classList.remove('arrow-right');
//   };                               // далі працюю з великими картинками
//   carousel.style.transform = `translateX(${-166 * currentIndex}px)`;
// });

// document.querySelector('.carousel .arrow-left').addEventListener("click", ()=> {           // те-саме, але для лівої стрілки
//   let act = document.querySelector('.active');
//   act.previousElementSibling.classList.add('active');
//   act.classList.remove('active');
//   currentIndex--;
//   let rightArrow = document.querySelector('.carousel .box-arrow-right').firstElementChild;
//   rightArrow.classList.contains('arrow-right') ? false : rightArrow.classList.add('arrow-right');

//   if(currentActive === 1 && currentIndex != 0) {
//     let transformHoriz = getComputedStyle(document.querySelector(".carousel .pictures")).transform.split(',')[4];
//     if(isNaN(transformHoriz)) {
//       transformHoriz = 0;    
//     };
//     document.querySelector(".carousel .pictures").style.transform = `translateX(${108 + +transformHoriz}px)`;
//   } else {
//     currentActive--;
//   };
//   if(currentIndex === 0) {
//       document.querySelector('.carousel .arrow-left').classList.remove('arrow-left');
//   };

//   carousel.style.transform = `translateX(${-166 * currentIndex}px)`;
// });

// let carouselImges = document.querySelectorAll('.testimonial .carousel .slider img');
// carouselImges.forEach(elem => {
//   let p = document.createElement('p');
//   elem.before(p);
//   p.insertAdjacentHTML("beforeend", `<span>${elem.dataset.name}</span><br>${elem.dataset.occupation}`);       // добавляю до фото опис з Датасетів
//   p.classList.add('sliderImgName');                 // добавляю до опису клас
// });

// new Swiper('.slid', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   slideToClickedSlide: true,
//   slidesPerView: 1,
//   spaceBetween: 50,
//   thumbs: {
//     swiper: {
//       el: '.image-mini-slider',
//     slidesPerView: 4,
//     },
//   },
// })

const thumbSwiper = new Swiper('.image-mini-slider', {
  slidesPerView: 4,
  spaceBetween: 28,
  // slideToClickedSlide: true,

  // navigation: {
  //   nextEl: '.image-mini-slider_button.swiper-button-next',
  //   prevEl: '.image-mini-slider_button.swiper-button-prev',
  // },
})

const slider = new Swiper('.slider.swiper', {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  navigation: {
    nextEl: '.image-mini-slider_button.swiper-button-next',
    prevEl: '.image-mini-slider_button.swiper-button-prev',
  },
  slideToClickedSlide: true,
  slidesPerView: 1,
  // spaceBetween: 50,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper:thumbSwiper
  }
})
// thumbSwiper.controller.control = slider;
// slider.controller.control = thumbSwiper;


