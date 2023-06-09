"use strict"

let books = [
  { 
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70 
  }, 
  {
   author: "Сюзанна Кларк",
   name: "Джонатан Стрейндж і м-р Норрелл",
  }, 
  { 
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  }, 
  { 
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  }, 
  {
   author: "Террі Пратчетт",
   name: "Рухомі картинки",
   price: 40
  },
  {
   author: "Анґус Гайленд",
   name: "Коти в мистецтві",
  }
];

function showElem(arr, id) {
  let parent = document.querySelector(id);
  let ul = document.createElement('ul');
  parent.append(ul);
  arr.forEach(element => {
    try {
      if(!element.author) throw new Error(`Ups, "Author" is not exist in Object: ${element.name}`)
      if(!element.price) throw new Error(`Ups, "Price" is not exist in Object: ${element.name}`)
      
      let liName = document.createElement('li');
      liName.classList.add('name')
      liName.innerText = `Книга: ${element.name}`;
      ul.append(liName);
      let ul2 = document.createElement('ul');
      liName.append(ul2);
      let liAuthor = document.createElement('li');
      liAuthor.innerText = `Автор: ${element.author}`;
      ul2.append(liAuthor);
      let liPrice = document.createElement('li');
      liPrice.innerText = `Ціна: ${element.price} гривень`;
      ul2.append(liPrice);
      // ul.insertAdjacentHTML("beforeend", `<li class= "name">Книга: ${element.name}<ul><li>Автор: ${element.author}</li>
      //                                   <li>Ціна: ${element.price} гривень</li></ul></li>`);

    } catch (error) {
      console.log(error.message); 
    }

  });
}

showElem(books, '#root');
