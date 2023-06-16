// 'use strict'

export default class ProductCard {
  constructor(obj){
    this.name= obj.name,
    this.description= obj.decription,
    this.price= obj.price,
    this.img_url= obj.img_url,
    this.id= obj.id,
    this.category= obj.category,
    this.discount= obj.discount

  }

  get getLink() {
    return `./single-product.html?category=${this.category}&id=${this.id}`
  }

  render() {
    let parent = document.querySelector('.products');
    let div = document.createElement("div");
    div.classList.add('card');
    parent.append(div);
    div.innerHTML = 
        ` <div class="p-3">
            <img src= ${this.img_url} class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}</p>
            <p class="card-text">Price: ${this.price}</p>
            <a href=${this.getLink} class="btn btn-primary">Check details</a>
          </div>`;
    if(this.discount) {
      let p = document.createElement('p');
      p.classList.add('text-success');
      p.innerText =`Discount: ${this.discount}%`;
      div.querySelector('a').before(p);
    }
  }
}