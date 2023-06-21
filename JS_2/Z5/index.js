"use strict"

// Створити сторінку, яка імітує стрічку новин соціальної мережі Twitter.
// Технічні вимоги:
// При відкритті сторінки необхідно отримати з сервера список всіх користувачів та загальний список публікацій. Для цього потрібно надіслати GET запит на наступні дві адреси:
// https://ajax.test-danit.com/api/json/users
// https://ajax.test-danit.com/api/json/posts
// Після завантаження всіх користувачів та їх публікацій необхідно відобразити всі публікації на сторінці.
// Кожна публікація має бути відображена у вигляді картки (приклад: https://prnt.sc/q2em0x), та включати заголовок, текст, а також ім'я, прізвище та імейл користувача, який її розмістив.
// На кожній картці повинна бути іконка або кнопка, яка дозволить видалити цю картку зі сторінки. При натисканні на неї необхідно надіслати DELETE запит на адресу https://ajax.test-danit.com/api/json/posts/${postId}. Після отримання підтвердження із сервера (запит пройшов успішно), картку можна видалити зі сторінки, використовуючи JavaScript.
// Більш детальну інформацію щодо використання кожного з цих зазначених вище API можна знайти тут.
// Цей сервер є тестовим. Після перезавантаження сторінки всі зміни, які надсилалися на сервер, не будуть там збережені. Це нормально, все так і має працювати.
// Картки обов'язково мають бути реалізовані у вигляді ES6 класів. Для цього необхідно створити клас Card. При необхідності ви можете додавати також інші класи.
// Необов'язкове завдання підвищеної складності
// Поки з сервера під час відкриття сторінки завантажується інформація, показувати анімацію завантаження. Анімацію можна використовувати будь-яку. Бажано знайти варіант на чистому CSS без використання JavaScript.
// Додати зверху сторінки кнопку Додати публікацію. При натисканні на кнопку відкривати модальне вікно, в якому користувач зможе ввести заголовок та текст публікації. Після створення публікації дані про неї необхідно надіслати в POST запиті на адресу: https://ajax.test-danit.com/api/json/posts. Нова публікація має бути додана зверху сторінки (сортування у зворотному хронологічному порядку). Автором можна присвоїти публікації користувача з id: 1.
// Додати функціонал (іконку) для редагування вмісту картки. Після редагування картки для підтвердження змін необхідно надіслати PUT запит на адресу https://ajax.test-danit.com/api/json/posts/${postId}.

// address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
// company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"

// body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id: 1
// title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId: 1

import Card from "./js/card.js";
import modal from "./js/modal.js";

let urlUsers = 'https://ajax.test-danit.com/api/json/users';
let urlPosts = 'https://ajax.test-danit.com/api/json/posts';
// let urlDeletePost ='https://ajax.test-danit.com/api/json/posts/$%7BpostId%7D';    // не працює скотиняка, тому використовую наступний
let baseUrl = 'https://jsonplaceholder.typicode.com/posts';
let baseUrl2 = 'https://jsonplaceholder.typicode.com/posts/1';

// let urlDeletePost = new URL('https://jsonplaceholder.typicode.com/posts');

let users;
export {users};

async function getResponse(urlUsers, urlPosts) {
  let responseUsers = fetch(urlUsers);
  let responsePosts = fetch(urlPosts);
  let responseUsersJson = await responseUsers;
  let responsePostsJson = await responsePosts;
  users = await responseUsersJson.json();
  let posts = await responsePostsJson.json();
  document.querySelector('.animation').classList.remove('animation');
  document.querySelector('.btn-add').hidden = false;
  let text = '';
  for (let index = posts.length - 1; index >= 0; index--){     
    let user = users.find(user => user.id === posts[index].userId);
    text += new Card(user, posts[index]).render()   
  }
  document.querySelector('.cards').innerHTML = text;
}

getResponse(urlUsers, urlPosts);

async function deletePost(value) {
  let option = {
    method: 'DELETE',
  }
  let responseDelete;
  try {
    let urlDeletePost = new URL(`/posts/${value}`,baseUrl);
    console.log(urlDeletePost);
    responseDelete = await fetch(urlDeletePost, option);
    if(responseDelete.ok) {
      document.querySelector(`.post-${value}`).remove();
      // let responseDelete2 = await responseDelete.json();
      // console.log(responseDelete2);
    } else {
      console.log(" Помилка в запросі на видалення карточки. Статус:", responseDelete.status);
    }
  }
  catch {
    console.log('Помилка в запросі на видалення');
  }
}

function btnEvent() { 
  if(!event.target.classList.contains('btn')) return;
  deletePost(event.target.dataset.id)
}

document.body.addEventListener('click', btnEvent)

let btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', modal.showModal);