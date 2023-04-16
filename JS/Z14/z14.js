"use strict"

let buttonJs = document.createElement('button');
document.body.append(buttonJs);
buttonJs.innerText = 'Change theme';
buttonJs.style.cssText = 'background: inherit; color: red; font-size: 46px; position: absolute; top: 0; right: 0;';

let newBackground = '#fff7c6';
let newMenuButtonsColor = '#2ff528';
let originThemeFlag;
let oldBackground = window.getComputedStyle(document.body).getPropertyValue('background');
let links = document.querySelectorAll('.menu-button a');
let oldMenuButtonsColor = window.getComputedStyle(links[0]).getPropertyValue('color');

if(localStorage.getItem('originThemeFlag')) {
  originThemeFlag = localStorage.getItem('originThemeFlag');
} else {
  originThemeFlag = 'true';
  localStorage.setItem('originThemeFlag', originThemeFlag);
}

// if(localStorage.getItem('newBackground')) {
//   newBackground = localStorage.getItem('newBackground');
// } else {
//   newBackground = '#fff7c6';
//   localStorage.setItem('newBackground', newBackground);
// }

// if(localStorage.getItem('oldBackground')) {
//   oldBackground = localStorage.getItem('oldBackground');
// } else {
//   oldBackground = window.getComputedStyle(document.body).getPropertyValue('background');
//   localStorage.setItem('oldBackground', oldBackground);
// }

// if(localStorage.getItem('menuButtonsColor')) {
//   menuButtonsColor = localStorage.getItem('menuButtonsColor');
// } else {
//   menuButtonsColor = 'red';
//   localStorage.setItem('menuButtonsColor', menuButtonsColor);
// }

if(originThemeFlag === 'false') {
  document.body.style.background = newBackground;
  links.forEach(element => element.style.color = newMenuButtonsColor);
};

buttonJs.addEventListener('click', changeTheme);
function changeTheme() {  

  if( originThemeFlag === 'true' ) {
    document.body.style.background = newBackground;
    links.forEach(element => element.style.color = newMenuButtonsColor);
    originThemeFlag = 'false';
  } else {
    document.body.style.background = oldBackground;
    links.forEach(element => element.style.color = oldMenuButtonsColor);
    originThemeFlag = 'true';
  }
  localStorage.setItem('originThemeFlag', originThemeFlag);
};
