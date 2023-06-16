"use strict"

const btn = document.getElementById('btn')
const request = new XMLHttpRequest()
request.open('GET', 'https://swapi.dev/api/people')
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    const res = JSON.parse(request.response)
    console.log(res)
  }
}
request.send()

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);
let commits = await response.json(); // читаем ответ в формате JSON
console.log(commits[0].author.login);

// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
// let text = await response.text(); // прочитать тело ответа как текст
// console.log(text);

// let response = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WHATWG_Fetch_logo.svg/512px-WHATWG_Fetch_logo.svg.png?20190615041054');

// let blob = await response.blob(); // скачиваем как Blob-объект

// // создаём <img>
// let img = document.createElement('img');
// img.style = 'position:fixed;top:10px;left:10px;width:100px';
// document.body.append(img);

// // выводим на экран
// img.src = URL.createObjectURL(blob);

// setTimeout(() => { // прячем через три секунды
//   img.remove();
//   URL.revokeObjectURL(img.src);
// }, 3000);