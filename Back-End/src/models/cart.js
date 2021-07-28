const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productID: {type: String, unique: true, required: true},
    name: {type: String, unique: true, required: true},
    qnt: {type: Number, default: 0},
    price: {type: Number, required: true},
        
});
const Cart = mongoose.model('Cart', CartSchema);


module.exports = Cart;
