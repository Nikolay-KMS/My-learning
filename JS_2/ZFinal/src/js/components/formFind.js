
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