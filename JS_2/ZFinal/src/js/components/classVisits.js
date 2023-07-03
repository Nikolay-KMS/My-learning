
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