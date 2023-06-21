'use strict'

import { users } from "../index.js";
import Card from "./card.js";

let urlPost ='https://jsonplaceholder.typicode.com/posts';

let modal = {
  showModal: function() {
    let text = `<div class="modal">
    <div class="shadow"></div>
    <div class="modalWindow">
      <h3 class="title">Type your letters</h3>
      <label for="header"> Topic
        <input type="text" name="header" size="50">
      </label>
      <label for="text"> Text
        <input type="text" name="text" size="50">
      </label>
      <button class="modal-send">Send</button>
    </div>
  </div>`
    document.body.insertAdjacentHTML('afterbegin', text);
    let modalBtnSend = document.querySelector('.modal-send');
    modalBtnSend.addEventListener('click', modal.hideModal);
  },
  hideModal: function() {
    modal.createPost();
    document.querySelector('.modal').remove();
  },
  createPost: async function () {
    let postInfo = {
      userId: 1,
      title: document.querySelector('.modal input[name="header"]').value,
      body: document.querySelector('.modal input[name="text"]').value,
    }
    let option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(postInfo)
    }
    let responsePostJson;
    try {
      responsePostJson = await fetch(urlPost, option);
      if(responsePostJson.ok) {
        let responsePost = await responsePostJson.json();
        // console.log(responsePost);
        postInfo.id = responsePost.id;
        modal.pushCard(postInfo);
      } 
      else {
        console.log(" Помилка в запросі на додавання карточки. Статус:", responsePostJson.status);
      }
    }

    catch {
      console.log('Помилка в запросі на додавання карточки');
    }
  },
  pushCard: function (post) {
    let text = new Card(users[0], post).render();
    document.querySelector('.cards').insertAdjacentHTML("afterbegin", text);
  }
} 
export default modal;