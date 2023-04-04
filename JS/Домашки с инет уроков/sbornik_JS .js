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

// Напишіть функцію sumInput() яка: Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
// Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
// Підраховує та повертає суму елементів масиву.

// const arr = [];
// function sumInput() {
//   while (true) {
//     let value = prompt('Write a number');
//     if (value === null || value === "" || isNaN((+value))) break;
//     arr.push (+value);    
//   }
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// };
// console.log(`Summ ${sumInput()}`);
// console.log(arr);

// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”. Тобто дефіси видаляються, а всі слова після них починаються з великої літери.

// function camelize (str) {
//   let arr = str.split('-');
//   const arr2 = arr.map((element, index) => {
//     return index === 0 ? element : element[0].toUpperCase() + element.slice(1);
//   });
//   return arr2.join('');
// };
// const string = "background-color";
// const string2 = "ist-style-image";
// console.log( camelize (string));

// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
// Функція повинна повертати новий масив і не змінювати вихідний

// let filterRange = (arr, a, b) => {
//   return arr.filter(elem => 
//     (elem >= a && elem <= b ));
// };
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.
// Функція повинна змінювати поточний масив і нічого не повертати.

// let arr = [5, 3, 8, 1, 0, 0, 1];
// function filterRangeInPlace (arr, a, b)  {
//   for (let index = 0; index < arr.length; index++) {
//     let val = arr[index];
//     if (a > val || val > b) {
//       arr.splice(index, 1);
//       index--;
//     };    
//   };
// };
// filterRangeInPlace(arr, 0, 4);
// console.log( arr );

// Сортувати за спаданням

// let arr = [5, 2, 1, -10, 8];
// arr.sort ((a, b) => (b - a));
// console.log( arr ); 

// У нас є масив рядків arr. Потрібно отримати відсортовану копію та залишити arr незміненим. Створіть функцію copySorted(arr), яка буде повертати таку копію.

// let arr = ["HTML", "JavaScript", "CSS"];
// let copySorted = (arr) => {
//   return arr.map(item => item).sort()
// };
// let sorted = copySorted (arr)
// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без змін)

// По-перше, реалізуйте метод calculate(str), який приймає рядок типу "1 + 2" в форматі «ЧИСЛО оператор ЧИСЛО» (розділені пробілами) і повертає результат. Метод повинен розуміти плюс + і мінус -.
// Потім додайте метод addMethod(name, func), який додає в калькулятор нові операції. Він приймає оператор name і функцію з двома аргументами func(a, b), яка описує його.
// Наприклад, давайте додамо множення *, ділення / і зведення в ступінь **

// function Calculator() {
//   this.metods = {
//     "+": (a, b) => a + b,
//     "-": function (a, b) {
//       return a - b;
//     },
//   };
//   this.calculate = function (string) {
//     let str = string.split(" "),
//     a = +str[0],
//     b = +str[2],
//     operator = str[1];
//     return (!(operator in this.metods) || isNaN (a) || isNaN (b)) ?
//       "Alert" :
//       this.metods[operator](a, b);
//   };
//   this.addMethod = (name1, func) => {
//     this.metods[name1] = func;
//   };
// };
// // let calc = new Calculator;
// // console.log( calc.calculate("3 + 7") );
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("5 + 8");
// console.log(result);
// console.log(powerCalc);

// У вас є масив об’єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх в масив імен.

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };
// let users = [ ivan, petro, mariya ];
// let names = users.map( elem => {
//   return elem = elem.name ;
//   }  
// );
// console.log( names ); // Іван, Петро, Марія

// У вас є масив обʼєктів user, і у кожного з обʼєктів є name, surname та id. Напишіть код, який створить ще один масив обʼєктів з параметрами id й fullName, де fullName – складається з name та surname.

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };
// let users = [ ivan, petro, mariya ];
// let usersMapped = users.map (item => {
//   const arr = {};
//   arr.fullName = item.name + " " + item.surname,
//   arr.id = item.id;
//   return arr;
// });
// usersMapped[0].fullName = "Vasja"
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Іван Іванко

// Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };
// let arr = [ petro, ivan, mariya ];
// function sortByAge(arr) {
//   arr.sort((a, b) => (a.age - b.age) 
// )}
// sortByAge(arr)
// // now: [ivan, mariya, petro]
// console.log(arr[0].name); // Іван
// console.log(arr[1].name); // Марія
// console.log(arr[2].name); // Петро

// Напишіть функцію shuffle(array), яка перемішує (випадковим чином переставляє) елементи масиву.

// let arr = [1, 2, 3, 4];
// function shuffle(arr) {
//   const one = {};
//   arr.forEach(( item ) => {
//     one[Math.round(100000000 * Math.random())] = item;
//   });
//   arr.length = 0;
//   for (let key in one) {
//     arr.push (one[key])
//   }
// };
// shuffle(arr);
// console.log(arr);

// Напишіть функцію getAverageAge(users), яка приймає масив об’єктів з властивістю age та повертає середній вік.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// let getAverageAge = (users) => {
//   return users.reduce((sum, item) =>  sum + item.age , 0) / users.length;
// }
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Нехай arr – масив рядків. Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.

// function unique(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     if( arr.indexOf( arr[index], (index + 1) ) > -1) {
//       arr.splice( index, 1 )
//       index--;
//     };
//   };
//   return arr;
// };
// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];
// console.log( unique(strings) ); // Привіт, Світ, :-O

// Припустимо, ми отримали масив користувачів у вигляді {id:..., name:..., age:...}. Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.

// let users = [
//   {id: 'іван', name: "Іван Іванко", age: 20},
//   {id: 'ганна', name: "Ганна Іванко", age: 24},
//   {id: 'петро', name: "Петро Петренко", age: 31},
// ];
// function groupById( arr ) {
//   const newObj = {};
//   arr.reduce((nothing, item) => {
//     newObj[item.id] = item;
//   }, {});
//   return newObj;
// };
// let usersById = groupById(users);
// console.log(usersById);

// Нехай arr – це масив.Потрібно створити функцію unique(arr), яка повинна повертати масив унікальних елементів arr

// function unique(arr) {
//   // return (Array.from( new Set (arr)));
//   return ([... new Set (arr)]);
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", {name : ":-O"}
// ];
// console.log( unique(values) ); // Hare, Krishna, :-O

// Анаграми – це слова, у яких ті ж букви в тій же кількості, але вони розташовуються в іншому порядку. Напишіть функцію aclean(arr), яка повертає масив без анаграм.

// function aclean(arr) {
//   let map = new Map();
//   for (let word of arr) {
//     // розділіть слово на літери, відсортуйте їх та знову з'єднайте
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log( aclean(arr) );

// Ми хотіли б отримати масив ключів map.keys() в змінну і далі працювати з ними, наприклад, застосувати метод .push



let map = new Map();
map.set("name", "John");

let keys = map.keys();

// Помилка: keys.push -- це не функція
// keys.push("more");
keys = Array.from(keys)
keys.push('more')

// console.log(map);
console.log(keys);
