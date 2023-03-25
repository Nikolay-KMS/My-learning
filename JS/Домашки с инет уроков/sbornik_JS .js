"use strict"
                                        //  Сумма n-чисел, три варианта
// let sumTo = (n) => {
//   let sum =0;
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(10)); 

// function sumTo (n) {
//   for (sum = 0, i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(10)); 

// let sum;
// function sumTo(n) {
//   if (n === 1) return 1;
//   return n + sumTo(n-1);
//   }
// console.log(sumTo(10)); 

// function sumTo(n) {
//   return n * (n + 1) / 2
//   }
// console.log(sumTo(4));

// let sumTo = (n) => n * (n + 1) / 2;
// console.log(sumTo(10));

                                    // Завдання полягає в тому, щоб написати функцію factorial(n), яка обчислює n! за допомогою рекурсивних викликів.

// function factorial(n) {
//   return (n === 1) ?  1 : n * factorial(n - 1);
// }
// console.log(factorial(5));

                                                             // Напишіть функцію fib(n), яка повертає n-th число Фібоначчі.

// function fib(n) {
//   let numb;                                //    искомое число 
//   let nMinusTwo = 1;                        //    первые два значения нам уже известны           
//   let nMinusOne = 1;
//   console.time("answer time");             //    таймер вкл
//   for (let i = 2; i < n; i++) {
//     numb = nMinusOne + nMinusTwo;         //     искомое число 
//     nMinusTwo = nMinusOne;               //     искомое число на два порядковых номера назад
//     nMinusOne = numb;                    //     искомое число на один порядковый номер назад
//   }
//   console.timeEnd("answer time");         //     таймер выкл
//   return numb;
// }
// console.log(fib(77));

                                                    //  Напишіть функцію printList(list), що виводить список елементів один за одним.

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList() {
// for (; list;) {
//   console.log(list.value);
//   list = list.next;  
// }
//   return;
// }
// printList(list);

// function printList() {
//   if (list) {
//     console.log(list.value);
//     list = list.next;  
//     printList()
//   }
//   return;
//   }
//   printList(list);

// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ. Вывести объект в консоль. После чего сначала спросить у пользователя "Какое свойство вы хотите изменить?", потом - "На какое значение?". Изменить требуемое свойство и вывести объект в консоль

// let danItStudent = {
//   name : "Vasa",
//   "last name" : "Ivanov",
//   "number of work" : "10"
// };
// const getNewProperty = prompt (`What property do you want changing: ${Object.keys(danItStudent)}`);
// const getNewValue = prompt ('What value');
// console.log(danItStudent);
// danItStudent[getNewProperty] = getNewValue;
// console.log(danItStudent);

// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ. Вывести объект в консоль. После чего спрашивать у пользователя в цикле два вопроса - "Какое свойство вы хотите изменить?", потом - "На какое значение?". Цикл может иметь максимум 3 итерации. Если пользователь нажмет Cancel на любой из вопросов - досрочно прервать цикл. Вывести объект в консоль.

// let danItStudent = {
//   name : "Vasa",
//   lastName : "Ivanov",
//   numberOfWork : "10"
// };
// console.log(danItStudent);
// for (let i = 0; i < 3; i++) {   
//   const poperty = prompt (`What property do you want changing: ${Object.keys(danItStudent)}`);
//   if (!poperty) {
//     break;
//   }
//   const value = prompt ('What value');
//   if (!value) {
//     break;
//   }
//   danItStudent[poperty] = value;
// }
// console.log(danItStudent);

// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ. Вывести объект в консоль. После чего спросить у пользователя "Какое свойство вы хотите изменить?", и если у объекта такого свойства нет - переспрашивать с сообщением "имяСвойства у объекта нет. Напишите, пожалуйста, правильное свойство объекта" пока пользователь не введет имя существующего свойства объекта или не нажмет Cancel. Если пользователь не нажал Cancel, спросить "Какое значение вы хотите присвоить этому свойству?". Изменить требуемое свойство и вывести объект в консоль

// let danItStudent = {
//   name : "Vasa",
//   lastName : "Ivanov",
//   numberOfWork : "10"
// };
// console.log(danItStudent);
// let poperty = prompt (`What property do you want changing: ${Object.keys(danItStudent)}`);
// while (!(poperty in danItStudent)) {
//   poperty = prompt ('This property does not exist, please write right property of object');
//   if (poperty === null) {
//     break;
//   }
// }
// if (poperty in danItStudent) {
//   const value = prompt ('What value do you want to write fo this property');
//   danItStudent[poperty] = value;
// }
// console.log(danItStudent);

// Создать объект danItStudent, у которого будут такие свойства: имя, фамилия, количество сданных домашних работ. Вывести объект в консоль. После чего спрашивать у пользователя в цикле:

// "Какое свойство вы хотите изменить?"
// Если у объекта такого свойства нет - переспрашивать с сообщением "имяСвойства у объекта нет. Напишите, пожалуйста, правильное свойство объекта" пока пользователь не введет существующее свойство или не нажмет Cancel.
// Если пользователь нажал Cancel - завершить цикл переспрашивания и завершить цикл вопросов, выведя объект в консоль.
// Если пользователь ввел-таки имя существующего свойства объекта, задать вопрос - "На какое значение вы хотите поменять имяСвойства?".
// Поменять указанное свойство и начать новую итерацию цикла.
// Цикл может иметь максимум 3 итерации. Если пользователь нажмет Cancel на любой из вопросов - досрочно прервать цикл. Вывести объект в консоль.

// let danItStudent = {
//   name : "Vasa",
//   lastName : "Ivanov",
//   numberOfWork : "10"
// };
// console.log(danItStudent);
// cycle : for (let i = 0; i < 2; i++) {
//   let property = prompt (`What property do you want changing: ${Object.keys(danItStudent)}`);
//   if (property === null) {
//     break;
//   }
//   while (!(property in danItStudent)) {
//     property = prompt (`Property "${property}" does not exist, please write right property of object`);
//     if (property === null) {
//       break cycle;
//     }
//   }
//   const value = prompt (`What value do you want to change in property ${property}`);
//   if (value === null) {
//     break cycle;
//   }
//   danItStudent[property] = value;
// }
// console.log(danItStudent);

// Скопируйте объект student из задачи 1, напишите после его создания такой код: если коэффициент лени больше или равен 3, и при этом меньше или равен 5, а коэффициент хитрости больше или равен 4 - добавьте объекту свойство "new status" со значением "Студент имяСтудента фамилияСтудента отправлен на пересдачу". Выведите объект в консоль.

// let student = {
//   name : "Vasa",
//   lastName : "Ivanov",
//   laziness : 4,
//   trick : 5,
// };
// if (student.laziness >= 3 && student.laziness <= 5 && student.trick >= 4) {
//   student["new status"] = `Student ${student.name} ${student.lastName} was sent to retake`
// }
// console.log(student);

// Создать пустой объект student, спросить его имя и фамилию, добавить их как свойства объекта, и вывести в консоль сообщение "Студент имяСтудента фамилияСтудента готов к заполнению табеля!". После чего в цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. Если он ввел название очередного предмета и оценку по нему - добавить название как свойство объекта и оценку - как его значение. По окончании цикла вывести объект student консоль.

// let student = {};
// student.name = prompt ("Write student's name");
// student.lastName = prompt ("Write student's last name");
// console.log(`Student ${student.name} ${student.lastName} is ready to fill a form`);
// let subject;
// for (let i = 0; i < 10; i++) {
//   subject = prompt ("Write subject");
//   if (subject === null) {
//     break;
//   }
//   student[subject] = +prompt ("Write grade");
//   console.log(student);  
// }
// console.log(student);

// Создайте объект student, в котором будут такие свойства:
// имя;
// фамилия;
// коэффициент хитрости, равный 3;
// коэффициент лени, равный 5;
// course, равный 2;
// Выведите объект в консоль и напишите такой код: если коэффициент лени больше или равен 5, а коэффициент хитрости меньше 4 - удалите свойство course, и добавьте объекту свойство "new status" со значением "Студент имяСтудента фамилияСтудента передан в военкомат".

// let student = {
//   name : "Vasa",
//   lastName : "Ivanov",
//   trick : 3,
//   laziness : 5,
//   course : 2,
// };
// if (student.laziness >= 5 && student.trick < 4) {
//   delete student.course;
//   student["new status"] = `Студент ${student.name} ${student.lastName} передан в военкомат`
// }
// console.log(student);

// Создайте объект tabel со свойствами в виде названия трех разных предметов, значения которых пока равно null 
// Выведите объект в консоль, после чего спросите у пользователя оценки по каждому предмету. Если полученная оценка ниже 4, удалите это свойство из объекта tabel. По оконанию выведите объект в консоль.

// const tabel = {
//   history : null,
//   biology : null,
//   javascript : null,
// }
// console.log(tabel);
// for (let key in tabel) {  
//   tabel[key] = +prompt (`What grade in ${key}`)
//   if (tabel[key] < 4){
//     delete tabel[key];
//   }
// }
// console.log(tabel);

// Задача 14 Посчитайте количество свойств объекта: и добавьте ему свойство length, равное количеству свойств объекта. Выведите объект в консоль.

// const user = { 
//   name: "Влад", 
//   "second name": "Дракула", 
//   age: 400, 
//   marriage: false 
// };
// let lengthUser = 0;
// for (let key in user) {
//   lengthUser++;
// }
// user.length = lengthUser;
// console.log(user);

// Задача 15 Создайте пустой объект casesList. В цикле спрашивайте у пользователя: название дела; затраты времени на это дело (в минутах);
// Если пользователя нажал Cancel - выйдите из цикла и выведите объект в консоль, после чего подсчитайте общее количество дел. Если их больше 10 - выведите сообщение "Кто-то оптимист". А если общее количество времени на все дела больше 16 часов - также выведите сообщение "И очень хочет быть похожим на Цезаря".

// const casesList = {};
// while (true) {
//   let casesListWork = prompt ("White your work");
//   if (!casesListWork) {
//     break;
//   }
//   let casesListTime = prompt ("White time for work");
//   if (!casesListTime) {
//     break;
//   }
//   casesList[casesListWork] = +casesListTime;
// }
// console.log(casesList);
// let counter = 0;
// let counterTime = 0;
// for (let key in casesList) {
//   counter++;
//   counterTime += casesList[key];
//   console.log(casesList[key]);
// }
// if (counter > 10) {
//   alert ('Someone is optimist');
//   if (counterTime > 960) {
//     alert ('And want to be look like to Caesar');
//   }
// }

// Создать пустой объект tabel, после чего в цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. После чего посчитать количество плохих (меньше 4) оценок по предметам. Если их больше двух - вывести в консоль сообщение "Студент НЕ переведен на следующий курс".

// const tabel = {};
// while (true) {
//   let tabelSubject = prompt ("Name of subject");
//   if (!tabelSubject) {
//     break;
//   }
//   let tabelGrade = prompt ("Grade of subject");
//   if (!tabelGrade) {
//     break;
//   }
//   tabel[tabelSubject] = +tabelGrade;
// }
// console.log(tabel);
// for (let key in tabel) {
//   let counter = 0;
//   if (tabel[key] < 4) {
//     counter++;
//     if (counter = 2) {
//       console.log('Student was not transfered to the next course');
//       break;
//     } 
//   }
// }

// Задача 18   Создать пустой объект tabel, после чего в цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. После чего посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение "Студент переведен на следующий курс". После чего посчитать средний балл по предметам, и если он больше 7 - вывести сообщение "Студенту назначена стипендия".

// const tabel = {};
// while (true) {
//   let tabelSubject = prompt ("Name of subject");
//   if (!tabelSubject) {
//     break;
//   }
//   let tabelGrade = prompt ("Grade of subject");
//   tabel[tabelSubject] = +tabelGrade;
// }
// console.log(tabel);
// let studentTransferFlag = true;
// for (let key in tabel) {
//   if (tabel[key] < 4) {
//     studentTransferFlag = false;    
//   } 
// }
// if (studentTransferFlag) {
//   console.log('Student was transfered to the next course');
//   let studentGrantCount = 0;
//   let studentSubjectCount = 0;
//   for (let key in tabel) {
//     studentSubjectCount++;
//     studentGrantCount += tabel[key];
//   }  
//   studentGrantCount = studentGrantCount / studentSubjectCount;
//   if (studentGrantCount > 7) {
//     console.log('The grant was set to student');
//   }
// }

// Выведите в консоль все размеры нотбука отдельными сообщениями, используя функцию перебора

// const notebook = {
//   name: "LG Gram",
//   price: "36000",
//   size: {
//     width: 15,
//     height: 10.5,
//     depth: 0.7
//     }
// };
// for(let key in notebook.size) {
//   console.log(`${[key]} равна  ${notebook.size[key]}`);
// }

// Задача 3  Создайте пустой объект notebook2 и скопируйте в него все поля из объекта notebook из задачи 2. Поменяйте в notebook2 значения поля name на "Acer Swift 5" и size.width на 16 и выведите оба объекта в консоль. Подсказка: используйте for..in и typeof

// const notebook = {
//   name: "LG Gram",
//   price: "36000",
//   size: {
//     width: 17,
//     height: 10.5,
//     depth: 0.7
//     }
// };  
// const notebook2 = {};
// for(let key in notebook) {
//   if (typeof notebook[key] === "object" && notebook[key] !== null) {
//     notebook2[key] = {};
//     for(let key2 in notebook[key]) {
//       notebook2[key][key2] = notebook[key][key2];
//     }
//   } else {
//     notebook2[key] = notebook[key]
//   }
// }
// notebook2.name = "Acer Swift 5";
// notebook2.size.width = 16;
// console.log(notebook);
// console.log(notebook2);

// Задача 4 Создайте объект notebook с полями: name и price, и добавьте встроеный метод getDiscount(), в который в качестве аргумента будет передаваться процент скидки, и который будет возвращать цену с учетом этой скидки. Спросите у пользователя размер скидки и выведите в консоль цену с учетом этой скидки.

// const notebook = {
//   name: "LG Gram",
//   price: "36000",
//   getDiscount : function (n) {
//     return (100 - n) / 100 * this.price
//   }
// }
// const discont = prompt ('What discont would you want');
// console.log(notebook.getDiscount (discont));

// Задача 5  Возмите объект student: и добавьте в него функцию averageRating, которая выводит средний бал оценок по предметам. Выведите средний бал в консоль.

// const student = {
//   name: "Катерина",
//   "last name": "Петрова",
//   status: null,
//   tabel: {
//     history: 12,
//     biology: 12,
//     mathematics: 8,
//     physics: 9,
//     geography: 7
//   }
// };
// student.averageRating = function () {
//   let sum = 0;
//   let count = 0;
//   for (let key in this.tabel) { 
//     count++;
//     sum += this.tabel[key];
//   }
//   return sum / count;
// }

// console.log(student.averageRating ());

// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// function isEmpty(nameF) {
//   let sum = 0;
//   for (let key in nameF) {
//     sum += nameF[key];
//   }
//     return sum;  
// }
// console.log(isEmpty(salaries)); 

// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };
// function multiplyNumeric (nameFunc) {
//   for (let key in nameFunc) {
//     if (typeof nameFunc[key] === "number") {
//       nameFunc[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);