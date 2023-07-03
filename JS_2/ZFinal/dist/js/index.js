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
            <div class="pb-4">
              <p id="btnModelCreateTooltip" class=" h-0 text-pink-600 invisible text-sm">
                You need to fil in all feids</p>
              <button id="btnModelCreate" class="mx-1 border rounded px-4 py-2
                bg-emerald-800 hover:bg-slate-800 cursor-pointer">Send</button>
            </div>
          </form>
        </div>
      </div>`
    );
  }
  closeModal() {        // грохнути модалку
    document.querySelector('#modalCreate').remove();
  }  
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
        <input id="nameCreate" type="text" placeholder="Name" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="targetCreate" class="block "> Type your target
        <input id="targetCreate" type="text" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="descriptionCreate" class="block "> Type your description
        <input id="descriptionCreate" type="text" class="bg-sky-200 text-orange-950 rounded pl-3">
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

  editCommon() {              // вписати в інпути модалки "загальні дані" , при зміні карточки
    document.querySelector('#chooseDoctor').value = this.doctor;   // вписати в Селект значення
    document.querySelector('#stateCreate').value = this.state;     // вписати в Селект значення  
    document.querySelector('#nameCreate').value = this.name;      // вписати в Інпут значення
    document.querySelector('#targetCreate').value = this.target; 
    document.querySelector('#descriptionCreate').value = this.description; 
  }
}

class VisitCardiologist extends Visit {
  renderExtends() {          // намалювати в модалці інпути для конкретного лікаря
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="pressure" class="block "> Pressure
        <input id="pressure" type="text" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="bodyWeight" class="block "> Body weight
        <input id="bodyWeight" type="text" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="illnesses" class="block "> Past illnesses
        <input id="illnesses" type="text" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
      <label for="age" class="block "> Age
        <input id="age" type="text" class="bg-sky-200 text-orange-950 rounded pl-3">
      </label> `
    )
  }
  editExtends() {         // вписати в інпути модалки дані для конкретного лікаря, при зміні даних
    document.querySelector('#pressure').value = this.pressure; 
    document.querySelector('#bodyWeight').value = this.bodyWeight; 
    document.querySelector('#illnesses').value = this.illnesses; 
    document.querySelector('#age').value = this.age; 
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
    document.querySelector('#dateCreate').value = this.date; 
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
    document.querySelector('#age').value = this.age;     
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
//   1: {              // коментуєш попередні 5 абзаців, а ці відкриваєш, і все працює без сервера))
//     age: false,
//     bodyWeight: false,
//     date: "2023-06-14",
//     description: "description1",
//     doctor: "Dentist",
//     illnesses: false,
//     name: "name1",
//     pressure: false,
//     state: "Normal",
//     target: "target1",
//   },
//   2: {
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
//   },
//   3: {              // коментуєш попередні 5 абзаців, а ці відкриваєш, і все працює без сервера))
//     age: false,
//     bodyWeight: false,
//     date: "2023-06-14",
//     description: "description1",
//     doctor: "Dentist",
//     illnesses: false,
//     name: "name1",
//     pressure: false,
//     state: "Normal",
//     target: "target1",
//   },
//   4: {
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

// function postCard({ key, ...data }) {
//   addCardToHtml({ key, ...data.data });
// };

// function getCards() {
//   const arrCards = Object.entries(obj);
//   arrCards.forEach(elem => addCardToHtml({ key: elem[0], ...elem[1] }));
//   checkCork();
// };

// async function putCard({ key, ...data }) {
//   editCardInHtml({ key, ...data.data })
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

document.querySelector('#btnFind').addEventListener('click', filterAll);
document.querySelector('#inputFind').addEventListener('keyup', mainInputFind);

function mainInputFind() {
  (event.code === 'Enter') ? filterAll() : false;
}

document.querySelector('#findUrgency').addEventListener('change', filterAll);
document.querySelector('#findState').addEventListener('change', filterAll)

function openAllCards(arrCard) {
  arrCard.forEach(card => {
    if(card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    };
  });
}

function filterAll() {
  const arrCard = document.querySelectorAll('.card');
  openAllCards(arrCard);
  closeCardsByUrgency(arrCard);
  closeCardsByState(arrCard);
  closeCardsByInput(arrCard);
}

function closeCardsByUrgency(arrCard) {
  const valUrgencyFilter = document.querySelector('#findUrgency').value;
  if(valUrgencyFilter === 'Urgency') return;
  arrCard.forEach(card => {
    if(card.querySelector('.urgency').innerText !== valUrgencyFilter) {
      card.classList.add('hidden');
    };
  });  
}

function closeCardsByState(arrCard) {  
  const valStateFilter = document.querySelector('#findState').value;
  if(valStateFilter === 'State') return;
   arrCard.forEach(card => {
    let dateNow = new Date();
    dateNow = dateNow.toISOString().slice(0,10)
    const cardState = (!card.querySelector('.date')) ? 'Open' : 
      (dateNow >= card.querySelector('.date').innerText) ? 'Done' : 'Open';
    (cardState !== valStateFilter) ? card.classList.add('hidden') : false;
  });  
}

function closeCardsByInput(arrCard) {
  let valInput = document.querySelector('#inputFind').value;
  arrCard.forEach(card => {
    const valTarget = card.querySelector('.target').innerText;
    const valDescription = card.querySelector('.description').innerText;
    if(!valTarget.includes(valInput) && !valDescription.includes(valInput)) {
      card.classList.add('hidden');
    };
  });  
}

"use strict"

document.querySelector('#logIn').addEventListener('click', logIn);

function logIn() {                    // модалка з логіном
  const modal = document.querySelector('#modalEnter');
  modal.classList.remove('hidden');
  document.querySelector('#btnModelLogIn').addEventListener('click', btnModelLogIn);
  modal.addEventListener('click', clickOutModel);
  document.addEventListener('keyup', modelLogInKeyEvent);
}

function btnModelLogIn() {                  // Івент на кнопку Сенд
  const inpModelEmail = document.querySelector('#inpModelEmail').value;
  const inpModelPassword = document.querySelector('#inpModelPassword').value;

  (inpModelPassword.length < 4) ?             // примітивна перевірка пар.
    document.querySelector('#inpModelPasswordflag').classList.remove('invisible') :
    document.querySelector('#inpModelPasswordflag').classList.add('invisible')
                                      // примітивна перевірка логіна і пар.
  if (inpModelEmail.includes('@') && inpModelPassword.length >= 4) {
    document.querySelector('#logIn').classList.add('hidden');
    document.querySelector('#logIn').removeEventListener('click', logIn);
    document.querySelector('#createAppoin').classList.remove('hidden');
    hideLogInModel();
    document.querySelector('#btnModelLogIn').removeEventListener('click', btnModelLogIn);
    document.removeEventListener('keyup', modelLogInKeyEvent);
    getCards();
  }
}

function modelLogInKeyEvent() {                  // Івент на кнопку Enter
  if (event.code === 'Enter') btnModelLogIn();
}

// getCards();              // розкоменутвати щоб не вводити пароль))

function clickOutModel() {               // якщо тикнули мимо модалки
  if (event.target.closest('#modalEnterWindow')) return;
  hideLogInModel();
}

function hideLogInModel() {
  const modal = document.querySelector('#modalEnter');
  modal.classList.add('hidden');
}

function checkCork() {             // якщо є карточки, то прибираємо плашку
  const cork = document.querySelector('#cork');
  (!(document.querySelector('#cards').innerHTML == false)) ? cork.classList.add('hidden') : cork.classList.remove('hidden');
}

document.querySelector('#createAppoin').addEventListener('click', loadModalCreate);

function loadModalCreate() {             // модалка для створення карток
  if (document.querySelector('#modalCreate')) return;
  new Modal().renderModal();
  document.querySelector('#chooseDoctor').addEventListener('change', changeDoctor);
  new Visit().renderCommon();
  document.querySelector('#btnModelClose').addEventListener('click', closeModalCreate);
  document.querySelector('#btnModelCreate').addEventListener('click', (event)=> createNewAppoin(event));
  document.addEventListener('keyup', (event)=> loadModalCreateKeyEvent(event))
}

function loadModalCreateKeyEvent(event) {
  (event.code === 'Enter') ? createNewAppoin(event) : false;
}

function closeModalCreate() {                 // закриття модалки
  new Modal().closeModal();
  document.removeEventListener('keyup', keyEventСhangeExistAppoin);
  document.removeEventListener('keyup', (event)=> loadModalCreateKeyEvent(event));
}

function changeDoctor() {                    // Селект зміни лікаря
  const doctor = document.querySelector('#chooseDoctor').value;
  const data = getDataFromModal();
  new Visit().deleteInputs();
  if (doctor === 'Cardiologist') {
    const visit = new VisitCardiologist(data);
    visit.renderCommon();
    visit.renderExtends()
  };
  if (doctor === 'Dentist') {
    const visit = new VisitDentist(data);
    visit.renderCommon();
    visit.renderExtends()
  };
  if (doctor === 'Therapist') {
    const visit = new VisitTherapist(data);
    visit.renderCommon();
    visit.renderExtends()
  };
}

function createNewAppoin(event) {                    // кнопка Створити
  if(!document.querySelector('#modalCreate')) {
    return
  };
  event.preventDefault();
  if(!checkFillAllInputs()) return;
  const data = getDataFromModal();
  closeModalCreate();
  const key = getNewId();
  const objData = { key, data }
  postCard(objData);
}

function checkFillAllInputs() {
  const data = getDataFromModal()
  if(data.doctor === '' || data.name === '' || data.target === '' || data.description === '' || 
    data.state === 'Urgency') {
    showTooltip();
    return
  } 
  if(data.doctor === 'Cardiologist') {
    if(data.pressure === '' || data.bodyWeight === '' || data.illnesses === '' || 
      data.age === '') {    
      showTooltip();
      return
    }
  } 
  if(data.doctor === 'Dentist') {
    if(data.date === '') {    
      showTooltip();
      return
    }
  } 
  if(data.doctor === 'Therapist') {
    if(data.age === '') {    
      showTooltip();
      return
    }
  }   
  return true;
}

function showTooltip() {
  document.querySelector('#btnModelCreateTooltip').classList.add('h-5', 'mb-2');
  document.querySelector('#btnModelCreateTooltip').classList.remove('invisible');
}

function getDataFromModal() {                      // беру введені дані з модалки
  const doctor = document.querySelector('#chooseDoctor') ? document.querySelector('#chooseDoctor').value : '';
  const name = document.querySelector('#nameCreate') ? document.querySelector('#nameCreate').value : '';
  const target = document.querySelector('#targetCreate') ? document.querySelector('#targetCreate').value : '';
  const description = document.querySelector('#descriptionCreate') ? document.querySelector('#descriptionCreate').value : '';
  const state = document.querySelector('#stateCreate') ? document.querySelector('#stateCreate').value : '';
  const pressure = document.querySelector('#pressure') ? document.querySelector('#pressure').value : '';
  const bodyWeight = document.querySelector('#bodyWeight') ? document.querySelector('#bodyWeight').value : '';
  const illnesses = document.querySelector('#illnesses') ? document.querySelector('#illnesses').value : '';
  const age = document.querySelector('#age') ? document.querySelector('#age').value : '';
  const date = document.querySelector('#dateCreate') ? document.querySelector('#dateCreate').value : '';
  return { doctor, name, target, description, state, pressure, bodyWeight, illnesses, age, date }
}

function getNewId() {                      // присвоюю новий АйДи
  const arrCard = document.querySelectorAll('.card');
  const arrId = Array.from(arrCard).map(el => +el.id);
  return createNewId(arrId);
}

function createNewId(arrId) {
  const newId = createNumber();
  if (arrId.includes(newId)) createNewId(arrId);
  return newId;
}

function createNumber() {
  return Math.round(Math.random() * 100);
}

function addCardToHtml(data) {               // добавляю карту в НТМЛ
  if (data.doctor === 'Cardiologist') {
    const card = new CardCardiologist(data);
    card.renderHtmlCommon();
    card.renderHtml();
  };
  if (data.doctor === 'Dentist') {
    const card = new CardDentist(data);
    card.renderHtmlCommon();
    card.renderHtml();
  };
  if (data.doctor === 'Therapist') {
    const card = new CardTherapist(data);
    card.renderHtmlCommon();
    card.renderHtml();
  };
  addEventsOnCards(data.key)
}

function addEventsOnCards(id) {                 // добавляю Івенти для карти 
  document.getElementById(id).querySelector('.more')
    .addEventListener('click', btnMore);
  document.getElementById(id).querySelector('.changeVisit')
    .addEventListener('click', btnChangeVisit);
  document.getElementById(id).querySelector('.deleteCard')
    .addEventListener('click', btnDeleteCard);
}

document.querySelectorAll('.card .more').forEach(btn => btn.addEventListener('click', btnMore));
document.querySelectorAll('.card .changeVisit')
  .forEach(btn => btn.addEventListener('click', btnChangeVisit));
document.querySelectorAll('.card .deleteCard')
  .forEach(btn => btn.addEventListener('click', btnDeleteCard));

function btnMore() {                   // кнопка - більше інфо
  const card = event.target.closest('.card');
  card.querySelector('.extended').classList.toggle('hidden');
  card.querySelector('.extended').classList.contains('hidden') ?
    event.target.innerText = 'Show more' : event.target.innerText = 'Show less';
}

function btnChangeVisit() {                    // кнопка змінити
  if (document.querySelector('#modalCreate')) return;    // якщо модалка вже відкрита, то виходимо
  const id = event.target.closest('.card').id;
  new Modal().renderModal(id);
  document.querySelector('#btnModelCreate').innerText = 'Change';
  changeModalInputs(id);
  document.querySelector('#chooseDoctor').addEventListener('change', ()=> changeModalInputs(id));
}

function changeModalInputs(id) {                     // зміна картки
  const card = document.getElementById(id);
  const data = getDataFromHtml(card);
  const doctor = document.querySelector('#chooseDoctor').value;
  if (doctor !== '') {
    data.doctor = doctor
  }
  new Visit().deleteInputs();

  if (data.doctor === 'Cardiologist') {
    const visit = new VisitCardiologist(data);
    visit.renderCommon();
    visit.editCommon();
    visit.renderExtends();
    visit.editExtends();
  };
  if (data.doctor === 'Dentist') {
    const visit = new VisitDentist(data);
    visit.renderCommon();
    visit.editCommon();
    visit.renderExtends();
    visit.editExtends();
  };
  if (data.doctor === 'Therapist') {
    const visit = new VisitTherapist(data);
    visit.renderCommon();
    visit.editCommon();
    visit.renderExtends();
    visit.editExtends();
  };
  document.querySelector('#btnModelClose').addEventListener('click', closeModalCreate);
  document.querySelector('#btnModelCreate').addEventListener('click', ()=> changeExistAppoin(id));
  document.addEventListener('keyup', ()=> keyEventСhangeExistAppoin(id));
}

function keyEventСhangeExistAppoin(id) {                         // Івенти для кнопок
  if (event.code === 'Escape') closeModalCreate();
  if (event.code === 'Enter') ()=> changeExistAppoin(id);
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
  return { key, doctor, name, target, description, state, pressure, bodyWeight, illnesses, age, date }
}

function changeExistAppoin(key) {                     // запуск зміни картки
  event.preventDefault();
  if(!checkFillAllInputs()) return;
  const data = getDataFromModal();
  const objData = {
    key,
    data,
  }
  putCard(objData)
  closeModalCreate();
}

function editCardInHtml(data) {                  //  добавити в ХТМЛ змінену картку
  if (data.doctor === 'Cardiologist') {
    const card = new CardCardiologist(data);
    card.editCardCommon();
    card.renderHtml();
  };
  if (data.doctor === 'Dentist') {
    const card = new CardDentist(data);
    card.editCardCommon();
    card.renderHtml();
  };
  if (data.doctor === 'Therapist') {
    const card = new CardTherapist(data);
    card.editCardCommon();
    card.renderHtml();
  };
  addEventsOnCards(data.key);
}

