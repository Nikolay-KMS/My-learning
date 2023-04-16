"use strict"

function filter(event) {
  let musikFilters = document.musikFilters.querySelectorAll('input');
  musikFilters = Array.from(musikFilters);
  let musikFiltersNotChecked = musikFilters.map(elem => (!elem.checked) ? elem.name : false).filter(elem => elem);  
  let bands = document.querySelectorAll('#bands span');
  bands = Array.from(bands);
    bands.map( elem => {
      if(musikFiltersNotChecked.includes( elem.dataset.type )) {
        elem.classList.add('hidden');
      } else {
        elem.classList.remove('hidden');
      };
    });    
};