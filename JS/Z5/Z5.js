"use strict"

function createNewUser() {
  const newUser = {
  _firstName : undefined,
  _lastName : undefined,
    set firstName (value) {
      if (value.toLowerCase() === "ivan") {                      // Видає помилку при умові...
        alert (`${value} is going through the forest`)
      } else {
        newUser._firstName = value;
      };
    },
    set lastName (value) {
      if (value.toLowerCase() === "ivanov") {    
        alert (`${value} is going through the forest too :))`)
      } else {
        newUser._lastName = value;
      };
    },
  };
  newUser.firstName = prompt (`Write you first name`);
  newUser.lastName = prompt (`Write you last name`);
  newUser.getLogin = function () {
    let getLogin = `${newUser._firstName[0]}${newUser._lastName}`;
    return getLogin.toLowerCase();
  };
  return newUser;
};
const user = createNewUser();
console.log(user);
user.firstName = "Ivan";                        // Перевірка роботи Setter 
console.log(`Login is ${user.getLogin()}`); 
console.log(user);
