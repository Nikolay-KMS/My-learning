import productCard from './productCard.js';

const productList = (data) => {

    document.querySelector('#productContainer').innerHTML = '';

    for (let product of data) {
		new productCard(product).renderCard();
	}
}


export default productList;