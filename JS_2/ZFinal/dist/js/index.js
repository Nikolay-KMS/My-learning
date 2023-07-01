 class Modal {
  constructor() {}
  renderModal() {         // намалювати модалку в ХТМЛ
    document.querySelector('main').insertAdjacentHTML("beforeend", 
      `<div id="modalCreate" class=" bg-opacity-50 w-full top-0 bottom-0 fixed bg-black">
        <div id="modalCreateWindow" class="bg-emerald-950 min-h-[200px] w-1/2 mt-24 rounded-3xl mx-auto">
          <div class="flex justify-between border-b-2">
            <h2 class=" pl-5 py-4 uppercase text-xl">Create an appointment</h2>
            <div id="btnModelClose" class="flex items-center pr-2 cursor-pointer">
              <div class="bg-red-500 w-8 h-0.5 -rotate-45"></div>
              <div class="bg-red-500 w-8 h-0.5 rotate-45 absolute"></div>
            </div>
          </div>          
          <form id="modalCreateInputs" class="mx-auto w-fit pt-4 space-y-5">
            <select name="chooseDoctor" id="chooseDoctor" class="bg-yellow-200 rounded text-slate-900 px-3">
              <option disabled selected value="" class="">Choose a doctor</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dentist">Dentist</option>
              <option value="Therapist">Therapist</option>
            </select>
            <div id="inputs" class="space-y-5"> 

            </div>     
            <div class="flex justify-between pb-4">
              <button  id="btnModelCreate" type="submit" class="mx-1 border rounded px-4 py-2 bg-emerald-800">Create</button>
            </div>
          </form>
        </div>
      </div>`
    );
  }
  closeModal() {        // грохнути модалку
    document.querySelector('#modalCreate').remove();
  }
  editModal(id) {           // намалювати модалку в ХТМЛ, при зміні даних
    document.querySelector('main').insertAdjacentHTML("beforeend", 
      `<div id="modalCreate" class=" bg-opacity-50 w-full top-0 bottom-0 fixed bg-black">
        <div id="modalCreateWindow" class="bg-emerald-950 min-h-[200px] w-1/2 mt-24 rounded-3xl mx-auto">
          <div class="flex justify-between border-b-2">
            <h2 class=" pl-5 py-4 uppercase text-xl">Create an appointment</h2>
            <div id="btnModelClose" class="flex items-center pr-2 cursor-pointer">
              <div class="bg-red-500 w-8 h-0.5 -rotate-45"></div>
              <div class="bg-red-500 w-8 h-0.5 rotate-45 absolute"></div>
            </div>
          </div>          
          <div id="modalCreateInputs" class="mx-auto w-fit pt-4 space-y-5">
            <select name="chooseDoctor" id="chooseDoctor" class="bg-yellow-200 rounded text-slate-900 px-3">
              <option disabled selected value="" class="">Choose a doctor</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dentist">Dentist</option>
              <option value="Therapist">Therapist</option>
            </select>
            <div id="inputs" class="space-y-5"> 

            </div>     
            <div class="flex justify-between pb-4">
              <button  id="btnModelChange" class="mx-1 border rounded px-4 py-2 bg-emerald-800">Change</button>
            </div>
          </div>
        </div>
      </div>`
    );
    document.querySelector('#modalCreate').dataset.id = id;
  }          // а це напевно костиль. для передачі АйДи
}


