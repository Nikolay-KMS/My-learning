'use strict'

export default class Card {
  constructor({name, username, email, id:userId},{title, body, id:postId}) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.postId = postId;  }

  render() {
    return `<div class="post post-${this.postId}">
            <h2 class="username">${this.username}</h2>
            <h3 class="name">${this.name}</h3>
            <p class="email">milo: ${this.email}</p>
            <h3 class="title">${this.title}</h3>
            <p class="body">${this.body}</p>
            <button class="btn" data-id=${this.postId}>Liquidate this nonsense</button>
          </div>`
  }
}