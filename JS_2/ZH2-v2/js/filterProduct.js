import data from '../data/data.json' assert {type: 'json'};
import productList from './productList.js';


function sortProducts(){
    let currentSettings = {
        discount: false
    };
    return (args) => {

        let productsArray = data.products;
        const {category, discount} = args;

        if(discount !== undefined){
            currentSettings.discount = discount;
        }

        // if(category){
        //     currentSettings.category = category;
        // }


        if(category){
            function getCategories(source){
                let categories = [];
                source.every(el=>{
                    if(el.name === category){
                        if(el.hasOwnProperty('subcategories') && el.subcategories){
                            el.subcategories.forEach(sub=>{
                                categories.push(sub.name);
                            });
                        } else {
                            categories.push(el.name);
                        }
                        return false;
                    } else if(el.hasOwnProperty('subcategories') && el.subcategories){
                        categories = getCategories(el.subcategories);
                    }
                    return true;
                });
                return categories;
            }
            currentSettings.category = getCategories(data.categories);
        }



        if(currentSettings.discount){
            productsArray = productsArray.filter(el => {
                return el.discount;
            })
        }

        if(currentSettings.category){
             productsArray = productsArray.filter(el => {
                return currentSettings.category.includes(el.category);
             })
        }


       productList(productsArray)
    }
}

let filterProducts = sortProducts()

export default filterProducts;
