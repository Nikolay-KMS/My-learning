"use strict"

// const addr = `https://swapi.dev/api/people/`;
// let url = new URL('https://ajax.test-danit.com/api/swapi/people')
let url = new URL('https://jsonplaceholder.typicode.com/users')

let button = document.querySelector('#sendBut');
let input =document.querySelector('#input');

function addItemToHtml(data) {
  // let text = '';
  data.forEach(element => {
    // const temp = new CreateElem(element);
     new CreateElem(element).render();

    // text += temp.render();
  });
  // document.querySelector('.point').innerHTML = text;
}

class CreateElem {
  constructor({name, username, address, email, id}){
  this.name= name,
  // this.gender= gender,
  this.username= username,
  // this.skinColor= skinColor,
  // this.height= height
  this.email= email
  this.city= address.city
  this.id= id
}
  render() {
    // return     
    document.querySelector('.point').insertAdjacentHTML("beforeend",`<div>
    <h2>Name: ${this.name}</h2>
    <h3>Username: ${this.username}</h3>
    <h3>City: ${this.city}</h3>
    <h3>email: ${this.email}</h3>
    <button class="btn-${this.id}">Write</button>
    </div>`)
    document.querySelector(`.btn-${this.id}`).addEventListener('click', () => addBook(this))
  }
}

function addBook(obj) {
  // console.log(obj.id, obj);
  // postData(obj.id, obj)
}

function getData() {
  fetch(url)
  .then(data => data.json()) 
  .then(data => addItemToHtml(data))
  // .then(data => console.log(data))

}

// getData();

button.addEventListener('click', find);
function find() {
  // console.log(document.querySelector('#input').value);
  // console.log(1);
  url.searchParams.set('search', input.value)
  console.log(url);
  getData();
}

// function postData(key, data) {
//   const body = {
//     key: key,
//     data: data
//   }
//   const option = {
//     method: "POST",
//     headers: {
//       "Content-Type": "aplication/json"
//     },
//     mode: "cors",
//     body: JSON.stringify(body)
//   }
//   fetch("https://eomgo7tsql564dq.m.pipedream.net", option).then(res => console.log(res));
// }

// function getDataPost() {
//   fetch("https://eobf35odunyxuy4.m.pipedream.net")
//   .then(rew => rew.json())
//   // .then(res => console.log(res.$return_value.event));  
//   .then(res => console.log(res));  

// }

// getDataPost();