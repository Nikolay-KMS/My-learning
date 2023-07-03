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

