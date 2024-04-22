// Import Classes Here
const Product = require("./classes/Product");
const Cart = require("./classes/Cart");
const Customer = require("./classes/Customer");
const Auth = require("./classes/Auth");

const mangos = new Product("Mangos", 3, "The taste is delicious!");
const pinapple = new Product("Pinapple", 6, "Juicy!");
const myCart = new Cart();
myCart.addProduct(mangos);
myCart.addProduct(pinapple);

console.log(myCart);
console.log(myCart.removeProduct(0));



// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}