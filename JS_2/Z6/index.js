"use strict"

// Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript
// Javascript це синхронна мова програмування що виконує всі команди по черзі. Асинхронні функції відправляються до API браузера та виконуються там. 
// Після свого виконання вони становляться в чергу, та повертають резульлтат в JS коли він виконає всі синхронні завдання (коли Call Stack порожній). 

let urlGetIp = 'https://api.ipify.org/?format=json';
let urlGetInfoByIp = new URL('http://ip-api.com/json/');
let searchParams = 'continent,country,regionName,city,district';

function renderHtml({continent, country, regionName, city, district}) {
  document.querySelector('.info').innerHTML = `
  <h2>Information about user:</h2>
  <h3>Continent: ${continent}</h3>
  <h3>Country: ${country}</h3>
  <h3>RegionName: ${regionName}</h3>
  <h3>City: ${city}</h3>
  <h3>District: ${district}</h3> `
}

async function getInfo() {  
  urlGetInfoByIp.searchParams.set('fields', searchParams);
  let responseJson = await fetch(urlGetInfoByIp);
  if (responseJson.ok) {
    let response = await responseJson.json();
    console.log(response);  
    renderHtml(response);
  } else {
    console.log("Something went wrong");
  }
}

async function getIp() {
  let responseJson = await fetch(urlGetIp);
  if (responseJson.ok) {
    let response = await responseJson.json();
    console.log(response);      //        {ip: '176.98.31.1'}
    getInfo();
  } else {
    console.log("Something went wrong");
  }
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', getIp);
