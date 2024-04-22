// const Product = require("./classes/Product");

class Cart {

    constructor(total = 0) {
        this.products = [];
        this.total = total;
    }

    addProduct(newProduct) {
        this.products.push(newProduct);
        this.total += newProduct.price;
    }

    removeProduct(i) {
        this.total -= this.products[i].price;
        return this.products.splice(i, 1);
    }
}

module.exports = Cart;