
class Visit {
  constructor({id, doctor, name='', target='', description='', state, pressure='', bodyWeight='', illnesses='', age='', date=''} ={}) {
    this.id = id;
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
  renderCommon() {
    console.log(this);
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
      <label for="nameCreate" class="mx-auto mt-2 block"> Type your First & Last Name
        <input id="nameCreate" required type="text" placeholder="Name" class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.name}>
      </label>
      <label for="targetCreate" class="block "> Type your target
        <input id="targetCreate" required type="text" class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.target}>
      </label>
      <label for="descriptionCreate" class="block "> Type your description
        <input id="descriptionCreate" required type="text" class="bg-sky-200 text-orange-950 rounded pl-3" value=${this.description}>
      </label>
      <select name="stateCreate" id="stateCreate" class="bg-yellow-200 text-slate-900 cursor-pointer px-4 rounded">
        <option disabled selected class="">Urgency</option>
        <option value="High" class="">High</option>
        <option value="Normal" class="">Normal</option>
        <option value="Low" class="">Low</option>
      </select> `)
  }
  deleteInputs() {
    document.querySelector('#inputs').innerHTML = '';
  }

  changeVisit() {
    console.log(document.querySelector('#inputs'));

  }
}

class VisitCardiologist extends Visit {
  renderExtends() {
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
      </label>
    `
    )
  }
}

class VisitDentist extends Visit {
  renderExtends() {
    // console.log(this);
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `
 
      <label for="dateCreate" class="block "> Type date of last appointment
        <input id="dateCreate" type="date" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
    `
    )
  }
}

class VisitTherapist extends Visit {
  renderExtends() {
    document.querySelector('#inputs').insertAdjacentHTML('beforeend', `


      <label for="age" class="block "> Age
        <input id="age" type="text" required class="bg-sky-200 text-orange-950 rounded pl-3">
      </label>
    `
    )
  }
}