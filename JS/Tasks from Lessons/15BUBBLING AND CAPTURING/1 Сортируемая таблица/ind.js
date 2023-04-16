"use strict"

// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

grid.onclick = function(e) {
  if (e.target.tagName != 'TH') return;

  let th = e.target;
  // если ячейка TH, тогда сортировать
  // cellIndex - это номер ячейки th:
  //   0 для первого столбца
  //   1 для второго и т.д.
  // console.log(th.cellIndex);
  sortGrid(th.cellIndex, th.dataset.type);
};
function sortGrid(colNum, type) {
  let tbody = grid.querySelector('tbody');
  let rowsArray = Array.from(tbody.rows);

  // compare(a, b) сравнивает две строки, нужен для сортировки
  let compare;

  compare = function(rowA, rowB) {
    if (type === 'number') {
      return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
    }
    if (type === 'string') {
      return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
    }
  }

  // сортировка
  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}
