//import './style.css'
import './style.scss';
import config from './modules/config.js';
import getProductList from './modules/loadlist.js';
import {onLoadCalculateCartNumbers} from './modules/cart.js'
// import './modules/jquery.code.js';

// Get Products
getProductList( config.productURL )


// Calculate Cat Numbers
onLoadCalculateCartNumbers();


