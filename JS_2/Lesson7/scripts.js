"use strict"

function get(url) {
  // Возвращает новый промис
  return new Promise(function(resolve, reject) {
    // Стандартный XHR запрос
    let req = new XMLHttpRequest();
    req.open('GET', url);
  
    req.onload = function() {
      // Этот метод вызовется, даже в случае 404 ошибки
      // так что проверяем код ответа
      if (req.status == 200) {
        // выполняем «resolve» промиса с полученным текстом
        resolve(req.response);
        console.log(req);
      }
      else {
        // иначе вызываем «reject» с текстом статуса
        // который, возможно, даст представление об ошибке
        reject(Error('Str #20 Error'));
      }
    };
 
    // Обрабатываем ошибки сети
    req.onerror = function() {
      reject(Error("Сетевая ошибка"));
    }; 
    // Выполняем запрос
    req.send();
  });
}

let url = 'https://jsonplaceholder.typicode.com/todos';

// get(url).then(function(response) {
//   console.log("Выполнено", response);
// }, function(error) {
//   console.error("Не удалось выполнить!", error);
// });

// get(url).then(function(response) {
//   console.log("Выполнено", response);
// });

// get(url)
// .then((response) => {
//   return JSON.parse(response);
// })
// .then(function(response) {
//   console.log("Выполнено", response);
// });

// get(url)
// .then(JSON.parse)
// .then(function(response) {
//   console.log("Выполнено", response);
// });

function getJSON(url) {
  return get(url).then(JSON.parse)
}
getJSON(url)
.then(function(todos) {
  return getJSON(url+'/50');
})
.then(function(chapter1) {
  console.log("Раздел 1 получен!", chapter1);
});

