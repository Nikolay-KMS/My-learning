"use strict"

document.querySelector('#logIn').addEventListener('click', logIn);

function logIn() {
  const modal = document.querySelector('#modalEnter');
  modal.classList.remove('hidden');
  document.querySelector('#btnModelLogIn').addEventListener('click', btnModelLogIn);
  modal.addEventListener('click', clickOutModel);
}

function btnModelLogIn() {
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

// це прибрати пізніше  -------------------------------------------------------
// getCards()
function clickOutModel() {
  if(event.target.closest('#modalEnterWindow')) return;
  hideLogInModel();
}

function hideLogInModel() {
  const modal = document.querySelector('#modalEnter');
  modal.classList.add('hidden');
}

function checkCork() {
  const cork = document.querySelector('#cork');
  (!(document.querySelector('#cards').innerHTML == false)) ? cork.classList.add('hidden') :cork.classList.remove('hidden');
}

document.querySelector('#createAppoin').addEventListener('click', loadModalCreate);

function loadModalCreate() {
  new Modal().renderModal();
  document.querySelector('#chooseDoctor').addEventListener('change', changeDoctor);
  new Visit().renderCommon();
  document.querySelector('#btnModelClose').addEventListener('click', closeModalCreate);
  document.querySelector('#btnModelCreate').addEventListener('click', createNewAppoin);
}

function closeModalCreate() {
  new Modal().closeModal();
}

function changeDoctor() {
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

function createNewAppoin() {
  const data = getDataFromModal();
  new Modal().closeModal();
  const key = getNewId();
  const objData = { key, data, }
  postCard(objData);
}

function getDataFromModal() {
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

function getNewId() {
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

function addCardToHtml(data) {
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

function addEventsOnCards(id) {
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

function btnMore() {
  const card = event.target.closest('.card');
  card.querySelector('.extended').classList.remove('hidden');
  card.querySelector('.more').classList.add('hidden');
}

function btnChangeVisit() {
  const id = event.target.closest('.card').id;
  new Modal().editModal(id);
  changeModalInputs();
  document.querySelector('#chooseDoctor').addEventListener('change', changeModalInputs);
}

function changeModalInputs() {
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

function btnDeleteCard() {
  const card = event.target.closest('.card');
  const key = card.id;
  deleteCard(key);
}

function getDataFromHtml(card) {
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

function changeExistAppoin() {
  const key = document.querySelector('#modalCreate').dataset.id;
  const data = getDataFromModal();
  const objData = {
    key,
    data,
  }
  putCard(objData)
  new Modal().closeModal();
}

function editCardInHtml(data) {
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

