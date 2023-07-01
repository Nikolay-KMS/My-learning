
class Cards {
  constructor({key:id, doctor, name, target, description, state} = {}) {
    this.id = id;
    this.doctor = doctor;
    this.name = name;
    this.target = target;
    this.description = description;
    this.state = state;
  }  

  renderHtmlCommon() {
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
          <div class="deleteCard cursor-pointer">
            <div class="bg-red-600 w-5 h-0.5 rotate-45 translate-y-0.5 "></div>
            <div class="bg-red-600 w-5 h-0.5 -rotate-45"></div>
          </div>
        </div>
      </div>  `
    )
  }

  editCardCommon() {
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

  renderHtml() {
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