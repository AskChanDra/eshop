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
    //console.log(products);
    // let cartItems = localStorage.getItem('productsInCart');
    // cartItems = JSON.parse(cartItems);

    // let cartTotal = localStorage.getItem("totalCost");
    // cartTotal = parseInt(cartTotal);

    let tagsArray = products.map( a => a.category);
    tagsArray = tagsArray.filter((x, i, a) => a.indexOf(x) == i);


    // let productTag = document.querySelector('.product-tags');
    // let productList = document.querySelector('.product-list');
    
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

//renderProduct(productObjectList);
/*
function createProductList( productObjectList ) {
    
    // Test to see if there are products to display.
    if ( productObjectList.code != undefined ) {
        console.info( `No more product loaded becase ${productObjectList.code}.` );
    } else {
        productObjectList.forEach( productObject => {
            let completed = prouctObject.product_status === 'Completed' ? 'class="completed"' : '';
            let navListItem = document.createElement( 'li' );
            navListItem.innerHTML = `
                <a href="single.html?task=${taskObject.id}" ${completed}>
                    <h2 class="task-title">${taskObject.title.rendered}</h2>
                    <div class="task-date">${getDate(taskObject)}</div>
                    <div class="task-status">${taskObject.task_status}</div>
                </a>`;
                productList.append(navListItem);
        });

        ///morePostsTrigger();
    }    
} */

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