export default class ChangeColor {
  constructor(color) {
    this.color= color;
  }
  changeColor(elem) {
    elem.style.backgroundColor = this.color;
    elem.classList.add('played');
    elem.classList.remove('active');
  }
} 