class Visit {
  constructor({doctor, name='', target='', description='', state, pressure='', bodyWeight='', illnesses='', age='', date=undefined} ={}) {
    this.doctor = doctor;
    this.name = name;
    this.target = target;
    this.description = description;
    this.state = state;
    this.pressure = pressure;
    this.bodyWeight = bodyWeight;
    this.illnesses = illnesses;
    this.age = age;
    this.date = date;
  }
  renderCommon() {            // намалювати в модалці "загальні" інпути
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="nameCreate" class="mx-auto mt-2 block"> Type your First & Last Name
        <input id="nameCreate" type="text" required placeholder="Name" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="targetCreate" class="block "> Type your target
        <input id="targetCreate" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="descriptionCreate" class="block "> Type your description
        <input id="descriptionCreate" required type="text" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <select name="stateCreate" id="stateCreate" class="bg-yellow-200 text-slate-900 cursor-pointer px-4 rounded">
        <option disabled selected class="">Urgency</option>
        <option value="High" class="">High</option>
        <option value="Normal" class="">Normal</option>
        <option value="Low" class="">Low</option>
      </select> `)
  }
  deleteInputs() {          // грохнути інпути в модалці
    document.querySelector('#inputs').innerHTML = '';
  }

  editCommon() {              // намалювати в модалці "загальні" інпути, при зміні карточки
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="nameCreate" class="mx-auto mt-2 block"> Type your First & Last Name
        <input id="nameCreate" type="text" required placeholder="Name" class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.name}>
      </label>
      <label for="targetCreate" class="block "> Type your target
        <input id="targetCreate" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.target}>
      </label>
      <label for="descriptionCreate" class="block "> Type your description
        <input id="descriptionCreate" required type="text" class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.description}>
      </label>
      <select name="stateCreate" id="stateCreate" class="bg-yellow-200 text-slate-900 cursor-pointer px-4 rounded">
        <option disabled selected class="">Urgency</option>
        <option value="High" class="">High</option>
        <option value="Normal" class="">Normal</option>
        <option value="Low" class="">Low</option>
      </select> `
    )
    document.querySelector('#chooseDoctor').value = this.doctor;   // вписати в Селект значення
    document.querySelector('#stateCreate').value = this.state;     // вписати в Селект значення  
  }
}

class VisitCardiologist extends Visit {
  renderExtends() {          // намалювати в модалці інпути для конкретного лікаря
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="pressure" class="block "> Pressure
        <input id="pressure" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="bodyWeight" class="block "> Body weight
        <input id="bodyWeight" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="illnesses" class="block "> Past illnesses
        <input id="illnesses" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="age" class="block "> Age
        <input id="age" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label> `
    )
  }
  editExtends() {         // намалювати в модалці інпути для конкретного лікаря, при зміні даних
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="pressure" class="block "> Pressure
        <input id="pressure" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.pressure}>
      </label>
      <label for="bodyWeight" class="block "> Body weight
        <input id="bodyWeight" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.bodyWeight}>
      </label>
      <label for="illnesses" class="block "> Past illnesses
        <input id="illnesses" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.illnesses}>
      </label>
      <label for="age" class="block "> Age
        <input id="age" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.age}>
      </label> `
    )
  }
}

