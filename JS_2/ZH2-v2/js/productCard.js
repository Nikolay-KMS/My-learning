export default class ProductCard {
    constructor(product) {
        this.name = product.name
        this.decription = product.decription
        this.price = product.price
        this.img_url = product.img_url
        this.id = product.id
        this.category = product.category
        this.discount = product.discount
    }

   get getLink() {
        return `/product?category=${this.category}&id=${this.id}`
    }

    renderCard() {

        const wrapperCard = document.createElement("div");
        let parent = document.querySelector("#productContainer")

        wrapperCard.classList.add("card", "mb-2");
        try{
            if(!this.name){
                throw new Error('data this not valid')
            }
            wrapperCard.innerHTML =
                `   <div class="p-3">
                    <img src="${this.img_url}" class="card-img-top" alt="...">
                </div>
                            
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.decription}</p>
                    <p class="card-text">Price: ${this.price}</p>
                    <a href="${this.getLink}" class="btn btn-primary">Check details</a>
                </div>
                        `;
            if(this.discount){
                let p = document.createElement('p');
                p.classList.add('text-success')
                p.innerText = `Discount: ${this.discount}`;
                wrapperCard.querySelector('.card-body .btn').before(p);
            }
        }
        catch(error) {
            wrapperCard.innerHTML =`<h2>${error.message}</h2> `
        }
        finally {
            parent.append(wrapperCard);
        }

    }

    
}





