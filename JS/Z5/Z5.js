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
      let Login = `${newUser._firstName[0]}${newUser._lastName}`;
      return Login.toLowerCase();
    },
  };
  newUser.firstName = prompt (`Write you first name`);
  newUser.lastName = prompt (`Write you last name`);
  return newUser;
};
const user = createNewUser();
console.log(user);
// user.firstName = "Ivan";                        // Перевірка роботи циклу if в Setter 
console.log(`Login is ${user.getLogin()}`); 
console.log(user);
