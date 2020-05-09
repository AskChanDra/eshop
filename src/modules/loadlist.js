import { addAddToCartEventListener } from './cart.js';
import productFilter from './jquery.code.js';

// DOM
const productTag = document.querySelector('.product-tags');
const productList = document.querySelector('.product-list');

// Products
let products = [ 
    {
        id: "p_1",
        name: "Flash T-Shirt",
        category: "Tee",
        price: "75.00",
        bgColor: "#F95A2C",
        inCart:0
    },
    {
        id: "p_2",
        name: "Fur-neck Jacket",
        category: "Jacket",
        price: "315.00",
        bgColor: "#00C6AE",
        inCart:0
    },
    {
        id: "p_3",
        name: "Everyday Classic Blazer",
        category: "Blazer",
        price: "200.00",
        bgColor: "#FFBD12",
        inCart:0
    },
    {
        id: "p_4",
        name: "White striped T-Shirt",
        category: "Tee",
        price: "78.00",
        bgColor: "#FF89BB",
        inCart:0
    },
    {
        id: "p_5",
        name: "Grey striped T-Shirt",
        category: "Tee",
        price: "112.00",
        bgColor: "#1947E5",
        inCart:0
    }
];

function createProductList( products ) {

    let tagsArray = products.map( a => a.category);
    tagsArray = tagsArray.filter((x, i, a) => a.indexOf(x) == i);
    
    if( tagsArray && productTag ) {
        productTag.innerHTML = '<p class="product-tag" href="" data-rel="items">All</p>';
        Object.values(tagsArray).map( (item, index) => {
            productTag.innerHTML += 
            `<p class="product-tag" data-rel="${item.toLocaleLowerCase()}">${item}s</p>`;
        });
    }
    
    if( products && productList ) {
        productList.innerHTML = '';
        
        Object.values(products).map( (item, index) => {
            productList.innerHTML += 
            `<li class="items ${item.category.toLocaleLowerCase()}">              
            <div class="infoWrap"> 
                <div class="cartSection">
                <img src="images/${item.id}.svg" alt="${item.id}" class="itemImg" style="background-color:${item.bgColor};" />
                    <p class="itemCategory">${item.category}</p>
                    <h3 class="product-title">${item.name}</h3>                    
                    <p class="qty">$${item.price}</p>                    
                    <p class="add-to-cart"><a href="#" class="btn-add">Add +</a></p>
                </div>                  
            </div>
        </li>`;
        });
    }
    addAddToCartEventListener(products);
    productFilter();
}



const getProductList = ( listRoute ) => {

    fetch( listRoute, {
        method: 'GET'
    })
    .then( response => response.json() )
    .then( productObjectList => createProductList( productObjectList.products ) )
    .catch( (error) => {
        console.error( 'Fetch error: ', error );
    })

}

export default getProductList;