const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: {type: Number, unique: true, required: true},
    name: {type:String, required: true},
    qnt: {type: Number, default: 0},
    price: {type: Number, required: true},
    description: String,

})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;