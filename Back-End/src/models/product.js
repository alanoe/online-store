const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    qnt: {type: Number, default: 0},
    price: {type: Number, required: true},
    description: String,
    image: {type: String, required: false}
});
const Product = mongoose.model('Product', ProductSchema);


module.exports = Product;
