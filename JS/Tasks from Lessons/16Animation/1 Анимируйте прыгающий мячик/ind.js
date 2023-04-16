"use strict"

// Создайте прыгающий мячик

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function drawFunc(progress) {
  return document.querySelector('img').style.marginTop = progress * 150 + 'px';
}

let bounceEasyOut = makeEasyOut(bounce);
function makeEasyOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
};

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

animate({timing: bounceEasyOut, draw: drawFunc, duration: 2000});
