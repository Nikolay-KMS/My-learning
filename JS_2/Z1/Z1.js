"use strict"

class Employee {
  constructor(name = 'Noname', age = "undef", salary = "None") {
    this.name = name
    this.age = age
    this.salary = salary
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  get salary() {
    return this._salary;
  }
  set salary(value) {
    if(value < 1000) {
      console.log('I don\'t agree on this salary');
      return;
    }
    this._salary = value;
  }
}

class Programmer extends Employee {  
  constructor(name, age, salary, lang = "now only obscenities") {
    super(name, age, salary)
    this.lang = lang
  }

  set salary(value) {
    this._salary = value;
  }
  get salary() {
    return (this._salary)*3;
  }
}

const employee_1 = new Employee ('Yasja', 54, 800);
console.log(employee_1);

const programmer_1 = new Programmer ('Yasja', 54, 800);
console.log(programmer_1);
console.log(programmer_1.salary);

const programmer_2 = new Programmer ('Petrynja', 87, 10000);
console.log(programmer_2);