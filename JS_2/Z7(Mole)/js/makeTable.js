

export default class makeTable {
  render(amount) {
    let couner = 1;
    let table = document.createElement('table');
    table.classList.add('table')
    document.querySelector('.point').append(table);
    for (let i = 0; i < amount; i++) {
      let tr = document.createElement('tr');
      table.append(tr);
      for (let j = 0; j < amount; j++) {
        let td = document.createElement('td');
        tr.append(td);
        td.classList.add(`box`, `box-${couner++}`)        
      };
    };
  };
};


