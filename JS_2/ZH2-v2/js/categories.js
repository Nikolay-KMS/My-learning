'use strict'
import filterProducts from './filterProduct.js';

export default class Category {

    constructor(name, link, subCat) {
        this.name = name
        this.link = link
        this.subCat = subCat
    }

    render () {
        createElem(this, document.querySelector('#categories-list'));

        function createElem (obj, parent) {
            const wrapper = document.createElement('div');
            const catLink = document.createElement('a');


            catLink.setAttribute('href', obj.link);
            catLink.innerText = obj.name;
            catLink.classList.add('list-group-item', 'list-group-item-action');
            catLink.addEventListener('click', (e) => {
                e.preventDefault();
                filterProducts({category: obj.name});
            })

            parent.append(wrapper);
            wrapper.append(catLink);


            if (obj.subCat) {
                for (let el of obj.subCat) {
                    createElem(el, wrapper);
                }
            }
        }
    }
}

