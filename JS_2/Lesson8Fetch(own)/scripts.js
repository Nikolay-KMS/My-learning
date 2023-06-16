"use strict"

// const addr = `https://swapi.dev/api/people/`;
let url = new URL('https://ajax.test-danit.com/api/swapi/people?search=Skywalker')


function addItemToHtml(data) {
  let text = '';
  data.forEach(element => {
    const temp = new CreateElem(element);
    text += temp.render();
  });
  document.querySelector('.point').innerHTML = text;
}

class CreateElem {
  constructor({name, gender, skinColor, height}){
  this.name= name,
  this.gender= gender,
  this.skinColor= skinColor,
  this.height= height
}
  render() {
    return     `<div>
    <h2>${this.name}</h2>
    <h3>${this.gender}</h3>
    <h3>${this.skinColor}</h3>
    <h3>${this.height}</h3>
    </div>`
  }
}

function getData() {
  fetch(url)
  .then(data => data.json()) 
  .then(data => addItemToHtml(data))
}

getData();