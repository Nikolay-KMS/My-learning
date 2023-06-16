"use strict"

function addFilmToHtml(data) {
  let textHtml;
  data.forEach(obj => {
    const filmObj = new Film (obj);
    textHtml = filmObj.createBlockFilm();
    document.querySelector(".films").insertAdjacentHTML("beforeend", textHtml);
    characters(filmObj)
  });
}

class Film {
  constructor ({name, episodeId, openingCrawl, characters}) {
  this.name = name,
  this.episode = episodeId,
  this.openingCrawl = openingCrawl,
  this.characters = characters
  }
  createBlockFilm() {
    return ` <div class=episode-${this.episode} ><h2>Episode name: ${this.name}</h2>
      <h3>Number of Episode: ${this.episode}</h3>
      <h4>Opening Crawl: ${this.openingCrawl}</h4>
      <h4 class="characters">Characters: </h4>       
      <div class=wait></div></div>`
  }
}

function addCharactersToHtml(name, parent) {
  const wrapper = document.querySelector(`.episode-${parent} .characters`);
  let allText = wrapper.innerHTML + name +', ';
  wrapper.innerHTML = allText
}

function deleteComa(episode) {
  let targ = document.querySelector(`.episode-${episode} .characters`);
  let string = targ.innerText;
  targ.innerText = string.slice(0, -1) + '.';
} 

function characters(obj) {
  let arr =[];
  obj.characters.forEach(elem => {
    const parent = obj.episode;
    arr.push(new Promise(function (resolve) {
      fetch(elem)
      .then(character => character.json())
      .then(character => {
        addCharactersToHtml(character.name, parent)
      })
      .then(() => resolve())
    }))
  });
  Promise.all(arr)
  .then(() => console.log(1))
  .then(() => deleteComa(obj.episode))
  .then(() => document.querySelector(`.episode-${obj.episode} .wait`).classList.remove('wait'))
}

new Promise(function (resolve) {
  let adr = 'data.json';
  function pullData(adr) {
    fetch(adr)
    .then(response => response.json())
    .then((response) => resolve(response))
  }
  return pullData(adr)
}) 
.then(data => {
  return addFilmToHtml(data)  
})