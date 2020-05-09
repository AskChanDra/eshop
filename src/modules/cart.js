
function addAddToCartEventListener(products){
    let addToCarts = document.querySelectorAll('.btn-add');
    for(let i=0; i< addToCarts.length; i++) {
        addToCarts[i].addEventListener('click', () => {
            calculateCartNumbers(products[i]);
            calculateTotalCost(products[i]);
            return false;
        });
    }
}

function onLoadCalculateCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.shop-cart span').textContent = productNumbers;
    }
}


function calculateCartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.shop-cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.shop-cart span').textContent = productNumbers + 1;
        console.log("productNumber running");
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.shop-cart span').textContent = 1;
        console.log("First time add to cart... running");
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProductID = product.id;
    
        if( cartItems[currentProductID] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProductID]: product
            }
        } 
        cartItems[currentProductID].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.id]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function calculateTotalCost( product, action ) {
    let cartTotal = localStorage.getItem("totalCost");

    if( action) {
        cartTotal = parseInt(cartTotal);

        localStorage.setItem("totalCost", cartTotal - product.price);
    } else if(cartTotal != null) {
        
        cartTotal = parseInt(cartTotal);
        localStorage.setItem("totalCost", cartTotal + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}


export {
    addAddToCartEventListener,
    onLoadCalculateCartNumbers,
    calculateCartNumbers,
    setItems,
    calculateTotalCost
};
