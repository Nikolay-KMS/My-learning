
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
