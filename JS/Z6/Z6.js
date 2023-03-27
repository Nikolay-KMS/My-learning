"use strict"

function createNewUser() {
  const newUser = {
  _firstName : '',
  _lastName : '',
    set firstName (value) {
      if (value.toLowerCase() === "ivan") {                      // Видає помилку при перевірці на "ivan"
        alert (`${value} is going through the forest`)
      } else {
        this._firstName = value;
      };
    },
    set lastName (value) {
      this._lastName = value;      
    },
    getLogin () {
      let Login = `${this._firstName[0]}${this._lastName}`;
      return Login.toLowerCase();
    },
    getAge() {
      let today = new Date ();
      return (today.getFullYear() - this.birthday.getFullYear());
    },
    getPassword() {
      return (`${this._firstName[0].toUpperCase()}${this._lastName}${this.birthday.getFullYear()}`);
    }
  };
  // newUser.firstName = prompt (`Write you first name`);
  // newUser.lastName = prompt (`Write you last name`);
  newUser.firstName = "nik";
  newUser.lastName = "ivanov";
  let wrongDate = prompt(`Write you birthday in format: dd.mm.yyyy`);
  newUser.birthday = new Date(`${wrongDate.slice(6)} ${wrongDate.slice(3, 5)} ${wrongDate.slice(0, 2)}`);
  // newUser.birthday = new Date(`1987 05 11`);
  return newUser;
};
const user = createNewUser();
console.log(user);
console.log(`Login is ${user.getLogin()}`); 
console.log(`User is ${user.getAge()} years old now`);
console.log(`Password is ${user.getPassword()}`);

