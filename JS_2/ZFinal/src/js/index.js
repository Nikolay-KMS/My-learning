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
getCards()

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
  // document.querySelector('#chooseDoctor').removeEventListener('change', changeDoctor);
  // document.querySelector('#btnModelClose').removeEventListener('click', closeModalCreate);
  // document.querySelector('#btnModelCreate').removeEventListener('click', createNewAppoin);
}

function changeDoctor({data}={}) {
  const doctor = document.querySelector('#chooseDoctor').value;
  new Visit().deleteInputs();
  if(doctor === 'Cardiologist') {
    const visit = new VisitCardiologist();
    visit.renderCommon();
    visit.renderExtends()  
  };
  if(doctor === 'Dentist') {
    const visit = new VisitDentist(data);
    visit.renderCommon();
    visit.renderExtends() 
  };
  if(doctor === 'Therapist'){
    const visit = new VisitTherapist();
    visit.renderCommon();
    visit.renderExtends() 
  };  
}

function createNewAppoin() {
  const data = getDataFromModal();
  // console.log(date);
  const key = getNewId();
  const objData = {
    key,
    data: {doctor, name, target, description, state, pressure, bodyWeight, illnesses, age, date}
  }

  console.log({key, ...objData.data});

  // postCard(data);
  addCardToHtml({key, ...objData.data})
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
  // console.log(data);
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
}
const arrBtnMore = document.querySelectorAll('.card .more');
arrBtnMore.forEach(btn => btn.addEventListener('click', btnMore));

function btnMore() {
  const card = event.target.closest('.card');
  const id = card.id;
  card.querySelector('.extended').classList.remove('hidden');
  card.querySelector('.more').classList.add('hidden');
}

const arrChangeVisit = document.querySelectorAll('.card .changeVisit');
arrChangeVisit.forEach(btn => btn.addEventListener('click', btnChangeVisit));

function btnChangeVisit() {
  const card = event.target.closest('.card');
  // const id = card.id;
  // const doctor = card.querySelector('.doctor').innerHTML;
  const data = getDataFromHtml(card);
    console.log(data);


  if(data.doctor === 'Cardiologist') {
    // const card = new CardCardiologist(data);
    // card.renderHtmlCommon();
    // card.renderHtml();
  };
  if(data.doctor === 'Dentist') {
    new Modal().renderModal();
    document.querySelector('#chooseDoctor').addEventListener('change', changeDoctor);
    const visit = new VisitDentist(data);
    visit.renderCommon();
    visit.renderExtends();
    document.querySelector('#btnModelClose').addEventListener('click', closeModalCreate);
    document.querySelector('#btnModelCreate').addEventListener('click', createNewAppoin);
    // const card = new CardDentist(data);
    // card.renderHtmlCommon();
    // card.renderHtml();
  };
  if(data.doctor === 'Therapist') {
    // const card = new CardTherapist(data);
    // card.renderHtmlCommon();
    // card.renderHtml();
  }; 
}

function getDataFromHtml(card) {
  // const card = document.getElementById
  // console.log(card);
  const id = card.id;
  const doctor = card.querySelector('.doctor').innerText;
  const name = card.querySelector('.name').innerText;
  const target = card.querySelector('.target').innerText;
  const description = card.querySelector('.description').innerText;
  const state = card.querySelector('.urgency').innerText;  
    
  const pressure = card.querySelector('.pressure') ? document.querySelector('.pressure').innerText : false; 
  const bodyWeight = card.querySelector('.bodyWeight') ? document.querySelector('.bodyWeight').innerText : false;   
  const illnesses = card.querySelector('.illnesses') ? document.querySelector('.illnesses').innerText : false; 
  const age = card.querySelector('.age') ? document.querySelector('.age').innerText : false; 
  const date = card.querySelector('.date') ? document.querySelector('.date').innerText : false; 
  return {id, doctor, name, target, description, state, pressure, bodyWeight, illnesses, age, date}
}

// document.body.closest