class VisitDentist extends Visit {
  renderExtends() {
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', ` 
      <label for="dateCreate" class="block "> Type date of last appointment
        <input id="dateCreate" required type="date" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label> `
      )
  }
  editExtends() {
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', ` 
    <label for="dateCreate" class="block "> Type date of last appointment
      <input id="dateCreate" required type="date" class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.date}>
    </label> `
    )    
  }
}

class VisitTherapist extends Visit {
  renderExtends() {
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="age" class="block "> Age
        <input id="age" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label> `
    )
  }
  editExtends() {
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="age" class="block "> Age
        <input id="age" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.age}>
      </label> `
    )    
  }
}


async function postCard(data) { 
  const option = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    mode: "cors",
    "body" : JSON.stringify(data)}
  await fetch("https://eobeobd58cj45sc.m.pipedream.net", option)
  .then(res => res.json())
  .then(res => {
    const id = res.key;  
    addCardToHtml({id, ...res.value});
  })
}


async function getCards() {
  await fetch("https://eocpfm06arl4ibn.m.pipedream.net")
  .then(res => res.json())
  .then(res => {
    const arrCards = Object.entries(res);
    arrCards.forEach(elem => addCardToHtml({key:elem[0], ...elem[1]}));
    checkCork();
  });
}

async function putCard(data) {
  const option = {
    method: "PUT",
    headers: {
      'Content-Type':'application/json'
    },
    mode: "cors",
    "body": JSON.stringify(data)
  }
  const res = await fetch ("https://eo8o4phxh10xrep.m.pipedream.net", option)
  .then(response => response.json())
  .then(res => {
  const key = res.key;
  editCardInHtml({key, ...res.data})
  })
}

async function deleteCard(dataKey) {
  const option = {
    method: "DELETE",
    headers: {
      'Content-Type':'application/json'
    },
    mode: "cors",
    "body": JSON.stringify(dataKey)
  }

  await fetch ("https://eokub9t5q3an3z1.m.pipedream.net", option)
  .then(response => response.json())
  .then(res => {
    document.getElementById(res).remove();
  })
};

                    
// const obj = {        // наступні 5 абзаців для тестування. Щоб не трогати Ендпоинт (pipedream)
//   78: {              // коментуєш попередні 5 абзаців, а ці відкриваєш, і все працює без сервера))
//     age: false, 
//     bodyWeight: false,
//     date:"2023-06-14",
//     description: "description1",
//     doctor:"Dentist",
//     illnesses : false,
//     name :"name1",
//     pressure :  false,
//     state : "Normal",
//     target  :  "target1",
//   },
//   27: {
//     age: "age2",
//     bodyWeight: false,
//     date: false,
//     description: "description2",
//     doctor: "Therapist",
//     illnesses: false,
//     name: "name2",
//     pressure: false,
//     state: "High",
//     target: "target2",
//   }
// }

// function postCard({key, ...data}) { 
//   addCardToHtml({key, ...data.data});
// };

// function getCards() {
//   const arrCards = Object.entries(obj); 
//   arrCards.forEach(elem => addCardToHtml({key:elem[0], ...elem[1]}));
//   checkCork();
// };

// async function putCard({key, ...data}) {
//   editCardInHtml({key, ...data.data})
// }

// async function deleteCard(dataKey) {
//   document.getElementById(dataKey).remove();
// }

class Cards {
  constructor({key:id, doctor, name, target, description, state} = {}) {
    this.id = id;
    this.doctor = doctor;
    this.name = name;
    this.target = target;
    this.description = description;
    this.state = state;
  }  

  renderHtmlCommon() {                      // малюю в ХТМЛ "загальні дані" карточки
    document.querySelector('#cards').insertAdjacentHTML('beforeend', `
      <div id="${this.id}" class="card border-2 rounded mb-3 px-5 py-2">
        <div class="flex justify-between">
          <div>
            <h2 class="name">${this.name}</h2>
            <p class="doctor">${this.doctor}</p>
            <div class="extended hidden" >
              <p class="target">${this.target}</p>
              <p class="description">${this.description}</p>
              <p class="urgency">${this.state}</p>
            </div>
            <button class="more border-2 rounded bg-violet-950 py-1 px-2">Show more</button>
            <button class="changeVisit border-2 rounded bg-violet-950 py-1 px-2">Change visit</button>
          </div>       
          <div class="deleteCard cursor-pointer h-fit">
            <div class="bg-red-600 w-5 h-0.5 rotate-45 translate-y-0.5 "></div>
            <div class="bg-red-600 w-5 h-0.5 -rotate-45"></div>
          </div>
        </div>
      </div>  `
    )
  }

  editCardCommon() {                     // редактую в ХТМЛ "загальні дані" карточки
    document.getElementById(`${this.id}`).innerHTML = `
      <div class="flex justify-between">
        <div>
          <h2 class="name">${this.name}</h2>
          <p class="doctor">${this.doctor}</p>
          <div class="extended hidden" >
            <p class="target">${this.target}</p>
            <p class="description">${this.description}</p>
            <p class="urgency">${this.state}</p>
          </div>
          <button class="more border-2 rounded bg-violet-950 py-1 px-2">Show more</button>
          <button class="changeVisit border-2 rounded bg-violet-950 py-1 px-2">Change visit</button>
        </div>       
        <div class="deleteCard cursor-pointer">
          <div class="bg-red-600 w-5 h-0.5 rotate-45 translate-y-0.5 "></div>
          <div class="bg-red-600 w-5 h-0.5 -rotate-45"></div>
        </div>
      </div> `
  }
}

class CardCardiologist extends Cards {
  constructor( {key:id, doctor, name, target, description, state, pressure, bodyWeight, illnesses, age} ) {
    super({key:id, doctor, name, target, description, state});
    this.pressure = pressure;
    this.bodyWeight = bodyWeight;
    this.illnesses = illnesses;
    this.age = age;
  }

  renderHtml() {                    // малюю в ХТМЛ "дані карточки для конкретного лікаря" 
    document.getElementById(`${this.id}`).querySelector('.extended').insertAdjacentHTML('beforeend', `
      <p class="pressure">${this.pressure}</p>
      <p class="bodyWeight">${this.bodyWeight}</p>
      <p class="illnesses">${this.illnesses}</p>
      <p class="age">${this.age}</p>  `
    )
  }
}

class CardDentist extends Cards {
  constructor( {key:id, doctor, name, target, description, state, date} ) {
    super({key:id, doctor, name, target, description, state});
    this.date = date;
  }

  renderHtml() {
    document.getElementById(`${this.id}`).querySelector('.extended').insertAdjacentHTML('beforeend', 
      `<p class="date">${this.date}</p> `
    )    
  }  
}

class CardTherapist extends Cards {
  constructor( {key:id, doctor, name, target, description, state, age} ) {
    super({key:id, doctor, name, target, description, state});
    this.age = age;
  }

  renderHtml() {
    document.getElementById(`${this.id}`).querySelector('.extended').insertAdjacentHTML('beforeend', `
      <p class="age">${this.age}</p>  `
    )
  }
}

document.querySelector('#btnFind').addEventListener('click', filterCards);

function filterCards() {  
 const arrCard = document.querySelectorAll('.card');
 let valInput = document.querySelector('#inputFind').value;
 const valState = document.querySelector('#findState').value;
 const valUrgencyFilter = document.querySelector('#findUrgency').value;
 if(valInput === '') valInput = null;

 if (valInput === null && valState === 'State' && valUrgencyFilter === 'Urgency') {
  arrCard.forEach(card => {
    if(card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    };
  });
  return
 };

 arrCard.forEach(card => {
  if(card.classList.contains('hidden')) {
    card.classList.remove('hidden');
  };

  const valTarget = card.querySelector('.target').innerText;
  const valDescription = card.querySelector('.description').innerText;
  const valUrgency = card.querySelector('.urgency').innerText;
  let isCardOnen = 'Open';
  if(card.querySelector('.date')) {
    const dateNow = new Date();
    const dateCard = card.querySelector('.date');
    isCardOnen = dateCard >= dateNow ? 'Open' : 'Done';
  }

  if(valTarget.includes(valInput) || valDescription.includes(valInput) || 
  valState === isCardOnen || valUrgency === valUrgencyFilter) return;
  card.classList.add('hidden');
 })
}
"use strict"

document.querySelector('#logIn').addEventListener('click', logIn);

function logIn() {                    // модалка з логіном
  const modal = document.querySelector('#modalEnter');
  modal.classList.remove('hidden');
  document.querySelector('#btnModelLogIn').addEventListener('click', btnModelLogIn);
  modal.addEventListener('click', clickOutModel);
}

function btnModelLogIn() {                  // примітивна перевірка логіна і пар.
  const email = 'email';
  const password = 'pas';
  const inpModelEmail = document.querySelector('#inpModelEmail');
  const inpModelPassword = document.querySelector('#inpModelPassword');

  if(inpModelEmail.value === email && inpModelPassword.value === password) {
    document.querySelector('#logIn').classList.add('hidden');
    document.querySelector('#logIn').removeEventListener('click', logIn);
    document.querySelector('#createAppoin').classList.remove('hidden');
    hideLogInModel();
    document.querySelector('#btnModelLogIn').removeEventListener('click', btnModelLogIn);
    getCards();
  }
}

getCards();              // розкоменутвати щоб не вводити пароль))

function clickOutModel() {               // якщо тикнули мимо модалки
  if(event.target.closest('#modalEnterWindow')) return;
  hideLogInModel();
}

function hideLogInModel() {
  const modal = document.querySelector('#modalEnter');
  modal.classList.add('hidden');
}

function checkCork() {             // якщо є карточки, то прибипаємо плашку
  const cork = document.querySelector('#cork');
  (!(document.querySelector('#cards').innerHTML == false)) ? cork.classList.add('hidden') :cork.classList.remove('hidden');
}

document.querySelector('#createAppoin').addEventListener('click', loadModalCreate);

function loadModalCreate() {             // модалка для створення карток
  new Modal().renderModal();
  document.querySelector('#chooseDoctor').addEventListener('change', changeDoctor);
  new Visit().renderCommon();
  document.querySelector('#btnModelClose').addEventListener('click', closeModalCreate);
  document.querySelector('#btnModelCreate').addEventListener('click', createNewAppoin);
}

function closeModalCreate() {                 // закриття модалки
  new Modal().closeModal();
}

function changeDoctor() {                    // Селект зміни лікаря
  const doctor = document.querySelector('#chooseDoctor').value;
  const data = getDataFromModal();
  new Visit().deleteInputs();
  if(doctor === 'Cardiologist') {
    const visit = new VisitCardiologist(data);
    visit.renderCommon();
    visit.renderExtends()  
  };
  if(doctor === 'Dentist') {
    const visit = new VisitDentist(data);
    visit.renderCommon();
    visit.renderExtends() 
  };
  if(doctor === 'Therapist'){
    const visit = new VisitTherapist(data);
    visit.renderCommon();
    visit.renderExtends() 
  };  
}

function createNewAppoin() {                    // кнопка Створити
  const data = getDataFromModal();
  new Modal().closeModal();
  const key = getNewId();
  const objData = { key, data, }
  postCard(objData);
}

function getDataFromModal() {                      // беру введені дані з модалки
  const doctor = document.querySelector('#chooseDoctor').value;
  const name = document.querySelector('#nameCreate').value;
  const target = document.querySelector('#targetCreate').value;
  const description = document.querySelector('#descriptionCreate').value;
  const state = document.querySelector('#stateCreate').value;  
    
  const pressure = (document.querySelector('#pressure')) ? document.querySelector('#pressure').value : false; 
  const bodyWeight = document.querySelector('#bodyWeight') ? document.querySelector('#bodyWeight').value : false;   
  const illnesses = document.querySelector('#illnesses') ? document.querySelector('#illnesses').value : false; 
  const age = document.querySelector('#age') ? document.querySelector('#age').value : false; 
  const date = document.querySelector('#dateCreate') ? document.querySelector('#dateCreate').value : false; 
  return {doctor, name, target, description, state, pressure, bodyWeight, illnesses, age, date}
}

function getNewId() {                      // присвоюю новий АйДи
  const arrCard = document.querySelectorAll('.card');
  const arrId = Array.from(arrCard).map(el => +el.id);
  return createNewId(arrId);
}

function createNewId(arrId) {
  const newId = createNumber();
  if(arrId.includes(newId)) createNewId(arrId);
  return newId;
}

function createNumber() {
  return Math.round(Math.random()*100);
}

function addCardToHtml(data) {               // добавляю карту в НТМЛ
  if(data.doctor === 'Cardiologist') {
    const card = new CardCardiologist(data);
    card.renderHtmlCommon();
    card.renderHtml();
  };
  if(data.doctor === 'Dentist') {
    const card = new CardDentist(data);
    card.renderHtmlCommon();
    card.renderHtml();
  };
  if(data.doctor === 'Therapist') {
    const card = new CardTherapist(data);
    card.renderHtmlCommon();
    card.renderHtml();
  }; 
  addEventsOnCards(data.key)
}

function addEventsOnCards(id) {                 // добавляю для карти Івенту
  console.log(id);
  document.getElementById (id).querySelector('.more')
  .addEventListener('click', btnMore);
document.getElementById (id).querySelector('.changeVisit')
  .addEventListener('click', btnChangeVisit);
  document.getElementById (id).querySelector('.deleteCard')
  .addEventListener('click', btnDeleteCard);
}

document.querySelectorAll('.card .more').forEach(btn => btn.addEventListener('click', btnMore));
document.querySelectorAll('.card .changeVisit').forEach(btn => btn.addEventListener('click',btnChangeVisit));
document.querySelectorAll('.card .deleteCard').forEach(btn => btn.addEventListener('click',btnDeleteCard));

function btnMore() {                   // кнопка - більше інфо
  const card = event.target.closest('.card');
  card.querySelector('.extended').classList.remove('hidden');
  card.querySelector('.more').classList.add('hidden');
}

function btnChangeVisit() {                    // кнопка змінити
  const id = event.target.closest('.card').id;
  new Modal().editModal(id);
  changeModalInputs();
  document.querySelector('#chooseDoctor').addEventListener('change', changeModalInputs);
}

function changeModalInputs() {                     // зміна картки
  const id = document.querySelector('#modalCreate').dataset.id;
  const card = document.getElementById(id);
  const data = getDataFromHtml(card);
  const doctor = document.querySelector('#chooseDoctor').value;
  if(doctor !== '')   data.doctor = doctor;
  new Visit().deleteInputs();

  if(data.doctor === 'Cardiologist') {
    const visit = new VisitCardiologist(data);
    visit.editCommon();
    visit.editExtends();
  };
  if(data.doctor === 'Dentist') {
    const visit = new VisitDentist(data);
    visit.editCommon();
    visit.editExtends();
  };
  if(data.doctor === 'Therapist') {
    const visit = new VisitTherapist(data);
    visit.editCommon();
    visit.editExtends();
  }; 
  document.querySelector('#btnModelClose').addEventListener('click', closeModalCreate);
  document.querySelector('#btnModelChange').addEventListener('click', changeExistAppoin);
}

function btnDeleteCard() {                     // кнопка грохнути картку
  const card = event.target.closest('.card');
  const key = card.id;
  deleteCard(key);
}

function getDataFromHtml(card) {                     // зчитати всі дані з картки в ХТМЛ
  const key = card.id;
  const doctor = card.querySelector('.doctor').innerText;
  const name = card.querySelector('.name').innerText;
  const target = card.querySelector('.target').innerText;
  const description = card.querySelector('.description').innerText;
  const state = card.querySelector('.urgency').innerText;  
    
  const pressure = card.querySelector('.pressure') ? card.querySelector('.pressure').innerText : ''; 
  const bodyWeight = card.querySelector('.bodyWeight') ? card.querySelector('.bodyWeight').innerText : '';   
  const illnesses = card.querySelector('.illnesses') ? card.querySelector('.illnesses').innerText : ''; 
  const age = card.querySelector('.age') ? card.querySelector('.age').innerText : ''; 
  const date = card.querySelector('.date') ? card.querySelector('.date').innerText : ''; 
  return {key, doctor, name, target, description, state, pressure, bodyWeight, illnesses, age, date}
}

function changeExistAppoin() {                     // зпуск зміни картки
  const key = document.querySelector('#modalCreate').dataset.id;
  const data = getDataFromModal();
  const objData = {
    key,
    data,
  }
  putCard(objData)
  new Modal().closeModal();
}

function editCardInHtml(data) {                  //  добавити в ХТМЛ змінену картку
  if(data.doctor === 'Cardiologist') {
    const card = new CardCardiologist(data);
    card.editCardCommon();
    card.renderHtml();
  };
  if(data.doctor === 'Dentist') {
    const card = new CardDentist(data);
    card.editCardCommon();
    card.renderHtml();
  };
  if(data.doctor === 'Therapist') {
    const card = new CardTherapist(data);
    card.editCardCommon();
    card.renderHtml();
  }; 
  addEventsOnCards(data.key);
}

